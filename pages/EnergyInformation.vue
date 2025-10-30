<template>
  <div class="px-0 mb-5 d-flex justify-content-center align-item-center">
    <div class="companyinfo-form container-fluid px-0">
      <div class="company-header">
        <h1 class="my-2">Energy Information</h1>
      </div>
      <div class="company-details">
        <p class="my-2 ps-4 mx-3 text-start"><span><img src="/assets/companydetailicon.svg" /></span>Please fill in your
          basic company or project details so that we know who you are.</p>
      </div>
      <form class="row mx-auto px-3">
        <div class="formcontainer col-lg-12">
          <!-- <div class="mb-5">
            <h1 style="margin-bottom: revert">Company Information</h1>
            <p>
              please Fill in your basic company or project details <br />
              so that we know who you are.
            </p>
          </div> -->
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
            <div class="form-group col-lg-12 col-md-12 col-12 mb-3">
              <label for="location">Address Company</label>
              <input type="text" id="location" name="location" placeholder="Address Company"
                v-model="companyData.location" />
              <span v-if="locationerrorMessage" class="error-message">{{
                locationerrorMessage
                }}</span>
            </div>
          </div>

          <div class="d-flex my-4 justify-content-end w-100 align-items-center companyinfo flex-wrap">
            <CancelModal v-if="modalOpen" @close="closeModal" />

            <button @click="modelopen" v-if="!this.$route.query.id" type="button"
              class="submit-draft submit-btn outline-btn mx-3">
              Cancel
            </button>
            <button type="button" @click="EnergyCompanyinfo" v-if="!this.$route.query.id" class="submit-btn">
              <span v-if="!isLoading">Save</span>
              <span v-else class="loader"></span>
            </button>
            <button @click="updateCompanyInfo" v-if="this.$route.query.id" type="button" class="submit-btn update-btn">
              Update
            </button>
          </div>
          <div>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import authenticated from "@/middleware/authenticated";

export default {
  name: "EnergyInformationPage",
  // middleware: 'auth', // Apply the auth middleware function to this page
  middleware: [authenticated],

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
        user_id: "",
        profile_id: "",
        company_name: "",
        website: "",
        foundation_year: "",
        listed_type: "",
        industry: "",
        sub_industry: "",
        location: "",
      },
      modalOpen: false,
      isLoading: false
    };
  },
  async fetch() {
    if(this.$route.query){
      const id = this.$route.query.id;
      if(this.$route.query){
        var response = await this.$store.dispatch('retriveCompany', id)
        const companyProfile = response.data.data[0].form;
        if (response.data.data[0].form) {
          this.companyData.profile_id = companyProfile.company_id
          this.companyData.company_name = companyProfile.name
          this.companyData.website = companyProfile.website
          this.companyData.foundation_year = companyProfile.founded_year
          this.companyData.listed_type = companyProfile.listed
          this.companyData.industry = companyProfile.industry
          this.companyData.sub_industry = companyProfile.subindustry
          this.companyData.location = companyProfile.address
        }
      }
    }
  },
  methods: {
    async EnergyCompanyinfo() {
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
          company_id: this.companyData.company_id,
          name: this.companyData.company_name,
          website: this.companyData.website,
          founded_year: this.companyData.foundation_year,
          listed: this.companyData.listed_type,
          industry: this.companyData.industry,
          subindustry: this.companyData.sub_industry,
          address: this.companyData.location,
          operation: "add",
          OPtype: "Company",
          activity_status: "Active",

        }
        this.isLoading = true
        var response = await this.$store.dispatch('addCompnay' , formData)
        if (this.companyData.company_name) {
          this.isLoading = false
          this.$toast.success("Company Info add successfully!");
          this.$router.push("/Dashboard");
        } else {
          this.$toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error)
        this.$toast.error("Something went wrong!");
      }
    },
    async updateCompanyInfo() {
      const company_id = this.$route.query.id;
      try {
        const authToken = JSON.parse(localStorage.getItem("setAuthToken"));
        const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;

        const response = await axios.post(
          "https://jaimbackend.itaims.in/api/add-company",
          {
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
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        this.isLoading = true
        if (response.status === 200) {
          this.isLoading = false
          this.$toast.success("CompanyInfo update successfully");
          this.$router.push("/Dashboard");
        } else {
          this.$toast.error("Something went wrong!");
        }
      } catch (error) {
        console.error(error);
        this.$toast.error("Something went wrong!");
      }
    },
    modelopen(){
      this.modalOpen = true;
    },
    closeModal(){
      this.modalOpen = false;
    },
  },
};
</script>
<style scoped>
.submit-btn{
  margin:0;
}
.submit-model, .outline-btn ,.update-btn{
  font-size: 0.9rem;
  box-shadow: none !important;
}
.submit-btn{
  margin:0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; /* Adjust as needed */
  font-size: 16px; /* Adjust as needed */
  border: none;
  background-color: #FF7F27; /* Adjust as needed */
  color: white;
  cursor: pointer;
}
</style>