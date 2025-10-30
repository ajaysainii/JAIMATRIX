<template>
    <div class="section">
      <div class="row">
          <div class="col-lg-6 px-0">
              <div class="leftivestorportal">
          
            <div>
            <img src="/assets/jaim_logo.png"  class="other-logo img-fluid"/>
        </div>
          <div class="mx-auto">
            <img src="/assets/Email_verify.png"  />
          </div>
         
        </div>
        </div>
        <div class="col-lg-6 px-0 second-sec">
          <EmailVerifyComponent  />
        </div>
        
      </div>
      </div>
</template>

<script>

import EmailVerifyComponent from '~/components/EmailVerify.vue'

export default({
    name:'verifyEmailpage',
    components: {
        EmailVerifyComponent
    },
    data() {
        return {

        }
    }
})
</script>
