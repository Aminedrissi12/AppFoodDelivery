<template>
  <div class="log-in-col-1">
    <!-- errors -->
    <div>
      <AuthError :errors="errors" @close-po="closePo" />
    </div>
    <div class="colm-1">
      <!-- -----------------------------Forgot------------------------------------------ -->
      <div class="colm-1-logo">
        <Logo />
      </div>
      <!-- ----------------------colm-Forgot Password------------------------------------- -->
      <div class="colm-login" style="margin: 13rem 0">
        <div class="colm-login-text">
          <div class="BackTo" @click="GoToLogin">
            <mdicon name="less-than" class="icon" />
            <span>Back To Login</span>
          </div>
          <h1>Forgot Password</h1>
          <p>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </p>
        </div>
        <!-- ------------------------colm-form------------------------------------ -->
        <form class="colm-form" @submit.prevent="SendInstructions">
          <div>
            <label for="email">Email</label>
            <input
              v-model="email"
              class="input"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="colm-btn">
            <button class="btn-login">Send instructions</button>
          </div>
        </form>
      </div>
      <!-- --------------go to sign Up-------------------------------------------- -->
      <div class="colm-signUp">
        <p>Don't have an account? <span @click="GoToSinUp">Sign up</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthError from './../../errors/euthError.vue'
import Logo from './../logo/logo.vue'

export default {
  data() {
    return {
      errors: [],
      email: null,
    }
  },
  components: {
    AuthError,
    Logo,
  },
  methods: {
    GoToSinUp() {
      this.$router.push({ path: '/signup' })
    },
    GoToLogin() {
      this.$router.push({ path: '/login' })
    },
  },
}
</script>
// ///////////////////////////////////////////////////////////////// //
<style scoped>
.log-in-col-1 {
  background-color: var(--bag-color-with);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1.12;
  padding: 2rem 0;
}

.colm-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 85%;
  flex: 1;
}
/* -------------------------colm-1-logo---------------------- */
.colm-1-logo {
  cursor: pointer;
}
/* ---------------------------------------------------------- */
.BackTo {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.BackTo > .icon {
  margin-right: 1rem;
  color: var(--colo-h4);
}
.BackTo span {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--colo-h4);
}

/* ------------------colm-login-text------------------------- */
.colm-login-text {
  margin-bottom: 2rem;
}
.colm-login-text h1 {
  margin-bottom: 1rem;
}
.colm-login-text p {
  font-size: 1.5rem;
}
/* ---------------colm-form----------------------------------- */
/* .colm-form {
  margin-bottom: 10rem;
} */
.colm-form div {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.colm-form div label {
  font-size: 1.4rem;
  font-weight: 500;
}
.colm-form > .checkbox {
  display: flex;
  flex-direction: row;
}
.colm-form > .checkbox label {
  margin-left: 1rem;
}
.input {
  outline: none;
  border: 0.2rem solid var(--bordder-color-2);
  height: 3rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
.input:focus {
  border: 0.2rem solid var(--bordder-color-1);
}
/* -----------------------colm-btn ----------------------------------*/
.colm-btn {
  display: flex;
}
.btn-login {
  background-color: var(--btn-bg-color);
  border: none;
  margin-top: 2rem;
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  color: var(--btn-colo-text);
  font-size: 1.5rem;
  cursor: pointer;
}
.colm-btn span {
  color: var(--text-color-span);
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1.5rem;
  cursor: pointer;
}
/* ----------------------------Send instructions---------------------------- */
.colm-signUp {
  font-size: 1.5rem;
  text-align: center;
}
.colm-signUp span {
  color: var(--text-color-span);
  cursor: pointer;
}
</style>
///////////////////// media query //////////////////
<style scoped>
@media (max-width: 37.5em) {
  .colm-form {
    margin-bottom: 15rem;
  }
  .colm-signUp {
    margin-bottom: 3rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .colm-form {
    margin-bottom: 15rem;
  }
  .colm-signUp {
    margin-bottom: 3rem;
  }
}
/* Medium devices (landscape tablets, 769px and up (48.06) */
@media screen and (min-width: 48.06em) and (max-width: 62em) {
  .colm-login {
    margin: 9rem 0;
  }
  .log-in-col-1 {
    padding: 0 2rem;
  }
  /* .colm-1-logo, */
  .colm-form {
    margin-bottom: 10rem;
  }
  .colm-signUp {
    margin-bottom: 3rem;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
  .log-in-col-1 {
    padding: 0 3rem;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>

// Global Style ////////////////////
<style>
.BackTo > .icon > svg {
  width: 2.5rem;
  height: 3rem;
}
</style>
