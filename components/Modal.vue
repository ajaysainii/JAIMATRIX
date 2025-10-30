<template>
  <div class="modal ">
    <div class="modal-content px-4 py-5">
      <div class="mb-3">
            <h2 class="heading d-flex justify-content-center align-items-center">Add Project</h2>
            <p class="heading"> 
              Please fill in your basic project details so that we know who you are.
            </p>
          </div>
      <div class="form-group w-100   animate__fadeIn animate__animated">
        <label for="form-select">Select Industry<span>*</span></label>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="companyData.industry"
              >
                <option value="" selected>Select Industry</option>
                <option value="General Industry">General </option>
                <option value="Venture Industry">Venture </option>
                <option value="Energy Industry">Energy </option>
                <option value="VC Fund Industry">VC Fund</option>
              </select>
                <span v-if="nameerrorMessage" class="error-message">{{
                        nameerrorMessage
                      }}</span>
        </div>
      <div class="form-group w-100 mt-4  animate__fadeIn animate__animated">
        <!-- <h5>Select Company</h5> -->
        <label for="form-select">Select Company</label>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="selectCompany.company_id"
              >
                <option value="" selected>Select Company</option>
                <option v-for="(companyProfiles, index) in companyProfile" :key="index" :value="companyProfiles.company_id">{{ companyProfiles.name }}</option>
              </select>
        </div>
      <!-- Other input fields go here -->
      <div
            class="d-flex w-100 mt-5 justify-content-center align-items-center companyinfo"
          >
          <button
            @click="closeModal"
              type="button"
              class="submit-Cancel w-25 mx-3 outline-btn"
            >
            Cancel
            </button>
            <button
            @click="saveIndustry(selectCompany.company_id)"
              type="button"
              class="submit-model w-25" 
            >
             <span v-if="!isLoading">Ok</span>
              <span v-else class="loader"></span>
            </button>
            <!-- <button
            @click="closeModal"
              type="button"
              class="submit-Cancel outline-btn mx-3 w-25"
            >
            Cancel
            </button> -->
          </div>
    </div>
  </div>
</template>
  
<script>

export default {
    name:'modal',
    data(){
        return {
            companyData:{
                industry:''
            },
            companyProfile:[],
            selectCompany:{
              company_id:"",
            },
            nameerrorMessage:"",
            isLoading: false
        }
    },
   async mounted() {
    const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;
    const authToken = JSON.parse(localStorage.getItem("setAuthToken"));
    var response = await this.$store.dispatch('getCompnies')
    if(response){
      this.users = response.data.data.companies.map((e) => {
          if (user_id === e.owner_id) {
            this.companyProfile.push(e);
          }
        });
    }
  },
    methods: {
    async saveIndustry(company_id) {

      if(this.companyData.industry === ""){
        this.nameerrorMessage = 'Please select industry'
        return false
      }else{
        this.nameerrorMessage = "";
      }

       const user_id = JSON.parse(localStorage.getItem("setUser")).user_id
        var formData = {
          user_id: user_id,
          industry:this.companyData.industry,
          operation:'add',
          json_data: this.json_data,
        }
        this.isLoading = true
        var response = await this.$store.dispatch('addProjectProfile', formData)
        if(response){
          this.isLoading = false
          const id = response.data.data.ProjectProfile.profile_id
         if(this.companyData.industry  === 'General Industry'){
          this.$router.push({ name: "Forms",  query:{ id } });
  
        }
         if(this.companyData.industry === 'Energy Industry'){
          this.$router.push({ name: "EnergyForms", query:{ id } });
  
         }
         if(this.companyData.industry === 'Venture Industry'){
          this.$router.push({ name: "VentureForms",  query:{ id } });
  
         }
         if(this.companyData.industry === 'VC Fund Industry'){
          this.$router.push({ name: "VcForms", query:{ id } });
         }
        }
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
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
  /* padding: 20px; */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
  /* height: 400px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit-model, .outline-btn{
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
  font-size: 0.9rem;
  box-shadow: none !important;
}
.modal-content .form-select{
  font-size: 14px;
}
</style>
  