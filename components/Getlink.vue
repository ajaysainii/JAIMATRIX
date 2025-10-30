<template>
    <div class="col-lg-12 px-0 d-flex justify-content-center align-item-center login-form forgotpage">
    <!-- <div  class="login-form forgotpage" > -->
        <form @submit.prevent="GetRecoverylink" v-if="!showChild" class="animate__animated">
          <div class="form-section">
                <div class="main-heading">
                  <p class="text-center mb-0">Fundraiser Portal</p>
                </div>
          <div class="formcontainer">
            <div class="img-container mb-4">
              <img src="/assets/jaim_logo.png" class="img-fluid animate__fadeIn animate__animated" />
            </div>
          <div>
            <h4 class="animate__fadeIn animate__animated signin-heading">Forgot your password ?</h4>
            <p class="form-p animate__fadeIn animate__animated">We need your email to reset your password.</p>
          </div>
          <div class="form-group animate__fadeIn animate__animated">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email address" name="email" v-model="forgotData.email">
             <span v-if="emailerrorMessage" class="error-message">{{emailerrorMessage}}</span>
          </div>
          
          <div>
            <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Get Recovery Link</button>
          </div>
          </div>
        </div>
        </form>
      <!-- </div> -->
      <ResetpasswordComponent v-if="showChild" />
    </div>
</template>


<script>
import ResetpasswordComponent from '@/components/ResetPassword.vue'


export default {
  name: 'GetlinkComponent',
  components:{
    ResetpasswordComponent
  },
  data() {
    return {
      // showSecondChild: false,
      showChild: false,
      errorMessage:'',
      emailerrorMessage:'',
      passworderrorMessage:'',
      forgotData: {
        email: '',
      }
    }
  },
  methods: {
    async GetRecoverylink() {
      try {
        // const response = await ForgotPassword(this.forgotData)
        if(this.forgotData.email === ''){
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
        //   // this.$router.push('dashboard');
        // }
        this.showChild = true

      } catch (error) {
       
        if(error.response.status === 422){
          this.$toast.error('User Not Found')
        }
        // if(error.response.data.message){
        //   this.emailerrorMessage = 'Please enter your email address'
        //   return false
        // }else{
        //   this.emailerrorMessage = ''
        // }
        // console.error(error);
      }
    
    },
    // async showChildComponent() {
    //   this.showChild = true
    // },

  }
}
</script>
<style scoped>
  .signin-heading{
    line-height: 30px;
  }
</style>