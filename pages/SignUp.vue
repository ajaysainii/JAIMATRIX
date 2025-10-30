<template>
  <div class="section">
    <div class="row">
      <div class="col-lg-6 px-0 col-md-12 col-12">
        <!-- <div class="leftivestorportal"> -->

          <!-- <div>
            <img src="/assets/jaim_logo.png" />
            <div class="investor">
              <p>Fundraiser Portal</p>
            </div>
          </div> -->
          <!-- <div class="mx-auto">
            <img src="/assets/money-tree-3d-render-concept-with-potted-plant_prev_ui.png" />
          </div> -->
          <div class="leftivestorportal">
          <img src="/assets/signin-banner.png"  />
        </div>

        <!-- </div> -->
      </div>
      <div class="col-lg-6 px-0 second-sec position-relative">
        <!-- <Login /> -->
        <div>
          <div class="col-lg-12 px-0 d-flex justify-content-center align-item-center login-form signUp">
            <!-- <div class="" > -->
            <form @submit.prevent="register" v-if="!showChild">
              <div class="form-section">
                <div class="main-heading">
                  <p class="text-center mb-0">Fundraiser Portal</p>
                </div>
                <div class="formcontainer">
                  <div class="img-container">
                    <p>
                      Welcome to
                      <img src="/assets/jaim_logo.png" class="img-fluid mx-2 animate__fadeIn animate__animated" />
                    </p>
                  </div>
                  <div>
                    <h4 class="animate__fadeIn animate__animated signin-heading mb-2">Sign UP</h4>
                  </div>
                  <div class="row">
                    <div>
                      <input id="user-id" type="hidden" v-model="registerData.user_id" />
                    </div>
                    <div>
                      <input id="role-id" type="hidden" v-model="registerData.role_id" />
                    </div>
                    <div class="form-group col-lg-12 animate__fadeIn animate__animated">
                      <label for="email">Email</label>
                      <input type="email" id="email" placeholder="Enter email address" name="email"
                        :style="emailinput" v-model="registerData.email" />
                      <span v-if="emailerrorMessage" class="error-message">{{
                        emailerrorMessage
                        }}</span>
                    </div>
                    <div class="form-group col-lg-6 animate__fadeIn animate__animated">
                      <label for="username">Username</label>
                      <input type="text" id="username" placeholder="Enter name" name="username"
                        v-model="registerData.username" />
                      <!-- <span v-if="nameerrorMessage" class="error-message">{{nameerrorMessage}}</span> -->
                    </div>
                    <div class="form-group col-lg-6 animate__fadeIn animate__animated">
                      <label for="number">Contact Number</label>

                      <div class="borderclass  d-flex align-items-center justify-center" :style="contactinput"
                        v-if="this.country">

                        <span class="d-flex">
                          <select class="selectclass">
                            <option selected>{{ this.country.emoji }} {{
                              this.country.country_code }}</option>
                            <option v-for="c in country_list" :key="c.name">{{ c.emoji }} {{
                              c.country_code }}</option>
                          </select>

                        </span>
                        <input class="border-0 " type="number" id="number" placeholder="Enter number" name="number"
                          @input="limitDigits" v-model="registerData.contact_number" maxlength="10" />

                      </div>
                      <span v-if="contacterrorMessage" class="error-message">{{
                        contacterrorMessage
                      }}</span>
                      <span v-if="!isValidMobileNumber" class="error-message">{{
                        validatemobile
                      }}</span>
                    </div>
                    <div class="form-group col-lg-6 animate__fadeIn animate__animated">
                      <label for="password">Password</label>
                      <input type="password" id="password" placeholder="Enter password" name="password" :style="passwordinput"
                        v-model="registerData.password" />
                      <span v-if="passworderrorMessage" class="error-message">{{
                        passworderrorMessage
                      }}</span>
                    </div>
                    <div class="form-group col-lg-6 animate__fadeIn animate__animated">
                      <label for="form-select">Select Industry</label>
                      <select class="form-select" aria-label="Default select example" :style="industryinput"
                        v-model="registerData.industry">
                        <option value="" selected>Select Industry</option>
                        <option value="General Industry">General Industry</option>
                        <option value="Venture Industry">Venture Industry</option>
                        <option value="Energy Industry">Energy Industry</option>
                        <option value="VC Fund Industry">VC Fund Industry</option>
                      </select>
                      <span v-if="industryerrorMessage" class="error-message">{{
                        industryerrorMessage
                      }}</span>
                    </div>
                  </div>
                  <div>
                    <!-- <nuxt-link to="/VerifyEmail"> -->
                    <button  type="submit" class="submit-btn w-100 animate__fadeIn animate__animated">
                     <span v-if="!isLoading">Sign Up</span>
                     <span v-else class="loader"></span>
                    </button>
                    <!-- </nuxt-link> -->
                  </div>
                  <div>
                    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                  </div>
                  <div class="registertext mt-2 animate__fadeIn animate__animated">
                    <span>
                      Have an Account ?
                      <span @click="showChildComponent" class="text-blue mx-2">
                        Sign in
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <img src="/assets/shape.svg" alt="shape" class="bottom-image">
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import "animate.css";
import country_code from '../country_code.json';


export default {
  name: "Register",
  components: {
  },
  data() {
    return {
      showChild: false,
      successMessage: "",
      errorMessage: "",
      // nameerrorMessage:'',
      industryerrorMessage: "",
      emailerrorMessage: "",
      passworderrorMessage: "",
      contacterrorMessage: "",
      registerData: {
        user_id: "",
        username: "",
        email: "",
        password: "",
        industry: "",
        contact_number: "",
        role_id: "5",
      },
      emailinput: {
        borderColor: '#91919180 !important'
      },
      passwordinput: {
        borderColor: '#91919180 !important'
      },
      contactinput: {
        borderColor: '#91919180 !important'
      },
      industryinput: {
        borderColor: '#91919180 !important'
      },
      validatemobile: '',
      country: '',
      isLoading: false
    };
  },
  async mounted() {
    this.country_list = country_code
    const current_country = await axios.get("https://ipinfo.io/json?token=7507ed11fcab8f")
    //  http://ip-api.com/json
    // console.log(current_country)
    country_code.map((country) => {
      if (country.code == current_country.data.country) {
        this.country = country
      }
    })
  },
  computed: {
    isValidMobileNumber() {
      const mobileNumberRegex = /^[0-9]{10}$/; // matches 10-digit numeric input
      // console.log(mobileNumberRegex.test(this.registerData.contact_number))

      return mobileNumberRegex.test(this.registerData.contact_number);
    }
  },
  methods: {
    async register(registerData) {
      try {

        if (this.registerData.email === "") {
          this.emailerrorMessage = "Please enter email address";
          this.emailinput.borderColor = 'red !important'
          return false
        } else {
          this.emailerrorMessage = "";
          this.emailinput.borderColor = '#91919180 !important'
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registerData.email)) {
          this.emailerrorMessage = "Please enter a valid email address";
          this.emailinput.borderColor = 'red !important'
          return false
        } else {
          this.emailerrorMessage = "";
          this.emailinput.borderColor = '#91919180 !important'
        }

        if (this.registerData.password === "") {
          this.passworderrorMessage = "Please enter a valid password";
          this.passwordinput.borderColor = 'red !important'
            return false
        } else {
          this.passworderrorMessage = "";
          this.passwordinput.borderColor = '#91919180 !important'
        }

        if (this.registerData.industry === "") {
          this.industryerrorMessage = "Please select a valid industry";
          this.industryinput.borderColor = 'red !important'
            return false
        } else {
          this.industryerrorMessage = "";
          this.industryinput.borderColor = '#91919180 !important'
        }

        if (this.registerData.contact_number === "") {
          this.contacterrorMessage = "Please enter a valid contact number";
          this.contactinput.borderColor = 'red !important'
          return false
        } else {
          this.contacterrorMessage = "";
          this.contactinput.borderColor = '#91919180 !important'
        }


        const mobileNumberRegex = /^[0-9]{10}$/;
        if (mobileNumberRegex.test(this.registerData.contact_number) === false) {
          this.validatemobile = "Please enter a valid contact number";
          return false
        } else {
          this.contacterrorMessage = "";
        }
        this.isLoading = true 
        var response = await this.$store.dispatch('register', this.registerData)
        if (response.status === 200) {
          this.isLoading = false 
          this.$toast.success("signUp successfully!");
          this.$router.push('/');
        } else {
          this.$toast.error("something went wrong!");
        }
        return response.registerData;
      } catch (error) {
        this.isLoading = false 
        this.$toast.error('Email already exist!')

      }
    },
    async showChildComponent() {
      this.$router.push('/')
    },
    limitDigits() {
      if (this.registerData.contact_number.length > 10) {
        this.registerData.contact_number = this.this.registerData.contact_number.slice(0, 10)
      }
    }
  },
};
</script>


<style scoped>
.selectclass {
  border: none;
  outline: none;
  background-color: #f2f2f2 !important;
  padding: 8px 5px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 12px;
  min-width: 80px;
  /* width: auto; */
}

.borderclass {
  border: 1px solid #91919180 !important;
  border-radius: 5px !important;
}

.border-0 {
  border: none !important;
  padding-left: 0 !important;
}

/* .formcontainer {
  padding: 70px !important;
  width: 75%;
} */

@media only screen and (max-width:1500px) {
  .selectclass {
    width: 50px;
    font-size: 10px;
    min-width: 70px;
    padding: 5px 0;
  }
}

/* @media only screen and (max-width:1300px) and (min-width:1150px) {
  .formcontainer {
    padding: 40px !important;
    width: 80% !important;
  }
} */

@media only screen and (max-width:1149px) {
  /* .formcontainer {
    padding: 40px !important;
    width: 80% !important;
  } */

  .selectclass {
    font-size: 8px;
    min-width: 55px;
  }

  .border-0 {
    font-size: 10px;
  }
}
@media only screen and (max-width:550px){
  .login-form form{
    height: 100%;
    padding: 50px 0;
  }
}

.submit-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; /* Adjust as needed */
  font-size: 16px; /* Adjust as needed */
  border: none;
  background-color: #FF7F27; /* Adjust as needed */
  color: white;
  cursor: pointer;
}
</style>