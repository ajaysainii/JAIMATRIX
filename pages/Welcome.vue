<template>
  <div class="px-0 my-5 d-flex justify-content-center align-item-center">
    <div class="container-fluid">
      <div class="col-lg-12 text-center mb-4">
        <h1>Welcome to JAIM</h1>
        <p class="mt-2">Please Check and edit all details you filed</p>
      </div>
      <div class="row mx-auto welcome-card">
        <div class="col-lg-12 px-0 py-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="card large-card">
                <div class="card-header">
                  <h3 class="mb-0">Company Details</h3>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled" v-for="user in companyProfile" :key="user.profile_id">
                    <span @click="goTocompanyProfile(user.company_id)" class="position-absolute ul-span"
                      style="right: 25px">
                      <i class="fas fa-pencil"></i>
                    </span>
                    <li>
                      <span>Company Name </span>
                      <span>:</span>
                      <span>{{ user.name }}</span>
                    </li>
                    <li>
                      <span>Website</span>
                      <span>:</span>
                      <span>{{ user.website }}</span>
                    </li>
                    <li>
                      <span>Industry</span>
                      <span>:</span>
                      <span>{{ user.industry}}</span>
                    </li>
                    <li>
                      <span>Sub Industry</span>
                      <span>:</span>
                      <span>{{ user.subindustry }}</span>
                    </li>
                    <!-- <li>
                      <span>Foundation Year</span>
                      <span>:</span>
                      <span>{{ user.foundation_year }}</span>
                    </li>
                    <li>
                      <span>Listed/Non-listed</span>
                      <span>:</span>
                      <span>{{ user.listed_type }}</span>
                    </li> -->
                    <li>
                      <span>Address Of Company</span>
                      <span>:</span>
                      <span>{{ user.address }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card large-card">
                <div class="card-header">
                  <h3 class="mb-0">Project Details</h3>
                </div>
                <div class="card-body">
                  <!-- <ul
                    class="list-unstyled"
                    v-for="user in companyProfile"
                    :key="user.profile_id"
                  >
                    <span
                      @click="goToprojetProfile(user.profile_id)"
                      class="position-absolute ul-span"
                      style="right: 25px"
                    >
                      <i class="fas fa-pencil"></i>
                    </span>
                    <li>
                      <span>Project Name</span>
                      <span>:</span>
                      <span>{{ user.json_data.project_name }}</span>
                    </li>
                    <li>
                      <span>Project Location</span>
                      <span>:</span>
                      <span>{{ user.json_data.project_location }}</span>
                    </li>
                    <li>
                      <span>Project Cost </span>
                      <span>:</span>
                      <span>{{ user.json_data.project_cost }}</span>
                    </li>
                    <li>
                      <span>Brown/Green Field</span>
                      <span>:</span>
                      <span>{{ user.json_data.brown_green }}</span>
                    </li>
                    <li>
                      <span>Total Funding </span>
                      <span>:</span>
                      <span>{{ user.json_data.total_funding }}</span>
                    </li>
                    <li>
                      <span>Equity Funding Asked</span>
                      <span>:</span>
                      <span>{{ user.json_data.equity_funding }}</span>
                    </li>
                    <li>
                      <span>% of equity offered.</span>
                      <span>:</span>
                      <span>{{ user.json_data.equity_offered }}</span>
                    </li>
                    <li>
                      <span>Last valuation date</span>
                      <span>:</span>
                      <span>{{ user.json_data.last_valuation_date }}</span>
                    </li>
                    <li>
                      <span>Project start year.</span>
                      <span>:</span>
                      <span>{{ user.json_data.start_year }}</span>
                    </li>
                    <li>
                      <span>Debt Funding</span>
                      <span>:</span>
                      <span>{{ user.json_data.debt_funding }}</span>
                    </li>
                    <li>
                      <span>Preffered Interest rate</span>
                      <span>:</span>
                      <span>{{ user.json_data.prefferd_interest }}</span>
                    </li>
                    <li>
                      <span>Commissioning date</span>
                      <span>:</span>
                      <span>{{ user.json_data.commissioning_date }}</span>
                    </li>
                    <li>
                      <span>Project Credit Rating</span>
                      <span>:</span>
                      <span>{{ user.json_data.deal }}</span>
                    </li>
                    <li>
                      <span>Exit strategy</span>
                      <span>:</span>
                      <span>{{ user.json_data.texit_strategy }}</span>
                    </li>
                    <li>
                      <span>Target IRR</span>
                      <span>:</span>
                      <span>{{ user.json_data.target_irr }}</span>
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card large-card">
                <div class="card-header">
                  <h3 class="mb-0">Account Details</h3>
                </div>
                <div class="card-body">
                  <!-- <ul
                    class="list-unstyled"
                    v-for="user in companyProfile"
                    :key="user.profile_id"
                  >
                    <span
                      @click="goToAccountProfile(user.profile_id)"
                      class="position-absolute ul-span"
                      style="right: 25px"
                    >
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
                      <span>{{ user.json_data.japan_strategic_partners }}</span>
                    </li>
                    <li>
                      <span>(if applicable) Global Presence</span>
                      <span>:</span>
                      <span>{{
                        user.json_data.global_presence_collaborations
                      }}</span>
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card large-card">
                <div class="card-header">
                  <h3 class="mb-0">Sales Details</h3>
                </div>
                <div class="card-body">
                  <!-- <ul
                    class="list-unstyled"
                    v-for="user in companyProfile"
                    :key="user.profile_id"
                  >
                    <span
                      @click="goToSalesProfile(user.profile_id)"
                      class="position-absolute ul-span"
                      style="right: 25px"
                    >
                      <i class="fas fa-pencil"></i>
                    </span>
                    <li>
                      <span>Number of Employees</span>
                      <span>:</span>
                      <span>{{ user.json_data.number_of_employees }}</span>
                    </li>
                    <li>
                      <span>Sales of -3 yr </span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_minus_3_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of -2 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_minus_2_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of -1 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_minus_1_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of last year</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_last_year }}</span>
                    </li>
                    <li>
                      <span>Sales of +1 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_plus_1_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of +2 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_plus_2_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of +3 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_plus_3_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of +4 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_plus_4_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of +5 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_plus_5_yr }}</span>
                    </li>
                    <li>
                      <span>Sales of +6 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.sales_of_plus_6_yr }}</span>
                    </li>
                    <li>
                      <span>Total Assets</span>
                      <span>:</span>
                      <span>{{ user.json_data.total_assets }}</span>
                    </li>
                    <li>
                      <span>Net Debt</span>
                      <span>:</span>
                      <span>{{ user.json_data.net_debt }}</span>
                    </li>
                    <li>
                      <span>EBTDA of -3 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_minus_3_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of -2 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_minus_2_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of -1 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_minus_1_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of last year</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_last_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of +1 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_plus_1_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of +2 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_plus_2_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of +3 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_plus_3_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of +4 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_plus_4_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of +5 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_plus_5_yr }}</span>
                    </li>
                    <li>
                      <span>EBTDA of +6 yr</span>
                      <span>:</span>
                      <span>{{ user.json_data.ebtda_of_plus_6_yr }}</span>
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card large-card">
                <div class="card-header">
                  <h3 class="mb-0">CEO Details</h3>
                </div>
                <div class="card-body">
                  <!-- <ul
                    class="list-unstyled"
                    v-for="user in companyProfile"
                    :key="user.profile_id"
                  >
                    <span
                      @click="goToCEOProfile(user.profile_id)"
                      class="position-absolute ul-span"
                      style="right: 25px"
                    >
                      <i class="fas fa-pencil"></i>
                    </span>
                    <li>
                      <span>Promoters</span>
                      <span>:</span>
                      <span>{{ user.json_data.promoters_name }}</span>
                    </li>
                    <li>
                      <span>CFO</span>
                      <span>:</span>
                      <span>{{ user.json_data.cfo_name }}</span>
                    </li>
                    <li>
                      <span>CEO</span>
                      <span>:</span>
                      <span>{{ user.json_data.ceo_name }}</span>
                    </li>
                    <li>
                      <span>Brief Background</span>
                      <span>:</span>
                      <span>{{ user.json_data.brief_background }}</span>
                    </li>
                    <li>
                      <span>Investor 2</span>
                      <span>:</span>
                      <span>{{ user.json_data.investor_two }}</span>
                    </li>
                    <li>
                      <span>Comments</span>
                      <span>:</span>
                      <span>{{ user.json_data.comments }}</span>
                    </li>
                    <li>
                      <span>Brief Background</span>
                      <span>:</span>
                      <span>{{ user.json_data.brief_background_two }}</span>
                    </li>
                    <li>
                      <span>Investor 1</span>
                      <span>:</span>
                      <span>{{ user.json_data.investor_one }}</span>
                    </li>
                    <li>
                      <span>Significant Advisor</span>
                      <span>:</span>
                      <span>{{
                        user.json_data.close_significant_advisor
                      }}</span>
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="d-flex justify-content-between align-items-center flex-wrap w-100 pb-4 my-4 px-3">
                <div class="companyinfo">
                </div>
                <div class="d-flex justify-content-end align-items-center flex-wrap companyinfo ms-auto">
                  <nuxt-link to="/Dashboard">
                    <button type="submit" class="submit-btn">
                      Submit
                    </button></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authenticated from "@/middleware/authenticated";

import axios from "axios";

export default {
  name: "Welcome",
  middleware: [authenticated],
  data() {
    return {
      users: [],
      user_id: "",
      companyProfile: [],
    };
  },
 async mounted() {
    const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;
    var response = await this.$store.dispatch('getCompnies')
    if(response){
      this.users = response.data.data.companies.map((e) => {
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
    goToSalesProfile(id) {
      const industry = JSON.parse(localStorage.getItem('setUser')).industry;
      if(industry === 'General Industry'){
        this.$router.push({ name: "Forms", params: { id }, query: { tab: 2 } });
      }
      if(industry === 'Energy Industry'){
        this.$router.push({ name: "EnergyForms", params: { id }, query: { tab: 2 } });
      }
      if(industry === 'Venture Industry'){
        this.$router.push({ name: "VentureForms", params: { id }, query: { tab: 2 } });
      }
    },
    goToCEOProfile(id) {
      const industry = JSON.parse(localStorage.getItem('setUser')).industry;
      if(industry === 'General Industry'){
        this.$router.push({ name: "Forms", params: { id }, query: { tab: 3 } });
      }
      if(industry === 'Energy Industry'){
        this.$router.push({ name: "EnergyForms", params: { id }, query: { tab: 3 } });
      }
      if(industry === 'Venture Industry'){
        this.$router.push({ name: "VentureForms", params: { id }, query: { tab: 3 } });
      }
    },
  },
};
</script>

<style scoped>
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