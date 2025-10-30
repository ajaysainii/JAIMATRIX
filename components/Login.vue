<template>
  <!-- <div class="col-lg-6"> -->
    <div class="col-lg-12 col-md-12 col-12 px-0 d-flex justify-content-center align-item-center login-form signIN">
    <!-- <div  class="login-form signIN" > -->
        <form @submit.prevent="login" v-if="!showChild">
          <div class="form-section">
          <div class="main-heading">
            <p class="text-center mb-0">Fundraiser Portal</p>
          </div>
          <div class="formcontainer">
          <div class="img-container animate__fadeIn animate__animated">
            <p>Welcome to <img src="/assets/jaim_logo.png" class="img-fluid" /></p>
          </div>
          <div>
            <h4 class="animate__fadeIn animate__animated signin-heading mb-2">Sign In</h4>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email address" name="email" :style="divstyle" v-model="loginData.email" >
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group animate__fadeIn animate__animated mb-2">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" name="password" :style="seconddiv" v-model="loginData.password" >
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
          </div>
          <div>
            <nuxt-link to="/ForgotPassword">
              <p class="forgothere text-blue animate__fadeIn animate__animated">Forgot Password ?</p>
            </nuxt-link>
           
          </div>
          <div>
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Sign In</button>
          </div>
          <div>
          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
          </div>
          <div class="registertext mt-2 animate__fadeIn animate__animated">
            <span>
              Have an Account ?
              <span @click="showChildComponent" class="mx-2 text-blue">
              Sign up
              </span>
            </span>
          </div>
          </div>
        </div>
        </form>
    </div>   
</template>

<script>

import 'animate.css';

export default {
  name: 'LoginComponent',
  data() {
    return {
      // showSecondChild: false,
      showChild: false,
      errorMessage:'',
      emailerrorMessage:'',
      passworderrorMessage:'',
      divstyle:{
        borderColor:'#91919180 !important'
      },
      seconddiv:{
        borderColor:'#91919180 !important'
      },
      loginData: {
        email: '',
        password: ''
      },
      users:[],
    }
  },
  mounted() {

   
  },
  methods: {
  
    async login() {
      try {

        if(this.loginData.email === ''){
          this.emailerrorMessage = 'Please enter your username'
          this.divstyle.borderColor = 'red !important'
        }else{
          this.emailerrorMessage = ''
          this.divstyle.borderColor = '#91919180 !important'
        }
        if(this.loginData.password === ''){
          this.passworderrorMessage = 'Please enter your password'
          this.seconddiv.borderColor = 'red !important'
          return false
        }else{
          this.passworderrorMessage = ''
          this.seconddiv.borderColor = '#91919180 !important' 
        }

        const response = await this.$store.dispatch('authenticate', {
          email: this.loginData.email,
          password: this.loginData.password
        })
        
        if(response){
          const usercompany = response.data.companies
          if(usercompany.length !== 0){
            this.$router.push('/Dashboard')
          }else{
              if(response.data.user.industry === 'General Industry'){
              this.$toast.success('Login successfull!')
              this.$router.push('/CompanyInformation');
            }
            if(response.data.user.industry === 'Energy Industry'){
              this.$toast.success('Login successfull!')
              this.$router.push('/EnergyInformation')
            }
            if(response.data.user.industry === 'Venture Industry'){
              this.$toast.success('Login successfull!')
              this.$router.push('/VentureInformation')
            }
            if(response.data.user.industry === 'VC Fund Industry'){
              this.$toast.success('Login successfull!')
              this.$router.push('/VcInformation')
            }
          }
        }
      } catch (error) {
        this.$toast.error('Incorrect username or password')
      }
    },
    async showChildComponent() {
      this.$router.push('/SignUP')
    },

  }
}
</script>


<style>


</style>