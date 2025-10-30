<template>
       <div class="col-lg-12 px-0 d-flex justify-content-center align-item-center login-form successpage">
   <!-- <div  class="" >/// -->
       <form @submit.prevent="Next"  v-if="!showChild" class="animate__animated">
         <div class="formcontainer">
         <div class="success-container text-center">
           <div> 
             <img src="/assets/success.png" class="img-fluid mb-5 w-25 animate__fadeIn animate__animated" />
           </div>
           <h2 class="mb-4 form-heading animate__fadeIn animate__animated">Successful</h2>
           <p class="mb-5 animate__fadeIn animate__animated">Thank you for choosing JAIM.</p>
           <!-- <p class="mb-4 animate__fadeIn animate__animated">Congratulations your account has been Created successfully.To Continue click on the button below.</p> -->
         </div>
         <div>
           <nuxt-link to="/">
           <button type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">Next</button></nuxt-link>
         </div>
         </div>
       </form>
     <!-- </div> -->
   </div>
  
</template>



<script>


export default {
 name: 'EmailVerifySuccessComponent',
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
   async Next() {
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