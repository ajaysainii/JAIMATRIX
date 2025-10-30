<template>
  <div class="px-0 d-flex justify-content-center align-item-center forms">
    <div class="companyinfo-form container-fluid px-0">
      <div class="company-header">
        <h1 class="my-2">{{ json_data.project_name }}</h1>
      </div>
      <form class="row mx-auto">
        <div class="formcontainer col-lg-12 px-0 py-0">
          <div>
            <b-tabs :style="borderstyle" content-class="mt-4" v-model="activeTab">
              <b-tab :activeTab="0">
                <template #title>
                  <span :style="divStyle">1</span> Fundraise Details
                </template>
                <form>
                  <div class="row mx-auto p-4">
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="name">Project Name<span>*</span></label>
                      <input type="text" id="name" name="name" placeholder="Project Name"
                        v-model="json_data.project_name" required />
                      <span v-if="nameerrorMessage" class="error-message">{{
                        nameerrorMessage
                      }}</span>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Fund Name">Fund Name</label>
                      <input type="text" id="Fund Name" placeholder="Fund Name" name="fund_name"
                        v-model="json_data.fund_name" />
                      <span v-if="fundnameError" class="error-message">{{
                        fundnameError
                      }}</span>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Fund Size">Fund Size</label>
                      <input type="text" id="Fund Size" placeholder="Fund Size" name="fund_size"
                        v-model="json_data.fund_size" />
                      <span v-if="fundsizeError" class="error-message">{{
                        fundsizeError
                      }}</span>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Fund Size">Green Shoe Option</label>
                      <input type="text" id="Green Shoe Option" placeholder="Green Shoe Option" name="green_shoe_option"
                        v-model="json_data.green_shoe_option" />
                      <span v-if="greenshoeError" class="error-message">{{
                        greenshoeError
                      }}</span>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Fund Size">Tenure</label>
                      <input type="text" id="Tenure" placeholder="Tenure " name="tenure" v-model="json_data.tenure" />
                      <span v-if="tenureError" class="error-message">{{
                        tenureError
                      }}</span>
                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="name">Management Fee</label>
                      <input type="text" id="management_fee" name="management_fee" placeholder="Management Fee"
                        v-model="json_data.management_fee" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Carried Interest">Carried Interest</label>
                      <input type="text" id="carried_interest" placeholder="Carried Interest" name="carried_interest"
                        v-model="json_data.carried_interest" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Hurdle Rate</label>
                      <input type="text" id="hurdle_rate" placeholder="Hurdle Rate" name="hurdle_rate"
                        v-model="json_data.hurdle_rate" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="equity offered">Minimum Ticket size</label>
                      <input type="text" id="minimum_ticket_size" placeholder="Minimum Ticket size"
                        name="minimum_ticket_size" v-model="json_data.minimum_ticket_size" />

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Debt Funding">Venture Investment size
                      </label>
                      <input type="text" id="Venture Investment size" placeholder="Venture Investment size"
                        name="venture_investment_size" v-model="json_data.venture_investment_size" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Area of Venture companies</label>
                      <input type="text" id="Area of Venture companies" placeholder="Area of Venture companies"
                        name="area_of_venture_companies" v-model="json_data.area_of_venture_companies" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Exit strategy">Number of Venture compapies
                      </label>
                      <input type="text" id="Number of Venture compapies" name="number_of_venture_compapies"
                        placeholder="Number of Venture compapies" v-model="json_data.number_of_venture_compapies" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Fund Launch Date</label>
                      <input type="date" id="Fund Launch Date" placeholder="Fund Launch Date" name="fund_launch_date"
                        v-model="json_data.fund_launch_date" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Fundraise Close Date</label>
                      <input type="date" id="Fund Close Date" placeholder="Fund Close Date" name="fund_close_date"
                        v-model="json_data.fund_close_date" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Exit type">Last Fund Name<span>*</span></label>
                      <input type="text" id="Last Fund Name" placeholder="Last Fund Name" name="last_fund_name"
                        v-model="json_data.last_fund_name" />
                      <span v-if="lastfundnameError" class="error-message">{{
                        lastfundnameError
                      }}</span>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Exit type">Last Fund Raised<span>*</span></label>
                      <input type="text" id="Last Fund Raised" placeholder="Last Fund Raised" name="last_fund_raised"
                        v-model="json_data.last_fund_raised" />
                      <span v-if="lastfundraisedError" class="error-message">{{
                        lastfundraisedError
                      }}</span>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Target IRR">Target IRR <small>(%)</small></label>
                      <input type="number" id="Target IRR" placeholder="Target IRR" name="Target IRR"
                        v-model="json_data.target_irr" />

                    </div>

                    <div class="d-flex justify-content-between align-items-center flex-wrap w-100 pb-4 my-4 px-3">
                      <div class="companyinfo">
                        <button v-if="isVisible" @click="cancel" type="button"
                          class="submit-draft submit-btn outline-btn">
                          Cancel
                        </button>
                        <nuxt-link to="/ProjectList" v-else>
                          <button type="button" class="submit-draft submit-btn outline-btn">
                            Cancel
                          </button>
                        </nuxt-link>
                      </div>
                      <div class="d-flex justify-content-end align-items-center flex-wrap companyinfo ms-auto ">
                        <button type="submit" @click="stylechange((draft = true))" v-if="this.$route.query.id && this.$route.query.text !== 'Active'"
                          class="submit-btn update-btn me-3">
                          Save as draft
                        </button>
                        <button v-if="this.$route.query.id" type="button"
                          @click="updateprojectInfo((draft = false))" class="submit-btn update-btn me-3">
                          Submit
                        </button>
                        <button type="button" @click="next()" class="submit-btn me-3">
                          Next
                        </button>
                      </div>
                      <div></div>

                      <p v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                      </p>
                    </div>
                  </div>
                </form>
              </b-tab>
              <b-tab :activeTab="1">
                <template #title>
                  <span :style="seconddivStyle">2</span> Business Profile </template>
                <form>
                  <div class="row mx-auto p-4" :content="tab2Content">
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Purpose">MOIC</label>
                      <input type="text" id="MOIC" placeholder="MOIC" v-model="json_data.moic" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Last Fund's Portfolio companies">Last Fund's Portfolio companies</label>
                      <input type="text" id="Last Fund's Portfolio companies"
                        placeholder="Last Fund's Portfolio companies"
                        v-model="json_data.last_funds_portfolio_companies" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Uncorn Born">Uncorn Born
                      </label>
                      <input type="text" id="Uncorn Born" placeholder="Uncorn Born" v-model="json_data.uncorn_born" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="foundation_year">Number of Exits
                      </label>
                      <input type="text" id="Number of Exits" placeholder="Number of Exits"
                        v-model="json_data.number_of_exits" />

                    </div>


                    <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                      <label for="location">Number of write offs
                      </label>
                      <input type="text" id="Deal Status" placeholder="Number of write offs"
                        v-model="json_data.number_of_write_offs" />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                      <label for="funding">Briefly describe funding situation
                        <small>(up to 10 words)</small></label>
                      <input type="text" id="funding" placeholder="Funding situation" maxlength="50"
                        v-model="json_data.funding_situation" />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="password">Brief slogan
                        <small>(upto 10 words)</small></label>
                      <input type="text" id="Business Model" placeholder="Brief slogan" name="Brief slogan"
                        minlength="50" maxlength="150" v-model="json_data.brief_slogan" />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="password">Brief USP
                        <small>(upto 10 words)</small></label>
                      <input type="text" id="Business Model" placeholder="Brief USP" name="Brief USP" minlength="50"
                        maxlength="150" v-model="json_data.brief_USP" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="password">Business Model/Services
                        <small>(10-30 words)</small></label>
                      <textarea name="Business Model" id="Business Model" v-model="json_data.business_model" rows="2"
                        cols="5"></textarea>

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Growth Strategy <small>(10-30 words)</small></label>
                      <textarea name="Growth Strategy" id="Growth Strategy" rows="2" cols="5"
                        v-model="json_data.growth_strategy"></textarea>
                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="(if applicable) Global Presence">(if applicable) Global Presence/ Collaborations
                      </label>
                      <input type="text" id="(if applicable) Global Presence"
                        placeholder="(if applicable) Global Presence/ Collaborations"
                        v-model="json_data.global_presence_collaborations" />

                    </div>
                    <div class="d-flex justify-content-between align-items-center flex-wrap w-100 pb-4 my-4 px-3">
                      <div class="companyinfo">
                        <button type="button" @click="secodetofirst" class="submit-draft submit-btn outline-btn">
                          Back
                        </button>
                      </div>
                      <div class="d-flex justify-content-end align-items-center flex-wrap companyinfo ms-auto ">
                        <button type="submit" @click="stylechange((draft = true))" v-if="this.$route.query.id && this.$route.query.text !== 'Active'"
                          class="submit-btn update-btn me-3">
                          Save as draft
                        </button>
                        <button v-if="this.$route.query.id" type="button"
                          @click="updateprojectInfo((draft = false))" class="submit-btn update-btn me-3">
                          Submit
                        </button>
                        <button type="button" @click="next()" class="submit-btn me-3">
                          Next
                        </button>
                      </div>
                      <div></div>

                      <p v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                      </p>
                    </div>
                  </div>
                </form>
              </b-tab>

              <b-tab :activeTab="3">
                <template #title> <span>3</span> Management Team </template>
                <form>
                  <div class="row mx-auto p-4" :content="tab2Content">
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="name">Promoters</label>
                      <input type="text" placeholder="Promoters name" id="Promoters" name="Promoters"
                        v-model="json_data.promoters_name" />

                    </div>
                    <div class="form-group col-xl-9 col-lg-9 col-md-6 col-12 mb-3">
                      <label for="foundation_year">Brief Background <small>(up to 10 words)</small>
                      </label>
                      <input type="text" id="Brief Background" placeholder="Brief Background" name="Brief Background"
                        minlength="50" v-model="json_data.brief_background_five" />

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="website">CEO</label>
                      <input type="text" id="CEO" placeholder="CEO" name="CEO" v-model="json_data.ceo_name" />

                    </div>
                    <div class="form-group col-xl-9 col-lg-9 col-md-6 col-12 mb-3">
                      <label for="foundation_year">Brief Background <small>(up to 10 words)</small>
                      </label>
                      <input type="text" id="Brief Background" placeholder="Brief Background" name="Brief Background"
                        minlength="50" v-model="json_data.brief_background" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="password">CFO</label>
                      <input type="text" id="CFO name" placeholder="CFO name" name="CFO name"
                        v-model="json_data.cfo_name" />

                    </div>

                    <div class="form-group col-xl-9 col-lg-9 col-md-6 col-12 mb-3">
                      <label for="location">Brief Background <small>(up to 10 words)</small></label>
                      <input type="text" id="Brief Background" placeholder="Brief Background" name="Brief Background"
                        minlength="50" v-model="json_data.brief_background_two" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Investor 1">Investor 1</label>
                      <input type="text" id="Investor 1" placeholder="Investor 1" name="Investor 1"
                        v-model="json_data.investor_one" />

                    </div>
                    <div class="form-group col-xl-9 col-lg-9 col-md-6 col-12 mb-3">
                      <label for="Brief Background">Brief Background <small>(up to 10 words)</small></label>
                      <input type="text" id="Brief Background" placeholder="Brief Background" name="Brief Background"
                        minlength="50" v-model="json_data.brief_background_three" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Investor 2">Investor 2</label>
                      <input type="text" id="Investor 2" placeholder="Investor 2" name="Investor 2"
                        v-model="json_data.investor_two" />

                    </div>
                    <div class="form-group col-xl-9 col-lg-9 col-md-6 col-12 mb-3">
                      <label for="Brief Background">Brief Background <small>(up to 10 words) </small>
                      </label>
                      <input type="text" id="Brief Background" placeholder="Brief Background"
                        name="locBrief Backgroundation" minlength="50" v-model="json_data.brief_background_six" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Significant Advisor</label>
                      <input type="text" id="Significant" placeholder="Close Significant Advisor" name="Significant"
                        v-model="json_data.close_significant_advisor" />

                    </div>
                    <div class="form-group col-xl-9 col-lg-9 col-md-6 col-12 mb-3">
                      <label for="Brief Background">Brief Background <small>(up to 10 words) </small>
                      </label>
                      <input type="text" id="Brief Background" placeholder="Brief Background"
                        name="locBrief Backgroundation" minlength="50" v-model="json_data.brief_background_four" />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="name">Number of Employees</label>
                      <input type="number" id="Employees" placeholder="00000" name="Employees"
                        v-model="json_data.number_of_employees" @input="handleInput" required />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="Comments">Comments if any <small>(up to 10 words)</small></label>
                      <textarea name="Comments" id="Comments" rows="2" cols="5" v-model="json_data.comments"></textarea>
                    </div>
                    <input hidden type="text" id="location" name="location" placeholder="Address Company"
                      v-model="companyData.status" />
                    <div class="d-flex justify-content-between align-items-center flex-wrap w-100 pb-4 my-4 px-3">
                      <div class="companyinfo">
                        <button @click="fourtothird" type="button" class="submit-draft submit-btn outline-btn">
                          Back
                        </button>
                        <button  @click="goBack" type="button"
                          class="submit-draft submit-btn ms-2">
                          Goto Top
                        </button>
                      </div>
                      <div class="d-flex justify-content-end align-items-center flex-wrap companyinfo ms-auto ">
                        <button type="submit" @click="stylechange((draft = true))" v-if="this.$route.query.id && this.$route.query.text !== 'Active'"
                          class="submit-btn update-btn me-3">
                          Save as draft
                        </button>
                        <button v-if="this.$route.query.id" type="button"
                          @click="updateprojectInfo((draft = false))" class="submit-btn update-btn me-3">
                          Submit
                        </button>
                      </div>
                      <div></div>

                      <p v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                      </p>
                    </div>
                  </div>
                </form>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </form>
      <div v-if="isLoading" class="d-flex justify-content-center align-items-center loader-wrapper">
        <span class="loader-main"></span>
      </div>
      <CancelModal v-if="cancelData" @close="closeModal" />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import authenticated from "@/middleware/authenticated";

export default {
  name: "CompanyInformationPage",
  middleware: [authenticated],
  data() {
    return {
      errorMessage: "",
      nameerrorMessage: "",
      fundnameError: "",
      fundsizeError: "",
      lastfundraisedError: "",
      lastfundnameError: "",
      greenshoeError: "",
      tenureError: "",
      activeTab: parseInt(this.$route.query.tab) || 0,
      tab2Content: ["Content for Tab 2, page 1", "Content for Tab 2, page 2"],
      divStyle: {
        backgroundColor: "#e5b556",
        color: "#ffffff ",
      },
      borderstyle: {
        borderColor: "#FF7F27",
      },
      seconddivStyle: {
        backgroundColor: "#e5b556",
        color: "#ffffff ",
      },
      thirddivStyle: {
        backgroundColor: "#e5b556",
        color: "#ffffff ",
      },
      json_data: {
        profile_id: "",
        project_name: "",
        management_fee: "",
        carried_interest: "",
        hurdle_rate: "",
        minimum_ticket_size: "",
        venture_investment_size: "",
        area_of_venture_companies: "",
        number_of_venture_compapies: "",
        fund_launch_date: "",
        fund_close_date: "",
        last_fund_name: "",
        last_fund_raised: "",
        target_irr: "",
        fund_name: "",
        fund_size: "",
        green_shoe_option: "",
        tenure: "",

        moic: "",
        last_funds_portfolio_companies: "",
        uncorn_born: "",
        number_of_exits: "",
        number_of_write_offs: "",
        funding_situation: "",
        brief_slogan: "",
        brief_USP: "",
        business_model: "",
        growth_strategy: "",
        global_presence_collaborations: "",

        number_of_employees: "",
        promoters_name: "",
        fund_manager: "",
        ceo_name: "",
        cfo_name: "",
        brief_background_two: "",
        investor_one: "",
        brief_background_three: "",
        investor_two: "",
        close_significant_advisor: "",
        brief_background_four: "",
        brief_background_five:"",
        brief_background_six:"",
        comments: "",
        brief_background: "",
      },
      profile: {
        profile_id: "",
      },
      project: {
        profile_id: "",
      },
      companyData: {
        status: "Draft"
      },
      companyprofile: {
        company_id: null,
      },
      cancelData: false,
      isVisible: false,
      isLoading : false
    };

  },
  created() {
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeTab = parseInt(tab);
    }

    if(this.$route.query.id){
      for (const key in this.json_data) {
      this.$watch(
        () => this.json_data[key],
        (newVal, oldVal) => {
          if (oldVal !== newVal) {
            this.isVisible = true;
          } else {
            this.isVisible =false;
          }
        }
      );
    }
    }
    if(this.$route.query.industry){
      for (const key in this.json_data) {
      this.$watch(
        () => this.json_data[key],
        (newVal, oldVal) => {
          if (oldVal !== newVal && oldVal !== '') {
            this.isVisible = true;
          } else {
            this.isVisible =false;
          }
        }
      );
    }
    }
  },
  async fetch() {
    const company_id = this.companyprofile.company_id;
    this.companyprofile.company_id = this.$route.params.company_id;
    if (this.$route.query) {
      const id = this.$route.query.id;
      var response = await this.$store.dispatch('retiveretriveProjectProfile', id)
      const projectProfile = response.data.data.ProjectProfile;

      if (projectProfile) {
        const json_data = JSON.parse(projectProfile.json_data);

        //project details
        this.profile.profile_id = id
        this.json_data.project_name = json_data.project_name
        this.json_data.management_fee = json_data.management_fee
        this.json_data.carried_interest = json_data.carried_interest
        this.json_data.hurdle_rate = json_data.hurdle_rate
        this.json_data.minimum_ticket_size = json_data.minimum_ticket_size
        this.json_data.venture_investment_size = json_data.venture_investment_size
        this.json_data.area_of_venture_companies = json_data.area_of_venture_companies
        this.json_data.number_of_venture_compapies = json_data.number_of_venture_compapies
        this.json_data.fund_launch_date = json_data.fund_launch_date
        this.json_data.fund_close_date = json_data.fund_close_date
        this.json_data.last_fund_name = json_data.last_fund_name
        this.json_data.last_fund_raised = json_data.last_fund_raised
        this.json_data.fund_name = json_data.fund_name
        this.json_data.fund_size = json_data.fund_size
        this.json_data.green_shoe_option = json_data.green_shoe_option
        this.json_data.tenure = json_data.tenure
        this.json_data.target_irr = json_data.target_irr

        //Account details
        (this.json_data.moic = json_data.moic),
          (this.json_data.last_funds_portfolio_companies = json_data.last_funds_portfolio_companies)
        this.json_data.funding_situation = json_data.funding_situation
        this.json_data.uncorn_born = json_data.uncorn_born
        this.json_data.number_of_exits = json_data.number_of_exits
        this.json_data.number_of_write_offs = json_data.number_of_write_offs
        this.json_data.brief_slogan = json_data.brief_slogan
        this.json_data.brief_USP = json_data.brief_USP
        this.json_data.business_model = json_data.business_model
        this.json_data.growth_strategy = json_data.growth_strategy
        this.json_data.global_presence_collaborations =
          json_data.global_presence_collaborations

        //sales details


        //CEO details
        this.json_data.number_of_employees = json_data.number_of_employees
        this.json_data.promoters_name = json_data.promoters_name
        this.json_data.fund_manager = json_data.fund_manager
        this.json_data.ceo_name = json_data.ceo_name
        this.json_data.cfo_name = json_data.cfo_name
        this.json_data.brief_background_two = json_data.brief_background_two
        this.json_data.investor_one = json_data.investor_one
        this.json_data.brief_background_three =
          json_data.brief_background_three
        this.json_data.investor_two = json_data.investor_two
        this.json_data.close_significant_advisor =
          json_data.close_significant_advisor
        this.json_data.brief_background_four =
          json_data.brief_background_four
          this.json_data.brief_background_five = json_data.brief_background_five
          this.json_data.brief_background_six = json_data.brief_background_six

        this.json_data.comments = json_data.comments
        this.json_data.brief_background = json_data.brief_background
      }
    }
  },
  methods: {
    handleInput(event) {
      if (event.target.value.includes('.')) {
        event.target.value = event.target.value.split('.')[0];
      }
      this.json_data.number_of_employees = event.target.value;
    },
    async updateprojectInfo(draft) {
      try {
        const authToken = JSON.parse(localStorage.getItem("setAuthToken"));
        if (draft) {
          localStorage.setItem("status", this.companyData.status);
        }
        else {
          localStorage.setItem("status", "Active");
        }
        const status = localStorage.getItem("status");
        if (this.json_data.project_name === "") {
          this.nameerrorMessage = "Project name is required";
          return false;
        } else {
          this.nameerrorMessage = "";
        }

        var formData = {
          profile_id: this.$route.query.id,
          project_id: this.profile.profile_id,
          status: status,
          operation: "update",
          json_data: this.json_data,

        }
        this.isLoading = true
        var response = await this.$store.dispatch('updateProjectProfile', formData)
        if (response.status === 200) {
          this.isLoading = false
          this.$toast.success("Profile Details update successfully");
          this.$router.push("/ProjectList");
        } else {
          this.$toast.error("something went wrong!");
        }
      } catch (error) {
        console.error(error);
        this.$toast.error("something went wrong!");
      }
    },
    cancel() {
      this.cancelData = true
    },
    closeModal() {
      this.cancelData = false
    },
    async stylechange(draft, company_id) {
      try {

        if (this.json_data.project_name === "") {
          this.nameerrorMessage = "Project name is required";
          return false;
        } else {
          this.nameerrorMessage = "";
        }
        const user_id = JSON.parse(localStorage.getItem("setUser")).user_id
        if (draft) {
          localStorage.setItem("status", this.companyData.status);
        }
        else {
          localStorage.setItem("status", "Active");
        }
        const status = localStorage.getItem("status");
        var formData = {
          user_id: user_id,
          status: status,
          operation: 'update',
          profile_id: this.$route.query.id,
          json_data: this.json_data,

        }
        this.isLoading = true
        var response = await this.$store.dispatch('updateProjectProfile', formData)
        if (response.status === 200) {
          this.isLoading = false
          this.project.profile_id = response.data.data.ProjectProfile.profile_id
          if (draft) {
            this.$toast.success('Save as Draft successfully')
            this.$router.push('/ProjectList')
          } else {
            if (this.divStyle) {
              this.divStyle.backgroundColor = "#FF7F27";
              this.divStyle.color = "white";
              this.borderstyle.borderColor = "blue";
              this.$toast.success("Project add successfully!");
              this.activeTab++;
            }
          }
        }

      } catch (error) {
        console.log(error)
        this.$toast.error("something went wrong!");
      }

    },
    async secondstyle(draft) {

      try {
        const authToken = JSON.parse(localStorage.getItem("setAuthToken"));
        const user_id = JSON.parse(localStorage.getItem("setUser")).user_id
        if (draft) {
          localStorage.setItem("status", this.companyData.status);
        }
        else {
          localStorage.setItem("status", "Active");
        }

        const status = localStorage.getItem("status");
        var formData = {
          user_id: user_id,
          status: status,
          operation: 'update',
          profile_id: this.$route.query.id,
          json_data: this.json_data,

        }
        this.isLoading = true
        var response = await this.$store.dispatch('updateProjectProfile', formData)
        if (response.status === 200) {
          this.isLoading = false
          if (draft) {
            this.$toast.success('Save as Draft successfully')
            this.$router.push('/ProjectList')
          } else {
            this.seconddivStyle.backgroundColor = "#FF7F27";
            this.seconddivStyle.color = "white";
            this.borderstyle.borderColor = "blue";
            this.$toast.success("Account add successfully!");
            this.activeTab++;
          }
        }

      } catch (error) {
        console.log(error)
        this.$toast.error("something went wrong!");
      }

    },
    async thirdstyle(draft) {
      try {
        const authToken = JSON.parse(localStorage.getItem("setAuthToken"));
        const user_id = JSON.parse(localStorage.getItem("setUser")).user_id
        if (draft) {
          localStorage.setItem("status", this.companyData.status);
        }
        else {
          localStorage.setItem("status", "Active");
        }
        const status = localStorage.getItem("status");

        var formData = {
          user_id: user_id,
          status: status,
          operation: 'update',
          profile_id: this.$route.query.id,
          json_data: this.json_data,

        }
        this.isLoading = true
        var response = await this.$store.dispatch('updateProjectProfile', formData)
        if (response.status === 200) {
          this.isLoading = false
          if (draft) {
            this.$toast.success('Save as Draft successfully')
            this.$router.push('/ProjectList')
          } else {
            this.thirddivStyle.backgroundColor = "#FF7F27";
            this.thirddivStyle.color = "white";
            this.borderstyle.borderColor = "blue";
            this.$toast.success("Sales add successfully!");
            this.activeTab++;
          }
        }

      } catch (error) {
        console.log(error)
        this.$toast.error("something went wrong!");
      }

    },
    async fourstyle(draft) {
      try {
        const authToken = JSON.parse(localStorage.getItem("setAuthToken"));
        const user_id = JSON.parse(localStorage.getItem("setUser")).user_id
        if (draft) {
          localStorage.setItem("status", this.companyData.status);
        }
        else {
          localStorage.setItem("status", "Active");
        }
        const status = localStorage.getItem("status");

        var formData = {
          user_id: user_id,
          status: status,
          operation: 'update',
          profile_id: this.$route.query.id,
          json_data: this.json_data,

        }
        this.isLoading = true
        var response = await this.$store.dispatch('updateProjectProfile', formData)
        if (response.status === 200) {
          this.isLoading = false
          if (draft) {
            this.$toast.success('Save as Draft successfully')
            this.$router.push('/ProjectList')
          } else {
            this.$toast.success("CEO add successfully!");
            this.$router.push('/ProjectList')
          }
        }

      } catch (error) {
        console.log(error)
      }

    },
    async secodetofirst() {
      this.divStyle.backgroundColor = "#e5b556";
      this.divStyle.color = "#ffffff";
      this.activeTab--;
    },
    async thirdtosecond() {
      this.seconddivStyle.backgroundColor = "#e5b556";
      this.seconddivStyle.color = "#ffffff";
      this.activeTab--;
    },
    async fourtothird() {
      this.thirddivStyle.backgroundColor = "#e5b556";
      this.thirddivStyle.color = "#ffffff";
      this.activeTab--;
    },
    goBack(){
      this.activeTab = 0
      // this.$router.push('/ProjectList')
    }
  },
};
</script>
<style scoped>
.submit-model, .outline-btn ,.update-btn{
  font-size: 0.9rem;
  box-shadow: none !important;
}
</style>