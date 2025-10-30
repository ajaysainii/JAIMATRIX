<template>
    <div class="modal">
   <div class="modal-content p-5 companyinfo-modalform">
     <div class="form-group w-100  animate__fadeIn animate__animated login-form">
       <form>  
        <div class="mb-5">
          <h2 class="heading">Company Details</h2>
        </div>
        <div>
          <input
            id="profile-id"
            type="hidden"
            v-model="companyData.profile_id"
          />
        </div>
        <div class="row mx-auto">
          <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
            <label for="name">Company Name <span>*</span></label>
            <p>{{ companyData.company_name }}</p>
          </div>
          <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
            <label for="website">Website</label>
            <p>{{ companyData.website }}</p>
          </div>
          <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
            <label for="industry">Industry</label>
            <p>{{ companyData.industry }}</p>
          </div>
          <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
            <label for="sub_industry">Sub Industry</label>
            <p>{{ companyData.sub_industry }}</p>
          </div>
          <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
            <label for="foundation_year">Foundation Year</label>
            <p>{{ companyData.foundation_year }}</p>
          </div>
          <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
            <label for="listed_type">Listed/Non-listed</label>
            <p>{{ companyData.listed_type }}</p>
          </div>
          <div class="form-group col-lg-12 col-md-6 col-12 mb-3">
            <label for="location">Address Company</label>
            <p>{{ companyData.location }}</p>
          </div>
        </div>
        <div class="d-flex my-4 justify-content-between align-items-center companyinfo flex-wrap">
          <button @click="close" type="button" class="submit-btn outline-btn mx-3">
            Cancel
          </button>
        </div>
       </form> 
     </div>
   </div>
 </div>
</template>

<script>
import authenticated from "@/middleware/authenticated";

export default {
 name: "CompanyInformationModal",
 middleware: [authenticated],
 props:{
   companyId:{
     type: Number,
     require: true
   }
 },
 data() {
   return {
     companyData: {
       user_id: '',
       company_id:"",
       company_name: "",
       website: "",
       foundation_year: "",
       listed_type: "",
       industry: "",
       sub_industry: "",
       location: "",
       status:"",
     },
     modalOpen: false,
   };
 },
async mounted(){
   if(this.companyId){
     var response = await this.$store.dispatch('retriveCompany', this.companyId)
     const companyProfile = response.data.data[0].form;
     if (response.data.data[0].form) {
       this.companyData.profile_id = companyProfile.company_id;
       this.companyData.company_name = companyProfile.name;
       this.companyData.website = companyProfile.website;
       this.companyData.foundation_year = companyProfile.founded_year;
       this.companyData.listed_type = companyProfile.listed;
       this.companyData.industry = companyProfile.industry;
       this.companyData.sub_industry = companyProfile.subindustry;
       this.companyData.location = companyProfile.address;
     }
   }
 },
 methods: {
   close(){
     this.$emit('close')
   }
 },
};
</script>

<style scoped>
.heading{
   display: flex;
   justify-content: center;
}
.modal {
 display: flex;
 justify-content: center;
 align-items: center;
 position: fixed;
 z-index: 1000;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
 background-color: #fff;
 padding: 20px;
 border-radius: 5px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
 max-width: 800px;
 width: 100%;
 height: 560px;
 display: flex;
 justify-content: center;
 align-items: center;
}
.submit-model {
 padding: 0.8rem 1.5rem;
 border: none;
 color: #fff;
 font-size: 1.2rem;
 cursor: pointer;
 transition: background-color 0.2s ease-in-out;
 margin-top: 20px;
 background: #0067FF;
 box-shadow: 0px 4px 19px rgba(30, 99, 233, 0.3);
 border-radius: 10px;
 float: right;
 margin-right: 10px;
 width: 100%;
 border: 1px solid #0067FF;
}

.submit-model, .outline-btn{
 box-shadow: none !important;
}
.form-select {
 /* padding: 0.9rem !important; */
 border: 1px solid #0077ff !important;
 border-radius: 10px !important;
 font-size: 1rem !important;
 width: 100%;
 /* margin-bottom: 20px; */
}

.submit-Cancel {
 padding: 0.8rem 1.5rem;
 border: none;
 color: #0067FF;
 font-size: 1.2rem;
 cursor: pointer;
 transition: background-color 0.2s ease-in-out;
 margin-top: 20px;
 box-shadow: 0px 2px 5px rgb(30 99 233 / 30%);
 border-radius: 10px;
 float: right;
 background: #fff;
 border: 1px solid #0077ff !important;
 width: 100%;

}
</style>