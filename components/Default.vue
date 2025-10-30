<!-- Please remove this file from your project -->
<template>
<div class="section">
  <div class="row">
      <div class="col-lg-6 px-0 col-md-12 col-12">
        <div class="leftivestorportal">
          <img src="/assets/signin-banner.png"  />
        </div>
        

          <!-- <div class="leftivestorportal">
      
        <div>
        <img src="/assets/jaim_logo.png" />
        <div class="investor">
        <p>Fundraiser Portal</p>
      </div>
    </div>
      <div class="mx-auto">
        <img src="/assets/money-tree-3d-render-concept-with-potted-plant_prev_ui.png"  />
      </div>
     
    </div> -->
    </div>
    <div class="col-lg-6 px-0 second-sec position-relative">
      <Login />
      <img src="/assets/shape.svg" alt="shape" class="bottom-image">
    </div>
  </div>
  </div>
</template>



<script>
import Login from '@/components/Login.vue'


export default {
  name: 'Default',
  components:{
    Login
  },
  data() {
    return {
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
    //
     }
}
</script>

