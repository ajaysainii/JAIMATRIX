import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export const getToken = () => {
  if (localStorage.getItem("setUser")) {
      var accessToken = JSON.parse(localStorage.getItem("setAuthToken"))
      return accessToken;
  }
  else return null
}


export const state = () => ({
  authenticated: false,
  id: null ,
  company_list: [],
  activeProductsCount: null,
  draftProjectCount: null
})

export const mutations = {
    LOGIN_SUCCESS(state) {
        state.authenticated = true
      },
      LOGIN_FAILURE(state) {
        state.authenticated = false
      },
      setRouteParams(state, id) {
        state.id = id
      },
      COMPANY_LIST(state , response){
        state.company_list.push(response)
      },
      COMPAY_DATA(state , response){
        state.company_list =  response
      },
      PROJECT_DATA(state , response){
        state.project_list = response
      },
      ACTIVE_PRODUCTS(state , response){
        state.activeProductsCount = response
      },
      DRAFT_PROJECTS(state, response){
        state.draftProjectCount = response
      }

}

export const getters = {
  apiUrl: state => state.apiUrl
}

export const actions = {
    async authenticate({ commit }, credentials) {
        try {
          const response = await axios.post(`${this.$config.baseURL}/login`, credentials)
          const authToken = JSON.stringify(response.data.data.token);
          const authUser = JSON.stringify(response.data.data.user)
          localStorage.setItem('setAuthToken',authToken);
          localStorage.setItem('setUser',authUser);
          commit('LOGIN_SUCCESS')
          // console.error(response)
          return response.data
        } catch (error) {
          commit('LOGIN_FAILURE')
          throw error
        }
      },
      async register({commit}, formData){
        var response = await axios.post(`${this.$config.baseURL}/signUp`, formData)
        return response
      },
      async getCompnies({commit, state}){
        const accessToken = getToken()
        if (accessToken) {
            var response = await axios.get(`${this.$config.baseURL}/companies`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            var companyProfile = [];

            const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;
            if(response){
              this.users = response.data.data.companies.map((e) => {
                  if (user_id === e.owner_id) {
                    companyProfile.push(e);
                  }
                });
            } 
            commit('COMPAY_DATA' , companyProfile)
            return response
        }
      },
      async retriveCompany({commit}, id){
        const accessToken = getToken()
          if (accessToken) {
          var response = await axios.get(`${this.$config.baseURL}/edit-company/${id}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            return response
        }
      },
      async addProjectProfile({commit}, formData){
        const accessToken = getToken()
        if (accessToken) {
         var response = await axios.post(`${this.$config.baseURL}/add-project-profile`, formData, {
               headers: {
                   'Authorization': `Bearer ${accessToken}`
               },
           })
           return response
       }
      },
      async retriveProjectProfile({commit}, id){
         const accessToken = getToken()
         if (accessToken) {
          var response = await axios.get(`${this.$config.baseURL}/edit-project-profile/${id}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            return response
        }
      },
      async updateProjectProfile({commit}, formData){
        const accessToken = getToken()
        if (accessToken) {
         var response = await axios.post(`${this.$config.baseURL}/update-project-profile`, formData, {
               headers: {
                   'Authorization': `Bearer ${accessToken}`
               },
           })
           return response
       }
      },
      async addCompnay({commit}, formData){
        const accessToken = getToken()
        if (accessToken) {
         var response = await axios.post(`${this.$config.baseURL}/add-company`, formData, {
               headers: {
                   'Authorization': `Bearer ${accessToken}`
               },
           })
          commit('COMPANY_LIST' , response.data.data.company)
           return response
       }
      },
      async updateCompany({commit}, formData){
        const accessToken = getToken()
        if (accessToken) {
         var response = await axios.post(`${this.$config.baseURL}/add-company`, formData, {
               headers: {
                   'Authorization': `Bearer ${accessToken}`
               },
           })
           return response
       }
      },
    async getProjects({commit}){
        const accessToken = getToken()
        if (accessToken) {
         var response = await axios.get(`${this.$config.baseURL}/project-profilelist`, {
               headers: {
                   'Authorization': `Bearer ${accessToken}`
               },
           })
           commit('PROJECT_DATA', response.data.data.ProjectProfile)
           var activeProjects = response.data.data.ProjectProfile.filter((project) => {
              return project.status === 'Active';
            });
            var draftProjects = response.data.data.ProjectProfile.filter((project) => {
              return project.status === 'Draft';
          });
          commit('ACTIVE_PRODUCTS' , activeProjects.length)
          commit('DRAFT_PROJECTS', draftProjects.length)
           return response
       }
      }
}

