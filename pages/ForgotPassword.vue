<template>
    <div class="section">
      <div class="row">
          <div class="col-lg-6 px-0">
              <div class="leftivestorportal">
                <img src="/assets/forgotpassword-banner.png"  />
              </div>
            <!-- <div>
            <img src="/assets/jaim_logo.png" class="other-logo img-fluid"/>
        </div>
          <div class="mx-auto">
            <img src="/assets/computer-security-with-login-password-padlock_prev_ui.png" class="other-image img-fluid"  />
          </div> -->
         
        
        </div>
        <div class="col-lg-6 px-0 second-sec position-relative">
          <GetlinkComponent  />
          <img src="/assets/shape.svg" alt="shape" class="bottom-image">
        </div>
       
      </div>
      </div>
    </template>
<script>
  
import GetlinkComponent from '@/components/Getlink.vue'

export default {
    name:'ForgotPage',
    components: {
      GetlinkComponent
    },
    data () {
      return {
        //showChild: true,
      }
    },
    methods : {
      
    }
}
</script>