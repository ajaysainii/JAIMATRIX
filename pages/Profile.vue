<template>
  <div class="mx-auto d-flex w-100 dashboard-body">
    <SidebarComponent />
    <div class="p-0 main-container">
      <NavbarComponent />
      <div class="container-fluid">
        <div class="dashboard-body mb-5">
          <div class="card dash-cards">
            <div class="overflow-auto">
              <div class="p-5">
                <div class="profile-card">
                  <div>
                    <img src="/assets/Profile.png" alt="" />
                  </div>
                  <div class="user-info">
                    <h2>{{ user_name }}</h2>
                    <p class="mb-0">Fundraiser</p>
                  </div>
                  <div class="user-info">
                    <h2 >Contact</h2>
                    <p>{{ contact_number }}</p>
                  </div>
                  <div class="user-info">
                    <h2 >Industry</h2>
                    <p>{{ industry }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-12 px-5 pb-3">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card large-card">
                    <div class="card-header">
                      <h3 class="mb-0">Company Details</h3>
                    </div>
                    <div class="card-body">
                      <ul class="list-unstyled" v-for="user in companyProfile" :key="user.profile_id">
                        <span @click="goTocompanyProfile(user.profile_id)" class="position-absolute ul-span"
                          style="right: 25px">
                          <i class="fas fa-pencil"></i>
                        </span>
                        <li>
                          <span>Company Name </span>
                          <span>:</span>
                          <span>{{ user.company_name }}</span>
                        </li>
                        <li>
                          <span>Website</span>
                          <span>:</span>
                          <span>{{ user.website }}</span>
                        </li>
                        <li>
                          <span>Industry</span>
                          <span>:</span>
                          <span>Pharma</span>
                        </li>
                        <li>
                          <span>Sub Industry</span>
                          <span>:</span>
                          <span>{{ user.sub_industry }}</span>
                        </li>
                        <li>
                          <span>Foundation Year</span>
                          <span>:</span>
                          <span>{{ user.foundation_year }}</span>
                        </li>
                        <li>
                          <span>Listed/Non-listed</span>
                          <span>:</span>
                          <span>{{ user.listed_type }}</span>
                        </li>
                        <li>
                          <span>Address Of Company</span>
                          <span>:</span>
                          <span>{{ user.location }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card large-card">
                    <div class="card-header">
                      <h3 class="mb-0">Account Details</h3>
                    </div>
                    <div class="card-body">
                      <ul class="list-unstyled" v-for="user in companyProfile" :key="user.profile_id">
                        <span @click="goToAccountProfile(user.profile_id)" class="position-absolute ul-span"
                          style="right: 25px">
                          <i class="fas fa-pencil"></i>
                        </span>
                        <li>
                          <span>Purpose of Fund</span>
                          <span>:</span>
                          <span>{{ user.json_data.purpose }}</span>
                        </li>
                        <li>
                          <span>Brief slogan</span>
                          <span>:</span>
                          <span>{{ user.json_data.brief_slogan }}</span>
                        </li>
                        <li>
                          <span>Brief USP</span>
                          <span>:</span>
                          <span>{{ user.json_data.brief_USP }}</span>
                        </li>
                        <li>
                          <span>Business Model</span>
                          <span>:</span>
                          <span>{{ user.json_data.business_model }}</span>
                        </li>
                        <li>
                          <span>Deal Status</span>
                          <span>:</span>
                          <span>{{ user.json_data.deal_status }}</span>
                        </li>
                        <li>
                          <span>Describe Funding</span>
                          <span>:</span>
                          <span>{{ user.json_data.funding_situation }}</span>
                        </li>
                        <li>
                          <span>Revenue model</span>
                          <span>:</span>
                          <span>{{ user.json_data.revenue_model }}</span>
                        </li>
                        <li>
                          <span>Growth Strategy</span>
                          <span>:</span>
                          <span>{{ user.json_data.growth_strategy }}</span>
                        </li>
                        <li>
                          <span>Cost model</span>
                          <span>:</span>
                          <span>{{ user.json_data.cost_model }}</span>
                        </li>
                        <li>
                          <span>Industry Served</span>
                          <span>:</span>
                          <span>{{ user.json_data.industry_served }}</span>
                        </li>
                        <li>
                          <span>Clients</span>
                          <span>:</span>
                          <span>{{ user.json_data.clients }}</span>
                        </li>
                        <li>
                          <span>Competitors</span>
                          <span>:</span>
                          <span>{{ user.json_data.competitors }}</span>
                        </li>
                        <li>
                          <span>Indian Partners</span>
                          <span>:</span>
                          <span>{{
                            user.json_data.indian_strategic_partners
                            }}</span>
                        </li>
                        <li>
                          <span>Japan Partners</span>
                          <span>:</span>
                          <span>{{
                            user.json_data.japan_strategic_partners
                            }}</span>
                        </li>
                        <li>
                          <span>(if applicable) Global Presence</span>
                          <span>:</span>
                          <span>{{
                            user.json_data.global_presence_collaborations
                            }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 text-center mb-4">
                    <button class="submit-btn float-none">Update</button>
                 </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authenticated from "@/middleware/authenticated";
import axios from "axios";

import NavbarComponent from "@/components/Navbar.vue";
import SidebarComponent from "@/components/Sidebar.vue";

export default {
  name: "profilePage",
  middleware: [authenticated],
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  data() {
    return {
      users: [],
      user_id: "",
      companyProfile: [],
      user_name:"",
      contact_number: '',
      industry:''
    };
  },
 async mounted() {
    const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;
    this.user_name = JSON.parse(localStorage.getItem("setUser")).username;
    this.contact_number = JSON.parse(localStorage.getItem("setUser")).contact_number;
    this.industry = JSON.parse(localStorage.getItem("setUser")).industry;


    var response =  await this.$store.dispatch('getProjects')
    if (response){
      this.users = response.data.data.ProjectProfile.map((e) => {
          if (user_id === e.user_id) {
            this.companyProfile.push(e);
          }
        });
    }
  },
  methods: {
    goTocompanyProfile(id) {
      const industry = JSON.parse(localStorage.getItem('setUser')).industry;
      if( industry === 'General Industry'){
        this.$router.push({ name: "CompanyInformation", params: { id } });
      }
      if( industry === 'Energy Industry'){
        this.$router.push({ name: "EnergyInformation", params: { id } });
      }
      if(industry === 'Venture Industry'){
        this.$router.push({ name: "VentureInformation", params: { id } });
      }
      
    },
    goToprojetProfile(id) {
      const industry = JSON.parse(localStorage.getItem('setUser')).industry;
      if(industry === 'General Industry'){
        this.$router.push({ name: "Forms", params: { id } });
      }
      if(industry === 'Energy Industry'){
        this.$router.push({ name: "EnergyForms", params: { id } });
      }
      if(industry === 'Venture Industry'){
        this.$router.push({ name: "VentureForms", params: { id } });
      }
    },
    goToAccountProfile(id) {
      const industry = JSON.parse(localStorage.getItem('setUser')).industry;
      if(industry === 'General Industry'){
        this.$router.push({ name: "Forms", params: { id }, query: { tab: 1 } });
      }
      if(industry === 'Energy Industry'){
        this.$router.push({ name: "EnergyForms", params: { id }, query: { tab: 1 } });
      }
      if(industry === 'Venture Industry'){
        this.$router.push({ name: "VentureForms", params: { id }, query: { tab: 1 } });
      }
    },
  },
};
</script>

<style scoped>
.profile-card {
  border: 1px solid #adadad;
  border-radius: 10px;
  padding: 25px;
  display: flex;
}
.user-info {
  padding: 46px;
}
.user-info p {
  font-weight: 400;
  font-size: 20px;
  color: #757575;
}
.ul-span {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0067ff;
  padding: 8px;
  background-color: #e9f1ff;
  border-radius: 5px;
  cursor: pointer;
}
</style>