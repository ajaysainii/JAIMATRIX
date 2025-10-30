<template>
  <div class="px-0  d-flex justify-content-center align-item-center forms">
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
                    <div class="form-group  col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Current Series</label>
                      <input type="text" id="Energy Type" name="Energy Type" placeholder="Energy Type"
                        v-model="json_data.current_series_funding" />
            
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Pre Series Funding <small>(in MW)</small></label>
                      <input type="text" id="Capacity" name="Capacity" placeholder="Capacity"
                        v-model="json_data.last_series_funding" />
                     
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Last Fund Raised <small>(Mil $)</small> <span>*</span></label>
                      <input type="text" id="Power sources" name="Power sources" placeholder="Power sources"
                        v-model="json_data.last_fund_raised" />
                      <span v-if="lastfundError" class="error-message">{{
                        lastfundError
                        }}</span>
                    </div>
                    
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Total Funding">Total Funding Requirements <small>(Mil $)</small></label>
                      <input type="text" id="Total Funding" placeholder="Total Funding" name="Total Funding"
                        v-model="json_data.total_funding" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Equity Funding Asked <small>(Mil $)</small></label>
                      <input type="text" id="Equity Funding" placeholder="Equity Funding" name="Equity Funding"
                        v-model="json_data.equity_funding" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="equity offered">Equity Offered <small>(%)</small></label>
                      <input type="text" id="equity offered" placeholder="Enter project cost" name="equity offered"
                        v-model="json_data.equity_offered" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="valuation date">Last valuation date</label>
                      <input type="date" id="valuation date" placeholder="Last valuation date" name="valuation date"
                        v-model="json_data.last_valuation_date" required />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                      <label for="location">Pre Money Valuation
                        <small>(Mil$)</small></label>
                      <input type="text" id="Valuation" name="Valuation" placeholder="Name" v-model="json_data.deal"
                        required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Debt Funding">Debt Funding <small>(Mil $)</small>
                      </label>
                      <input type="text" id="Debt Funding" placeholder="Debt Funding" name="Debt Funding"
                        v-model="json_data.debt_funding" required />

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Preffered Interest rate <small>(%)</small></label>
                      <input type="number" id="Interest rate" placeholder="Interest rate" name="Interest rate"
                        v-model="json_data.prefferd_interest" required />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                      <label for="location">Project Credit Rating & Rating Company <small>(i.g - Care
                          AAA)</small></label>
                      <input type="text" id="Rating Company" placeholder="Name" name="Rating Company"
                        v-model="json_data.rating_company" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Funding closing date</label>
                      <input type="date" id="Commissioning date" placeholder="Commissioning date"
                        name="Commissioning date" v-model="json_data.funding_closing_date" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Exit type">Exit type <small>(IPO/Sellout/ etc.)</small></label>
                      <input type="text" id="Exit type" placeholder="Exit type" name="Exit type"
                        v-model="json_data.exit_type" required />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="Exit strategy">Exit strategy <small>(20-30 words)</small>
                      </label>
                      <textarea name="Exit strategy" id="Exit strategy" v-model="json_data.texit_strategy"
                        rows="2"></textarea>

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Target IRR">Target IRR <small>(i.g - 12% , 15%)</small></label>
                      <input type="number" id="Target IRR" placeholder="Target IRR" name="Target IRR"
                        v-model="json_data.target_irr" required />

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="Purpose">Purpose/ utlization of Fund</label>
                      <input type="text" id="Purpose" placeholder="Purpose" v-model="json_data.purpose" required />

                    </div>
                    <div class="form-group col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                      <label for="location">Deal Status / Amounts and Rounds of funding.
                        <small>(up to 10 words)</small></label>
                      <input type="text" id="Deal Status" placeholder="Deal Status" maxlength="50"
                        v-model="json_data.deal_status" required />

                    </div>
                    <div class="form-group col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                      <label for="funding">Briefly describe funding situation
                        <small>(up to 10 words)</small></label>
                      <input type="text" id="funding" placeholder="Funding situation" maxlength="50"
                        v-model="json_data.funding_situation" required />

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

                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="website">Brief slogan <small>(up to 10 words)</small></label>
                      <input type="text" id="Brief slogan" placeholder="Brief slogan" maxlength="50"
                        v-model="json_data.brief_slogan" required />

                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="foundation_year">Brief USP <small>(up to 10 words)</small>
                      </label>
                      <input type="text" id="Brief USP" placeholder="Brief USP" maxlength="50"
                        v-model="json_data.brief_USP" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="foundation_year">Business Category
                      </label>
                      <input type="text" id="Brief USP" placeholder="Business Category" maxlength="50"
                        v-model="json_data.business_category" required />

                    </div>

                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="password">Business Model/Services
                        <small>(10-30 words)</small></label>
                      <textarea name="Business Model" id="Business Model" v-model="json_data.business_model" rows="2"
                        cols="5"></textarea>
                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="location">Revenue model <small>(10-30 words)</small></label>
                      <textarea name="Revenue model" id="Revenue model" rows="2" cols="5"
                        v-model="json_data.revenue_model"></textarea>
                    </div>
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="location">Cost model <small>(10-30 words)</small></label>
                      <textarea name="Cost model" id="Cost model" rows="2" cols="5"
                        v-model="json_data.cost_model"></textarea>
                    </div>
                    
                    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <label for="location">Growth Strategy <small>(10-30 words)</small></label>
                      <textarea name="Growth Strategy" id="Growth Strategy" rows="2" cols="5"
                        v-model="json_data.growth_strategy"></textarea>
                    </div>
                   

                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <TagifyInput label="Industry Served" :settings="{ whitelist: ['tag1', 'tag2'] }"
                        @tagAdded="handleTagAdded" :tagType="'industry_served'" />
                      <ul class="tag-list" v-if="json_data.industry_served?.length && this.$route.query.text">
                        <li v-for="industry in json_data.industry_served" :key="industry" class="tag-item">
                          {{ industry }}
                          <button type="button" class="btn btn-sm"
                            @click="removeTag('industry_served', industry)">
                            <i class="fas fa-times"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <TagifyInput label="Clients" :settings="{ whitelist: ['tag1', 'tag2'] }" :tagType="'clients'"
                        @tagAdded="handleTagAdded" />
                      <ul class="tag-list" v-if="json_data.clients?.length && this.$route.query.text">
                        <li v-for="client in json_data.clients" :key="client" class="tag-item">
                          {{ client }}
                          <button type="button" class="btn btn-sm" @click="removeTag('clients', client)">
                            <i class="fas fa-times"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                      <TagifyInput label="Competitors" :settings="{ whitelist: ['tag1', 'tag2'] }"
                        :tagType="'competitors'" @tagAdded="handleTagAdded" />
                      <ul class="tag-list" v-if="json_data.competitors?.length && this.$route.query.text">
                        <li v-for="competitor in json_data.competitors" :key="competitor" class="tag-item">
                          {{ competitor }}
                          <button type="button" class="btn btn-sm"
                            @click="removeTag('competitors', competitor)">
                            <i class="fas fa-times"></i>
                          </button>
                        </li>
                      </ul>

                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">

                      <TagifyInput label="(if applicable) Strategic Partners"
                        :settings="{ whitelist: ['tag1', 'tag2'] }" :tagType="'indian_strategic_Partners'"
                        @tagAdded="handleTagAdded" />
                      <ul class="tag-list" v-if="json_data.indian_strategic_Partners?.length && this.$route.query.text">
                        <li class="tag-item" v-for="Partner in json_data.indian_strategic_Partners" :key="Partner">
                          {{ Partner }}
                          <button type="button" class="btn btn-sm"
                            @click="removeTag('indian_strategic_Partners', Partner)">
                            <i class="fas fa-times"></i>
                          </button>
                        </li>
                      </ul>

                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">

                      <TagifyInput label="(if applicable) Japan (if applicable) Strategic Partners"
                        :settings="{ whitelist: ['tag1', 'tag2'] }" :tagType="'japan_strategic_partners'"
                        @tagAdded="handleTagAdded" />
                      <ul class="tag-list" v-if="json_data.japan_strategic_partners?.length && this.$route.query.text">
                        <li class="tag-item" v-for="partner in json_data.japan_strategic_partners" :key="partner">
                          {{ partner }}
                          <button type="button" class="btn btn-sm"
                            @click="removeTag('japan_strategic_partners', partner)">
                            <i class="fas fa-times"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">

                      <TagifyInput label="(if applicable) Global Presence" :settings="{ whitelist: ['tag1', 'tag2'] }"
                        :tagType="'global_presence_collaborations'" @tagAdded="handleTagAdded"
                        v-model="json_data.global_presence_collaborations" />
                      <ul class="tag-list"
                        v-if="json_data.global_presence_collaborations?.length && this.$route.query.text">
                        <li class="tag-item" v-for="partner in json_data.global_presence_collaborations" :key="partner">
                          {{ partner }}
                          <button type="button" class="btn btn-sm"
                            @click="removeTag('global_presence_collaborations', partner)">
                            <i class="fas fa-times"></i>
                          </button>
                        </li>
                      </ul>

                    </div>

                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="name">Number Of Customers</label>
                      <input type="number" id="customers" placeholder="00000" name="customers"
                        v-model="json_data.number_of_customers" @input="handleInput" required />

                    </div>
                    <div class="form-group col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
                      <label for="name">Number Of Branches</label>
                      <input type="number" id="Employees" placeholder="00000" name="Employees"
                        v-model="json_data.number_of_branches" required />

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
              <b-tab :activeTab="2">
                <template #title>
                  <span :style="thirddivStyle">3</span> Earnings
                </template>
                <form>
                  <div>
                    <fieldset class="border m-3 earning-form">
                      <div class="row mx-auto p-4" :content="tab2Content">
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">Sales of last year
                            <small>(Mil $)</small></label>
                          <input type="text" id="Sales of last year" placeholder="Sales of last year"
                            name="Sales of last year" v-model="json_data.sales_of_last_year" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="EBITDA of last year ">EBITDA of last year
                            <small>(Mil $)</small></label>
                          <input type="text" id="EBITDA of last year " placeholder="EBITDA of last year"
                            name="EBITDA of last year " v-model="json_data.EBITDA_of_last_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="password">Sales of -1 yr <small>(Mil $)</small></label>
                          <input type="text" id="Sales of -1 yr" placeholder="Sales of -1 yr" name="Sales of -1 yr"
                            v-model="json_data.sales_of_minus_1_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">EBITDA of -1 yr <small> (Mil $)</small>
                          </label>
                          <input type="text" id="EBITDA of -1 yr" placeholder=" EBITDA of -1 yr" name="EBITDA of -1 yr"
                            v-model="json_data.EBITDA_of_minus_1_yr" required />

                        </div>

                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="foundation_year">Sales of -2 yr <small>(Mil $)</small>
                          </label>
                          <input type="text" id="Sales of -2 yr" placeholder="Sales of -2 yr"
                            name="founSales of -2 yrdation_year" v-model="json_data.sales_of_minus_2_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                          <label for="EBITDA of -2 yr">EBITDA of -2 yr <small>(Mil $)</small>
                          </label>
                          <input type="text" id="EBITDA of -2 yr" placeholder="EBITDA of -2 yr" name="EBITDA of -2 yr"
                            v-model="json_data.EBITDA_of_minus_2_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="weSales of -3 yrbsite">Sales of -3 yr <small>(Mil $)</small></label>
                          <input type="text" id="Sales of -3 yr" placeholder="Sales of -3 yr" name="Sales of -3 yr"
                            v-model="json_data.sales_of_minus_3_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                          <label for="location">EBITDA of -3 yr <small>(Mil $)</small></label>
                          <input type="text" id="EBITDA of -3 yr" placeholder="EBITDA of -3 yr" name="EBITDA of -3 yr"
                            v-model="json_data.EBITDA_of_minus_3_yr" required />

                        </div>

                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="weSales of -3 yrbsite">Sales of -4 yr <small>(Mil $)</small></label>
                          <input type="text" id="Sales of -4 yr" placeholder="Sales of -4 yr" name="Sales of -4 yr"
                            v-model="json_data.sales_of_minus_4_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                          <label for="location">EBITDA of -4 yr <small>(Mil $)</small></label>
                          <input type="text" id="EBITDA of -4 yr" placeholder="EBITDA of -4 yr" name="EBITDA of -4 yr"
                            v-model="json_data.EBITDA_of_minus_4_yr" required />

                        </div>

                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="weSales of -3 yrbsite">Sales of -5 yr <small>(Mil $)</small></label>
                          <input type="text" id="Sales of -5 yr" placeholder="Sales of -5 yr" name="Sales of -5 yr"
                            v-model="json_data.sales_of_minus_5_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                          <label for="location">EBITDA of -5 yr <small>(Mil $)</small></label>
                          <input type="text" id="EBITDA of -5 yr" placeholder="EBITDA of -5 yr" name="EBITDA of -5 yr"
                            v-model="json_data.EBITDA_of_minus_5_yr" required />

                        </div>
                       
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="Sales of +1 yr">Sales of +1 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="Sales of +1 yr" placeholder="Sales of +1 yr" name="Sales of +1 yr"
                            v-model="json_data.sales_of_plus_1_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="EBITDA of +1 yr">EBITDA of +1 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="EBITDA of +1 yr" placeholder="EBITDA of +1 yr" name="EBITDA of +1 yr"
                            v-model="json_data.EBITDA_of_plus_1_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">Sales of +2 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="Sales of +2 yr" placeholder="Sales of +2 yr" name="Sales of +2 yr"
                            v-model="json_data.sales_of_plus_2_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="EBITDA of +2 yr">EBITDA of +2 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="EBITDA of +2 yr" placeholder="EBITDA of +2 yr" name="EBITDA of +2 yr"
                            v-model="json_data.EBITDA_of_plus_2_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">Sales of +3 yr<small>(Mil $) (Projected)</small></label>
                          <input type="text" id="Sales of +3 yr" placeholder="Sales of +3 yr" name="Sales of +3 yr"
                            v-model="json_data.sales_of_plus_3_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">EBITDA of +3 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="EBITDA of +3 yr" placeholder="EBITDA of +3 yr" name="EBITDA of +3 yr"
                            v-model="json_data.EBITDA_of_plus_3_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="Sales of +4 yr">Sales of +4 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="Sales of +4 yr" placeholder="Sales of +4 yr" name="Sales of +4 yr"
                            v-model="json_data.sales_of_plus_4_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">EBITDA of +4 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="EBITDA of +4 yr" placeholder="EBITDA of +4 yr" name="EBITDA of +4 yr"
                            v-model="json_data.EBITDA_of_plus_4_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="Sales of +5 yr">Sales of +5 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="Sales of +5 yr" placeholder="Sales of +5 yr" name="Sales of +5 yr"
                            v-model="json_data.sales_of_plus_5_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">EBITDA of +5 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="EBITDA of +5 yr" placeholder="EBITDA of +5 yr" name="EBITDA of +5 yr"
                            v-model="json_data.EBITDA_of_plus_5_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">Sales of +6 yr
                            <small>(Mil $) (Projected)</small>
                          </label>
                          <input type="text" id="Sales of +6 yr" placeholder="Sales of +6 yr" name="Sales of +6 yr"
                            v-model="json_data.sales_of_plus_6_yr" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">EBITDA of +6 yr
                            <small>(Mil $) (Projected)</small></label>
                          <input type="text" id="EBITDA of +6 yr" placeholder="EBITDA of +6 yr" name="EBITDA of +6 yr"
                            v-model="json_data.EBITDA_of_plus_6_yr" required />
                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="location">Total Assets</label>
                          <input type="number" id="Assets" placeholder="Total Assets" name="Assets"
                            v-model="json_data.total_assets" required />

                        </div>
                        <div class="form-group col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                          <label for="Net Debt">Net Debt</label>
                          <input type="number" id="Net Debt" placeholder="Net Debt" name="Net Debt"
                            v-model="json_data.net_debt" required />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="d-flex justify-content-between align-items-center flex-wrap w-100 pb-4 my-4 px-3">
                    <div class="companyinfo">
                      <button type="button" @click="thirdtosecond" class="submit-draft submit-btn outline-btn">
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
                </form>
              </b-tab>
              <b-tab :activeTab="3">
                <template #title> <span>4</span> Management Team </template>
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
      LocationerrorMessage: "",
      crrentseriesError: "",
      lastseriesError: "",
      lastfundError: "",
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
      selectedTags: [],
      japanPartnerTags: [],
      clientsTags: [],
      competitorsTags: [],
      indianPartners: [],
      globalColTags:[],
      json_data: {
        profile_id: "",
        project_name: "",
        project_cost: "",
        project_location: "",
        brown_green: "",
        total_funding: "",
        equity_funding: "",
        equity_offered: "",
        last_valuation_date: "",
        start_year: "",
        debt_funding: "",
        prefferd_interest: "",
        commissioning_date: "",
        deal: "",
        rating_company: "",
        texit_strategy: "",
        exit_type: "",
        target_irr: "",
        current_series_funding: "",
        last_series_funding: "",
        last_fund_raised: "",

        purpose: "",
        brief_slogan: "",
        brief_USP: "",
        business_category: "",
        business_model: "",
        deal_status: "",
        funding_situation: "",
        revenue_model: "",
        growth_strategy: "",
        cost_model: "",
        industry_served: "",
        clients: "",
        competitors: "",
        indian_strategic_Partners: "",
        japan_strategic_partners: "",
        global_presence_collaborations: "",

        number_of_employees: "",
        sales_of_minus_7_yr: "",
        sales_of_minus_6_yr: "",
        sales_of_minus_5_yr: "",
        sales_of_minus_4_yr: "",
        sales_of_minus_3_yr: "",
        sales_of_minus_2_yr: "",
        sales_of_minus_1_yr: "",
        sales_of_last_year: "",
        sales_of_plus_1_yr: "",
        sales_of_plus_2_yr: "",
        sales_of_plus_3_yr: "",
        sales_of_plus_4_yr: "",
        sales_of_plus_5_yr: "",
        sales_of_plus_6_yr: "",
        total_assets: "",
        net_debt: "",
        EBITDA_of_minus_7_yr: "",
        EBITDA_of_minus_6_yr: "",
        EBITDA_of_minus_5_yr: "",
        EBITDA_of_minus_4_yr: "",
        EBITDA_of_minus_3_yr: "",
        EBITDA_of_minus_2_yr: "",
        EBITDA_of_minus_1_yr: "",
        EBITDA_of_last_yr: "",
        EBITDA_of_plus_1_yr: "",
        EBITDA_of_plus_2_yr: "",
        EBITDA_of_plus_3_yr: "",
        EBITDA_of_plus_4_yr: "",
        EBITDA_of_plus_5_yr: "",
        EBITDA_of_plus_6_yr: "",
        number_of_branches: "",
        number_of_customers: "",

        promoters_name: "",
        ceo_name: "",
        cfo_name: "",
        investors_name: "",
        brief_background_two: "",
        brief_background_five: "",
        brief_background_six: "",
        investor_one: "",
        brief_background_three: "",
        investor_two: "",
        close_significant_advisor: "",
        brief_background_four: "",
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
      isLoading: false
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
    if(this.$route.query){
      const id = this.$route.query.id;
       var response = await this.$store.dispatch('retriveProjectProfile' , id)

       const projectProfile = response.data.data.ProjectProfile;
   
       if (projectProfile) {
         const json_data = JSON.parse(projectProfile.json_data);
         //project details
         this.profile.profile_id = id
         this.json_data.project_name = json_data.project_name
         this.json_data.total_funding_requirements = json_data.total_funding_requirements
         this.json_data.project_location = json_data.project_location
         this.json_data.brown_green = json_data.brown_green
         this.json_data.total_funding = json_data.total_funding
         this.json_data.equity_funding = json_data.equity_funding
         this.json_data.equity_offered = json_data.equity_offered
         this.json_data.last_valuation_date = json_data.last_valuation_date
         this.json_data.start_year = json_data.start_year
         this.json_data.debt_funding = json_data.debt_funding
         this.json_data.interest_rate = json_data.interest_rate
         this.json_data.prefferd_interest = json_data.prefferd_interest
         this.json_data.commissioning_date = json_data.commissioning_date
         this.json_data.deal = json_data.deal
         this.json_data.rating_company = json_data.rating_company
         this.json_data.texit_strategy = json_data.texit_strategy
         this.json_data.exit_type = json_data.exit_type
         this.json_data.target_irr = json_data.target_irr
         this.json_data.current_series_funding = json_data.current_series_funding
         this.json_data.last_series_funding = json_data.last_series_funding
         this.json_data.last_fund_raised = json_data.last_fund_raised
   
         //Account details
         this.json_data.purpose = json_data.purpose
         this.json_data.brief_slogan = json_data.brief_slogan
         this.json_data.brief_USP = json_data.brief_USP
         this.json_data.business_category = json_data.business_category
         this.json_data.business_model = json_data.business_model
         this.json_data.deal_status = json_data.deal_status
         this.json_data.funding_situation = json_data.funding_situation
         this.json_data.revenue_model = json_data.revenue_model
         this.json_data.growth_strategy = json_data.growth_strategy
         this.json_data.cost_model = json_data.cost_model
         this.json_data.industry_served = json_data.industry_served
         this.json_data.clients = json_data.clients
         this.json_data.competitors = json_data.competitors
         this.json_data.indian_strategic_partners =
           json_data.indian_strategic_partners
         this.json_data.japan_strategic_partners =
           json_data.japan_strategic_partners
         this.json_data.global_presence_collaborations =
           json_data.global_presence_collaborations
   
         //sales details
   
         this.json_data.number_of_employees = json_data.number_of_employees
         this.json_data.sales_of_minus_7_yr = json_data.sales_of_minus_7_yr
         this.json_data.sales_of_minus_6_yr = json_data.sales_of_minus_6_yr
         this.json_data.sales_of_minus_5_yr = json_data.sales_of_minus_5_yr
         this.json_data.sales_of_minus_4_yr = json_data.sales_of_minus_4_yr
         this.json_data.sales_of_minus_3_yr = json_data.sales_of_minus_3_yr
         this.json_data.sales_of_minus_2_yr = json_data.sales_of_minus_2_yr
         this.json_data.sales_of_minus_1_yr = json_data.sales_of_minus_1_yr
         this.json_data.sales_of_last_year = json_data.sales_of_last_year
         this.json_data.sales_of_plus_1_yr = json_data.sales_of_plus_1_yr
         this.json_data.sales_of_plus_2_yr = json_data.sales_of_plus_2_yr
         this.json_data.sales_of_plus_3_yr = json_data.sales_of_plus_3_yr
         this.json_data.sales_of_plus_4_yr = json_data.sales_of_plus_4_yr
         this.json_data.sales_of_plus_5_yr = json_data.sales_of_plus_5_yr
         this.json_data.sales_of_plus_6_yr = json_data.sales_of_plus_6_yr
         this.json_data.total_assets = json_data.total_assets
         this.json_data.net_debt = json_data.net_debt

         this.json_data.EBITDA_of_minus_7_yr = json_data.EBITDA_of_minus_7_yr
         this.json_data.EBITDA_of_minus_6_yr = json_data.EBITDA_of_minus_6_yr
         this.json_data.EBITDA_of_minus_5_yr = json_data.EBITDA_of_minus_5_yr
         this.json_data.EBITDA_of_minus_4_yr = json_data.EBITDA_of_minus_4_yr

         this.json_data.EBITDA_of_minus_3_yr = json_data.EBITDA_of_minus_3_yr
         this.json_data.EBITDA_of_minus_2_yr = json_data.EBITDA_of_minus_2_yr
         this.json_data.EBITDA_of_minus_1_yr = json_data.EBITDA_of_minus_1_yr
         this.json_data.EBITDA_of_last_yr = json_data.EBITDA_of_last_yr
         this.json_data.EBITDA_of_plus_1_yr = json_data.EBITDA_of_plus_1_yr
         this.json_data.EBITDA_of_plus_2_yr = json_data.EBITDA_of_plus_2_yr
         this.json_data.EBITDA_of_plus_3_yr = json_data.EBITDA_of_plus_3_yr
         this.json_data.EBITDA_of_plus_4_yr = json_data.EBITDA_of_plus_4_yr
         this.json_data.EBITDA_of_plus_5_yr = json_data.EBITDA_of_plus_5_yr
         this.json_data.EBITDA_of_plus_6_yr = json_data.EBITDA_of_plus_6_yr
         this.json_data.number_of_branches = json_data.number_of_branches
         this.json_data.number_of_customers = json_data.number_of_customers
   
         //CEO details
         this.json_data.investors_name = json_data.investors_name
         this.json_data.promoters_name = json_data.promoters_name
         this.json_data.ceo_name = json_data.ceo_name
         this.json_data.cfo_name = json_data.cfo_name
         this.json_data.brief_background_two = json_data.brief_background_two
         this.json_data.investor_one = json_data.investor_one
         this.json_data.brief_background_three =
           json_data.brief_background_three

        this.json_data.brief_background_six =json_data.brief_background_six
        this.json_data.brief_background_five =json_data.brief_background_five
         this.json_data.investor_two = json_data.investor_two
         this.json_data.close_significant_advisor =
           json_data.close_significant_advisor
         this.json_data.brief_background_four =
           json_data.brief_background_four
         this.json_data.comments = json_data.comments
         this.json_data.brief_background = json_data.brief_background
       }
    }
  },
  methods: {
    next(){
      if (this.divStyle) {
          this.divStyle.backgroundColor = "#FF7F27";
          this.divStyle.color = "white";
          this.borderstyle.borderColor = "blue";
          this.activeTab++;
        }
    },
    handleInput(event) {
      if (event.target.value.includes('.')) {
        event.target.value = event.target.value.split('.')[0];
      }
      this.json_data.number_of_employees = event.target.value;
    },
    handleTagAdded({ type, value }) {
      if(type === 'industry_served'){
        this.selectedTags.push(value);
        this.json_data.industry_served = this.selectedTags
      }
      if(type === 'clients'){
        this.clientsTags.push(value)
        this.json_data.clients = this.clientsTags
      }
      if(type === 'competitors'){
        this.competitorsTags.push(value)
        this.json_data.competitors = this.competitorsTags
      }
      if(type === 'indian_strategic_Partners'){
        this.indianPartners.push(value)
        this.json_data.indian_strategic_Partners = this.indianPartners
      }
      if(type === 'japan_strategic_partners'){
        this.japanPartnerTags.push(value)
        this.json_data.japan_strategic_partners = this.japanPartnerTags
      }
      if(type === 'global_presence_collaborations'){
        this.globalColTags.push(value)
        this.json_data.global_presence_collaborations = this.globalColTags
      }

    },
    removeTag(key , industry) {
      if(key === 'industry_served'){
        const tagIndex = this.json_data.industry_served.indexOf(industry);
        if (tagIndex !== -1) {
          this.json_data.industry_served.splice(tagIndex, 1);
        }
      }
      if(key === 'clients'){
        const tagIndex = this.json_data.clients.indexOf(industry);
        if (tagIndex !== -1) {
          this.json_data.clients.splice(tagIndex, 1);
        }
      }
      if(key === 'competitors'){
        const tagIndex = this.json_data.competitors.indexOf(industry);
        if (tagIndex !== -1) {
          this.json_data.competitors.splice(tagIndex, 1);
        }
      }
      if(key === 'indian_strategic_Partners'){
        const tagIndex = this.json_data.indian_strategic_Partners.indexOf(industry);
        if (tagIndex !== -1) {
          this.json_data.indian_strategic_Partners.splice(tagIndex, 1);
        }
      }
      if(key === 'japan_strategic_partners'){
        const tagIndex = this.json_data.japan_strategic_partners.indexOf(industry);
        if (tagIndex !== -1) {
          this.json_data.japan_strategic_partners.splice(tagIndex, 1);
        }
      }
      if(key === 'global_presence_collaborations'){
        const tagIndex = this.json_data.global_presence_collaborations.indexOf(industry);
        if (tagIndex !== -1) {
          this.json_data.global_presence_collaborations.splice(tagIndex, 1);
        }
      }
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
    goBack(){
      this.activeTab = 0
      // this.$router.push('/ProjectList')
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
  },
};
</script>
<style scoped>
.submit-model, .outline-btn ,.update-btn{
  font-size: 0.9rem;
  box-shadow: none !important;
}
</style>
    
    