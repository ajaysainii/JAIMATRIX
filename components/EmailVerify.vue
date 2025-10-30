<template>
    <div class="col-lg-12 px-0 d-flex justify-content-center align-item-center login-form forgotpage">
    <!-- <div  class="" > -->
        <form @submit.prevent="Emailverify" v-if="!showChild" class="animate__animated">
          <div class="formcontainer">
          <div class="heading-part">
            <h2 class="form-heading animate__fadeIn animate__animated">Verified your email</h2>
            <p class="form-p animate__fadeIn animate__animated">We need your email to verify that it’s really you.</p>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" placeholder="Enter your email address" name="email" v-model="loginData.email">
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          
          <div  @click="Emailverify">
            <!-- <nuxt-link to="/EmailVerification"> -->
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Verify email</button>
            <!-- </nuxt-link> -->
          </div>
          </div>
        </form>
      <!-- </div> -->
    </div>
</template>

<script>



export default {
  name: 'EmailVerifyComponent',
  components:{
    //
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
  methods: {
    async Emailverify() {
      try {
        if(this.loginData.email === ''){
          this.emailerrorMessage = 'Please enter your email address'
          return false
        }else{
          this.emailerrorMessage = ''
        }
        
        // if(response.data.success === false){
        //   console.log(response);
        //    this.errorMessage = 'Incorrect username or password. Please try again.'
        // }else{
        //   this.$toast.success('Login successful!')
        //   this.$router.push('dashboard');
        // }
      } catch (error) {
       
        console.error(error);
      }
    this.$router.push('/EmailVerification')
    },
  }
}
</script>