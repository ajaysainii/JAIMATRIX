<template>
  <div class="col-lg-12 col-md-12 col-12 px-0 d-flex justify-content-center align-item-center login-form signIN">
    <form
      v-if="!showChild"
      class="auth-card animate__fadeIn animate__animated"
      @submit.prevent="login"
      novalidate
    >
      <header class="auth-card__header">
        <span class="auth-card__eyebrow">Fundraiser Portal</span>
        <h2 class="auth-card__title">Welcome back</h2>
        <p class="auth-card__subtitle">
          Sign in to manage your opportunities, monitor investor interest, and
          fast-track your next raise.
        </p>
      </header>

      <div class="form-group animate__fadeIn animate__animated">
        <label for="email">Email address</label>
        <div class="input-wrapper" :class="{ 'has-error': emailHasError }">
          <i class="fa-solid fa-envelope"></i>
          <input
            id="email"
            v-model="loginData.email"
            autocomplete="email"
            name="email"
            placeholder="name@company.com"
            type="email"
          />
        </div>
        <span v-if="emailerrorMessage" class="error-message">{{ emailerrorMessage }}</span>
      </div>

      <div class="form-group animate__fadeIn animate__animated">
        <label for="password">Password</label>
        <div class="input-wrapper" :class="{ 'has-error': passwordHasError }">
          <i class="fa-solid fa-lock"></i>
          <input
            id="password"
            v-model="loginData.password"
            autocomplete="current-password"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <span v-if="passworderrorMessage" class="error-message">{{ passworderrorMessage }}</span>
      </div>

      <div class="form-meta animate__fadeIn animate__animated">
        <nuxt-link to="/ForgotPassword" class="link subtle">
          Forgot your password?
        </nuxt-link>
      </div>

      <div class="form-actions animate__fadeIn animate__animated">
        <button type="submit" class="submit-btn w-100">Sign In</button>
      </div>

      <p v-if="errorMessage" class="error-message text-center mt-2">{{ errorMessage }}</p>

      <div class="registertext animate__fadeIn animate__animated">
        <span>
          New to JAIMATRIX?
          <span @click="showChildComponent" class="mx-1 text-blue">Create an account</span>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'LoginComponent',
  data() {
    return {
      showChild: false,
      errorMessage: '',
      emailerrorMessage: '',
      passworderrorMessage: '',
      emailHasError: false,
      passwordHasError: false,
      loginData: {
        email: '',
        password: '',
      },
      users: [],
    }
  },
  methods: {
    async login() {
      try {
        this.errorMessage = ''
        let hasValidationError = false

        if (!this.loginData.email.trim()) {
          this.emailerrorMessage = 'Please enter your email address'
          this.emailHasError = true
          hasValidationError = true
        } else {
          this.emailerrorMessage = ''
          this.emailHasError = false
        }

        if (!this.loginData.password.trim()) {
          this.passworderrorMessage = 'Please enter your password'
          this.passwordHasError = true
          hasValidationError = true
        } else {
          this.passworderrorMessage = ''
          this.passwordHasError = false
        }

        if (hasValidationError) {
          return
        }

        const response = await this.$store.dispatch('authenticate', {
          email: this.loginData.email,
          password: this.loginData.password,
        })

        if (response) {
          const usercompany = response.data.companies
          if (usercompany.length !== 0) {
            this.$toast.success('Login successful!')
            this.$router.push('/Dashboard')
          } else {
            if (response.data.user.industry === 'General Industry') {
              this.$toast.success('Login successful!')
              this.$router.push('/CompanyInformation')
            }
            if (response.data.user.industry === 'Energy Industry') {
              this.$toast.success('Login successful!')
              this.$router.push('/EnergyInformation')
            }
            if (response.data.user.industry === 'Venture Industry') {
              this.$toast.success('Login successful!')
              this.$router.push('/VentureInformation')
            }
            if (response.data.user.industry === 'VC Fund Industry') {
              this.$toast.success('Login successful!')
              this.$router.push('/VcInformation')
            }
          }
        }
      } catch (error) {
        this.errorMessage = 'Incorrect email or password'
        this.$toast.error('Incorrect email or password')
      }
    },
    async showChildComponent() {
      this.$router.push('/SignUP')
    },
  },
}
</script>