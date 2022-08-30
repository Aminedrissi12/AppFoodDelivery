<template>
  <div class="log-in-col-1">
    <!-- errors -->
    <div>
      <AuthError :errors="errors" @close-po="closePo" />
    </div>
    <!-- -------------------------------- -->
    <div class="colm-1">
      <!--
      -----------------------------logo------------------------------------------ -->

      <div class="colm-1-logo">
        <Logo />
      </div>
      <!-- ----------------------colm-login-text------------------------------------- -->
      <div class="colm-login">
        <div class="colm-login-text">
          <h1>Sign Up</h1>
        </div>
        <!-- ------------------------colm-form------------------------------------ -->
        <form class="colm-form" @submit.prevent="SignUp">
          <div>
            <label for="text">Full name</label>
            <input
              v-model="newUser.fullName"
              class="input"
              type="text"
              name="text"
              placeholder="name example"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              v-model="newUser.email"
              class="input"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              v-model="newUser.password"
              class="input"
              type="password"
              name="password"
              placeholder="min. 8 characters"
            />
          </div>
          <div>
            <label for="password">Confirm Password</label>
            <input
              v-model="newUser.confirmPassword"
              class="input"
              type="password"
              name="password"
              placeholder="min. 8 characters"
            />
          </div>

          <div class="colm-btn">
            <button class="btn-login" v-if="!loading">Sign Up</button>
            <button class="btn-login" v-if="loading">
              <icon-loading />
            </button>
          </div>
        </form>
      </div>
      <!-- --------------------go-to-sign-Up----------------- -->
      <div class="colm-signUp">
        <p>Do you have an account? <span @click="GoToLogin">Login</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthError from './../../errors/euthError.vue'
import Logo from './../logo/logo.vue'
import { validation } from './../../../js/validationForm'
import iconLoading from './../../icon/iconLoading.vue'
export default {
  data() {
    return {
      loading: false,
      errors: [],
      newUser: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  components: {
    Logo,
    AuthError,
    iconLoading,
  },
  computed: {
    ...mapGetters({
      error: 'error',
    }),
  },
  methods: {
    async SignUp() {
      this.errors = []

      const Fllname = this.newUser.fullName.split(' ')

      console.log(Fllname[0])
      let lastName = Fllname[1]

      console.log(lastName)
      // ///////////errors///////////// //

      // ////////////////////// validation /////////////////// //
      if (Fllname[0] === '') {
        this.errors.push('full Name required.')
      } else if (Fllname[0] === '' || Fllname[1] === '' || lastName[1] === '') {
        this.errors.push('full Name invaled')
      }
      // /////////
      let vlid = new validation(this.newUser.email).validEmail()

      if (!this.newUser.email) {
        this.errors.push('email required.')
      } else if (!vlid) {
        this.errors.push('invaled email.')
      }
      // /////////

      if (this.newUser.password.split(' ')[0] === '') {
        this.errors.push('password required.')
      } else if (this.newUser.password.split('').length < 7) {
        this.errors.push('invaled password (min 8 characters)')
      }
      // /////////

      if (this.newUser.confirmPassword.split(' ')[0] === '') {
        this.errors.push('confirm password required.')
      } else if (this.newUser.password !== this.newUser.confirmPassword) {
        this.errors.push('password is not a sim confirm passworde')
      }

      ///////////////////////////////////////////////////////////////////////////////////

      if (
        this.newUser.fullName &&
        this.newUser.email &&
        this.newUser.password &&
        this.newUser.confirmPassword &&
        !this.errors.length
      ) {
        this.loading = true
        await this.$store.dispatch('Signup', this.newUser)

        if (this.error) {
          this.loading = false
          this.pushError(this.error)
        } else {
          this.$router.push({ path: '/' })
        }
      }
    },
    GoToLogin() {
      this.$router.push({ path: '/login' })
    },
    closePo() {
      this.errors = []
    },
    pushError(valu) {
      let err = valu.split(':')[2]

      this.errors.push(err)
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
  width: 60%;
  height: 95%;
} */
.colm-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
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

/* ---------------colm-form----------------------------------- */
.colm-form div {
  display: flex;
  flex-direction: column;
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
  margin-bottom: 2rem;
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
  height: 4rem;
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

// //////////////////media///////////////////////////

<style scoped>
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media (min-width: 37.5em) {
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media (min-width: 46.87em) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media (min-width: 62em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
