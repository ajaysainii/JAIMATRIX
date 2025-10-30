<template>
  <div class="modal">
    <div class="modal-content p-5 companyinfo-modalform">
      <div class="form-group w-100  animate__fadeIn animate__animated login-form">
        <form>
          <div class="mb-3">
            <h2 v-if="!companyId" class="heading">Add Company</h2>
            <h2 v-else class="heading">Update Company</h2>
            <p class="heading">
              Please fill in your basic company or project details so that we know who you are.
            </p>
          </div>
          <div>
            <input id="profile-id" type="hidden" v-model="companyData.profile_id" />
          </div>
          <div class="row mx-auto">
            <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
              <label for="name">Company Name <span>*</span></label>
              <input type="text" id="company_name" name="company_name" placeholder="Company Name"
                v-model="companyData.company_name" />
              <span v-if="nameerrorMessage" class="error-message">{{
                nameerrorMessage
                }}</span>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
              <label for="website">Website</label>
              <input type="text" id="website" name="website" placeholder="Enter Your Website"
                v-model="companyData.website" />
              <span v-if="websiteerrorMessage" class="error-message">{{
                websiteerrorMessage
                }}</span>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
              <label for="website">industry</label>
              <input type="text" id="industry" name="industry" placeholder="industry" v-model="companyData.industry" />
              <span v-if="websiteerrorMessage" class="error-message">{{
                websiteerrorMessage
                }}</span>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
              <label for="website">Sub industry</label>
              <input type="text" id="sub_industry" name="sub_industry" placeholder="Sub industry"
                v-model="companyData.sub_industry" />
              <span v-if="websiteerrorMessage" class="error-message">{{
                websiteerrorMessage
                }}</span>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
              <label for="foundation_year">Foundation Year</label>
              <input type="text" id="foundation_year" name="foundation_year" placeholder="Foundation Year"
                v-model="companyData.foundation_year" />
              <span v-if="foundationerrorMessage" class="error-message">{{
                foundationerrorMessage
                }}</span>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-12 mb-3">
              <label for="password">Listed/Non-listed</label>
              <input type="text" id="listed_type" name="listed_type" placeholder="Listed/Non-listed"
                v-model="companyData.listed_type" />
              <span v-if="listederrorMessage" class="error-message">{{
                listederrorMessage
                }}</span>
            </div>
            <div class="form-group col-lg-12 col-md-6 col-12 mb-3">
              <label for="location">Address Company</label>
              <input type="text" id="location" name="location" placeholder="Address Company"
                v-model="companyData.location" />
              <span v-if="locationerrorMessage" class="error-message">{{
                locationerrorMessage
                }}</span>
              <input hidden type="text" id="location" name="location" placeholder="Address Company"
                v-model="companyData.status" />
            </div>
          </div>
          <div class="d-flex my-4 justify-content-between align-items-center companyinfo flex-wrap">
            <button @click="close" type="button" class="submit-btn outline-btn mx-3">
              Cancel
            </button>
            <button @click="Projectinfo" v-if="!companyId" type="button" class="submit-btn">
              <span v-if="!isLoading">Save</span>
              <span v-else class="loader"></span>
            </button>
            <button @click="updateCompanyInfo" v-if="companyId" type="button" class="submit-btn update-btn">
              Update
            </button>
          </div>
          <div>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
      errorMessage: "",
      nameerrorMessage: "",
      websiteerrorMessage: "",
      industryerrorMessage: "",
      subindustryerrorMessage: "",
      listederrorMessage: "",
      locationerrorMessage: "",
      foundationerrorMessage: "",
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
      isLoading: false
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
    async Projectinfo() {
      try {
        if (this.companyData.company_name === "") {
          this.nameerrorMessage = "Company name is required";
          return false;
        } else {
          this.nameerrorMessage = "";
        }
        const owner_id = JSON.parse(localStorage.getItem("setUser")).user_id;

        var formData = {
            user_id: owner_id,
            owner_id: owner_id,
            company_id:this.companyData.company_id,
            name: this.companyData.company_name,
            website: this.companyData.website,
            founded_year: this.companyData.foundation_year,
            listed: this.companyData.listed_type,
            industry: this.companyData.industry,
            subindustry: this.companyData.sub_industry,
            address: this.companyData.location,
            operation:"add",
            OPtype:"Company",
            activity_status:"Active",
        }
        this.isLoading = true
        var response = await this.$store.dispatch('addCompnay' , formData)
        if (this.companyData.company_name) {
          this.isLoading = false
          this.$toast.success("Company Info add successfully!");
          this.$emit('close')
          this.$router.push("/Dashboard");
        } else {
          this.$toast.error("Something went wrong!");
        }
     
      } catch (error) {
        console.error(error)
        this.$toast.error("Something went wrong!");
      }
    },
    async updateCompanyInfo() {
      if(this.companyId){
        const company_id = this.companyId;
        try {
          const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;
          var formData =  {
            Company_user_id: user_id,
            Company_id:company_id,
            Company_name: this.companyData.company_name,
            Company_website: this.companyData.website,
            Company_founded_year: this.companyData.foundation_year,
            Company_listed: this.companyData.listed_type,
            Company_industry: this.companyData.industry,
            Company_subindustry: this.companyData.sub_industry,
            Company_address: this.companyData.location,
            operation:"update",
            OPtype:"Company"
          }
          var response = await this.$store.dispatch('updateCompany', formData)
          if (response.status === 200) {
            this.$toast.success("CompanyInfo update successfully");
            this.$store.dispatch('getCompnies')
            this.$emit('close')
          } else {
            this.$toast.error("Something went wrong!");
          }
        } catch (error) {
          console.error(error);
          this.$toast.error("Something went wrong!");
        }
      }
    },
    modelopen(){
      this.modalOpen = true;
    },
    close(){
      this.$emit('close')
    }
  },
};
</script>

<style scoped>
.submit-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px; /* Adjust as needed */
  font-size: 16px; /* Adjust as needed */
  border: none;
  background-color: #FF7F27; /* Adjust as needed */
  color: white;
  cursor: pointer;
}
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
button span {
  color: white;
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