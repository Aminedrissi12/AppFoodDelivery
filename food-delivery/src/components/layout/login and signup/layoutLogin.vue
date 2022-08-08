<template>
  <div class="log-in-col-1">
    <!-- errors -->
    <div>
      <AuthError :errors="errors" @close-po="closePo" />
    </div>
    <div class="colm-1">
      <!-- -----------------------------logo------------------------------------------ -->
      <div class="colm-1-logo">
        <Logo />
      </div>
      <!-- ----------------------colm-login-text------------------------------------- -->
      <div class="colm-login">
        <div class="colm-login-text">
          <h1>Login</h1>
          <p>
            Sign in with your data that you entered during your registration.
          </p>
        </div>
        <!-- ------------------------colm-form------------------------------------ -->
        <form class="colm-form" @submit.prevent="Login">
          <div>
            <label for="email">Email</label>
            <input
              v-model="auth.email"
              class="input"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              v-model="auth.password"
              class="input"
              type="password"
              name="password"
              placeholder="min. 8 characters"
            />
          </div>
          <div class="checkbox">
            <input :v-model="checkbox" type="checkbox" name="checkbox" />
            <label for="checkbox">Keep me logged in</label>
          </div>
          <div class="colm-btn">
            <button class="btn-login">Login</button>
            <span>Forgot password</span>
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
import { mapGetters } from 'vuex'
import AuthError from './../../errors/euthError.vue'
import Logo from './../logo/logo.vue'
import { validation } from './../../../js/validationForm'
export default {
  components: {
    AuthError,
    Logo,
  },
  data() {
    return {
      errors: [],
      checkbox: null,
      auth: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      error: 'error',
    }),
  },
  methods: {
    async Login() {
      this.errors = []
      // //////////////////////////////////////// //

      let vlid = new validation(this.auth.email).validEmail()

      if (!this.auth.email) {
        this.errors.push('email required.')
      } else if (!vlid) {
        this.errors.push('invaled email.')
      }
      // ////////////////////////////////////////// //
      if (this.auth.password.split(' ')[0] === '') {
        this.errors.push('password required.')
      } else if (this.auth.password.split('').length < 7) {
        this.errors.push('invaled password (min 8 characters)')
      }
      // ////////////////////////////////////////// //
      if (this.auth.email && this.auth.password && !this.errors.length) {
        await this.$store.dispatch('loginn', this.auth)

        if (this.error) {
          this.errors.push(this.error)
        } else {
          this.$router.push({ path: '/' })
        }
      }
    },
    GoToSinUp() {
      this.$router.push({ path: '/signup' })
    },
    closePo() {
      this.errors = []
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
}

/* .colm-1 {
  width: 35rem;
  height: 95%;
} */
.colm-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
}
/* -------------------------colm-1-logo---------------------- */
.colm-1-logo {
  cursor: pointer;
}
/* ------------------colm-login-text------------------------- */
.colm-login-text {
  margin-bottom: 2rem;
}
.colm-login-text h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
}
.colm-login-text p {
  font-size: 1.5rem;
}
/* ---------------colm-form----------------------------------- */
.colm-form div {
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
/* ----------------------------colm-signUp---------------------------- */
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
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media (min-width: 37.5em) {
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media (min-width: 46.87em) {
  /* .log-in-col-1 {
  } */
}
/* Large devices (laptops/desktops, 992px and up) */
@media (min-width: 62em) {
  /* .log-in-col-1 {
  } */
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
