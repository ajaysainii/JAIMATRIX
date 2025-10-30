<template>
     <div class="col-lg-12 col-md-12 col-12 px-0 d-flex justify-content-center align-item-center login-form signIN">
    <!-- <div  class="" > -->
        <form @submit.prevent="Confirm"  v-if="!showChild" class="animate__animated">
        <div class="form-section">
          <div class="main-heading">
            <p class="text-center mb-0">Fundraiser Portal</p>
          </div>
          <div class="formcontainer">
            <div class="img-container animate__fadeIn animate__animated">
            <p>Welcome to <img src="/assets/jaim_logo.png" class="img-fluid" /></p>
          </div>
          <div class="heading-part">
            <h2 class="form-heading animate__fadeIn animate__animated">Reset your password here.</h2>
            <p class="form-p animate__fadeIn animate__animated">Please enter a new password.</p>
          </div>
          <div class="form-group mb-4 animate__fadeIn animate__animated">
            <label for="email">Enter your  new password</label>
            <input type="password" id="password" placeholder="New password" name="email" v-model="resetData.newpassword" >
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="password">Enter your confirm new password</label>
            <input type="password" id="password" placeholder="Confirm New password" name="password" v-model="resetData.confirmpassword">
             <span v-if="passworderrorMessage" class="error-message">{{passworderrorMessage}}</span>
             <span  v-if="confirmerrorMessage" class="error-message">{{ confirmerrorMessage }}</span>
          </div>
          <div >
            <!-- <nuxt-link to="/SuccessSent"> -->
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated" @click="Confirm">Confirm</button>
            <!-- </nuxt-link> -->
          </div>
          </div>
        </div>
        </form>
      <!-- </div> -->
      <!-- <SucessSentComponent v-if="showChild"  /> -->
    </div>
</template>


<script>
// import SucessSentComponent from '@/components/SucessSent.vue'


export default {
  name: 'ResetpasswordComponent',
  components:{
    
  },
  data() {
    return {
      // showSecondChild: false,
      showChild: false,
      errorMessage:'',
      emailerrorMessage:'',
      passworderrorMessage:'',
      confirmerrorMessage:'',
      resetData: {
        newpassword: '',
        confirmpassword: ''
      }
    }
  },
  methods: {
    async Confirm() {
      try {
        // const response = await loginUser(this.loginData)
        if(this.resetData.newpassword === ''){
          this.emailerrorMessage = 'Please enter your new password'
          return false
        }else{
          this.emailerrorMessage = ''
        }
        if(this.resetData.confirmpassword === ''){
          this.passworderrorMessage = 'please enter your confirm password'
          return false
        }else{
          this.passworderrorMessage = ''
        }
        if(this.resetData.newpassword != this.resetData.confirmpassword){
          this.confirmerrorMessage = 'Please, make sure your passwords match.'
          return false
        }else{
          this.confirmerrorMessage = ''
        }
        // if(response.data.success === false){
        //   console.log(response);
        //    this.errorMessage = 'Incorrect username or password. Please try again.'
        // }else{
        //   this.$toast.success('Login successful!')
        //   this.$router.push('dashboard');
        // }
        this.$router.push('/SuccessSent')
      } catch (error) {
       
        console.error(error);
      }
    },

  }
}
</script>