<template>
     <div class="section">
      <div class="row">
          <div class="col-lg-6 px-0">
              <div class="leftivestorportal">
          
            <div>
            <img src="/assets/jaim_logo.png" class="other-logo img-fluid"/>
        </div>
          <div class="mx-auto">
            <img src="/assets/computer-security-with-login-password-padlock_prev_ui.png" class="other-logo img-fluid" />
          </div>
        </div>
        </div>
        <div class="col-lg-6 px-0 d-flex justify-content-center align-item-center login-form successpage">
        <form @submit.prevent="Confirm"  v-if="!showChild" class="animate__animated">
          <div class="formcontainer">
          <div class="success-container">
            <div> 
              <img src="/assets/success.png" class="img-fluid mb-5 w-25 animate__fadeIn animate__animated" />
            </div>
            <h2 class="mb-4 form-heading animate__fadeIn animate__animated">Successful Sent</h2>
            <p class="mb-5 animate__fadeIn animate__animated">We have sent a verification link to your <br> email address xyz12@gmail.com</p>
            <p class="mb-4 animate__fadeIn animate__animated">Just click on the link in your email end you are done.</p>
          </div>
          <div>
            <nuxt-link to="/">
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Back to Login</button></nuxt-link>
          </div>
          <div class="text-center mt-3"> 
            <nuxt-link to="/ForgotPassword">
              <button type="submit" class="resend-btn animate__fadeIn animate__animated">Resend Link</button>
            </nuxt-link>
          </div>
          </div>
        </form>
    </div>
      </div>
      </div>
   
</template>



<script>


export default {
  name: 'SucessSentComponent',
  components:{
    // GetlinkComponent
  },
  data() {
    return {
      // showSecondChild: false,
      showChild: false,
      errorMessage:'',
      emailerrorMessage:'',
      passworderrorMessage:'',
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {
  window.load = this.showchildComponent
},
  methods: {
    async Confirm() {
    //   try {
    //     const response = await loginUser(this.loginData)
    //     if(this.loginData.email === ''){
    //       this.emailerrorMessage = 'Please enter your username'
    //       return false
    //     }else{
    //       this.emailerrorMessage = ''
    //     }
    //     if(this.loginData.password === ''){
    //       this.passworderrorMessage = 'please enter your password'
    //       return false
    //     }else{
    //       this.passworderrorMessage = ''
    //     }
    //     if(response.data.success === false){
    //       console.log(response);
    //        this.errorMessage = 'Incorrect username or password. Please try again.'
    //     }else{
    //       this.$toast.success('Login successful!')
    //       this.$router.push('dashboard');
    //     }
    //   } catch (error) {
       
    //     console.error(error);
    //   }
    },
  }
}
</script>