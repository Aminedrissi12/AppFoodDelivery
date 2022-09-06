<template>
  <div class="Clss__account">
    <h2 class="Clss__account-h2">Account</h2>
    <!-- -------------------------------------- -->
    <div class="content__account">
      <h3>Personal information</h3>
      <span class="content__account-span">Avatar</span>
      <!-- -- -->
      <div class="content__account-profile">
        <div class="content__account-profile-img">
          <profile-imag :img="this.userProfile.Urlphoto"></profile-imag>
        </div>
        <div>
          <input
            type="file"
            name=""
            style="display: none"
            ref="fileInput"
            accept="image/*"
            @change="onFile"
          />
          <span class="content__account-profile-Change" @click="uloadeImag"
            >Change</span
          >
          <span class="content__account-profile-Remove">Remove</span>
        </div>
      </div>
      <!--/////////////////////////////////////////////////-->
      <div>
        <form class="content__account-form" @submit.prevent="SaveChanges">
          <!-- ------------------- -->
          <div class="content__account-row">
            <div>
              <label for="Country">First name</label>
              <input
                type="text"
                name="FirstName"
                v-model="userProfile.firstName"
                @blur="chickfirstName"
              />
            </div>
            <div>
              <label for="State">Last name</label>
              <input
                type="text"
                name="LastName"
                v-model="userProfile.lastName"
                @blur="chicklastName"
              />
            </div>
          </div>
          <!-- ------------------- -->
          <div class="content__account-row">
            <div>
              <label for="Country">Email</label>
              <input
                type="text"
                name="Email"
                v-model="userProfile.Email"
                @blur="chickEmail"
              />
            </div>
            <div>
              <label for="State">Phone number</label>
              <input
                type="text"
                name="PhoneNumber"
                v-model="userProfile.PhoneNumber"
                @blur="chickPhoneNumber"
              />
            </div>
          </div>
          <!-- ------------------- -->
        </form>
      </div>
      <!-- //////////////////////////////////////////////// -->
      <div class="content__account-email">
        <h2>Email notifications</h2>
        <!-- ////// -->
        <div class="content__account-chexbox">
          <div>
            <input type="checkbox" />
            <span class="checkmark">New deals</span>
          </div>
          <div>
            <input type="checkbox" />
            <span class="checkmark">Password changes</span>
          </div>
        </div>
        <!-- ---- -->
        <div class="content__account-chexbox">
          <div>
            <input type="checkbox" />
            <span class="checkmark">New restaurants</span>
          </div>
          <div>
            <input type="checkbox" />
            <span class="checkmark">Special offers</span>
          </div>
        </div>
        <!-- ----- -->
        <div class="content__account-chexbox">
          <div>
            <input type="checkbox" />
            <span class="checkmark">Order statuses</span>
          </div>
          <div>
            <input type="checkbox" />
            <span class="checkmark">Newsletter</span>
          </div>
        </div>
        <!-- ----- -->
      </div>
      <hr class="hr__btn" />
      <div class="content__account-btn">
        <div class="content__account-btn-left">
          <button @click="logout">Log out</button>
        </div>
        <div class="content__account-btn-right">
          <button class="account-btn-right_1" @click="cansalChange">
            Discard changes
          </button>
          <button class="account-btn-right_3" v-if="!change">
            Save changes
          </button>
          <button
            class="account-btn-right_2"
            v-if="change"
            @click="SaveChanges"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
    <!-- -------------------------------------- -->
  </div>
</template>

<script>
import profileImag from '../../userProfile/profileImag.vue'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from './../../../firebase/config'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      change: false,
      userProfile: {
        firstName: '',
        lastName: '',
        Email: '',
        Urlphoto: '',
        PhoneNumber: '',
      },
    }
  },
  components: { profileImag },
  computed: {
    ...mapGetters(['User']),
  },
  created() {
    this.userProfile.firstName = this.User.user.FullName.split(' ')[0]
    this.userProfile.lastName = this.User.user.FullName.split(' ')[1]
    this.userProfile.Email = this.User.user.email
    this.userProfile.PhoneNumber = this.User.user.phone
    this.userProfile.Urlphoto = this.User.user.photo
  },
  async beforeRouteEnter(to, _, next) {
    if (to.params.id) {
      return next()
    } else {
      await axios
        .get(`${process.env.VUE_APP_URL_BACKEND}/new-user/auht-user`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            _tk: `${localStorage._tk}`,
          },
        })
        .then(({ data }) => {
          data
          next()
        })
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('_tk')
      this.$router.push({ path: '/login' })
    },
    // //////////////////////////////////
    uloadeImag() {
      this.$refs.fileInput.click()
    },
    // //////////////////////////////////
    async onFile(event) {
      this.File = event.target.files[0]
      // create name image
      const filePath = `${Date.now()}-${this.File.name}`
      // Create a child reference
      const imagesRef = ref(storage, `profileImage/${filePath}`)
      // Upload the file and
      await uploadBytes(imagesRef, this.File).then((vl) => {
        console.log(vl)
      })
      // gte Download url
      getDownloadURL(imagesRef).then((url) => {
        console.log(url)
        this.change = true
        this.userProfile.Urlphoto = url
      })
    },
    // ///////////////////////////////
    async RelaodPage() {
      await this.$store.dispatch('authUser', localStorage._tk)
    },
    async SaveChanges() {
      const upDateUser = {
        FullName: `${this.userProfile.firstName} ${this.userProfile.lastName}`,
        email: this.userProfile.Email,
        phone: this.userProfile.PhoneNumber,
        photo: this.userProfile.Urlphoto,
      }

      await this.$store.dispatch('updateClientUser', upDateUser)
    },
    // ///////////////////////////////
    cansalChange() {
      this.userProfile.firstName = this.User.user.FullName.split(' ')[0]
      this.userProfile.lastName = this.User.user.FullName.split(' ')[1]
      this.userProfile.Email = this.User.user.email
      this.userProfile.PhoneNumber = this.User.user.phone
      this.userProfile.Urlphoto = this.User.user.photo
      this.change = false
    },
    // ///////////////////////////////
    chickfirstName() {
      if (
        this.userProfile.firstName !== this.User.user.FullName.split(' ')[0]
      ) {
        this.change = true
      } else {
        this.change = false
      }
    },
    chicklastName() {
      if (this.userProfile.lastName !== this.User.user.FullName.split(' ')[1]) {
        this.change = true
      } else {
        this.change = false
      }
    },
    chickEmail() {
      if (this.userProfile.Email !== this.User.user.email) {
        this.change = true
      } else {
        this.change = false
      }
    },
    chickPhoneNumber() {
      if (this.userProfile.PhoneNumber !== this.User.user.phone) {
        this.change = true
      } else {
        this.change = false
      }
    },
  },
}
</script>

<style scoped>
/* .Clss__account {
} */
.Clss__account-h2 {
  margin-bottom: 1.6rem;
}
.content__account {
  border: 2px solid var(--bordder-color-2);
  border-radius: 1.6rem;
  padding: 2rem 1.5rem;
}

.content__account > h3 {
  margin-bottom: 1.6rem;
}
.content__account-span {
  font-size: 1.3rem;
  margin-top: 1.6rem;
}
.content__account-profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
}
.content__account-profile-img > div {
  border: none;
  border-radius: none;
  height: 12rem;
}
.content__account-profile-Change {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 1.4rem;
  padding: 1.2rem 1.6rem;
  border: 1.6px solid var(--bordder-color-1);
  color: var(--btn-bg-color);
  border-radius: 1.4rem;
  cursor: pointer;
}
.content__account-profile-Remove {
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  color: var(--text-color-input);
}
/* ------------------------------- */
.content__account-form {
  margin-top: 1.6rem;
}
.content__account-row {
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
}
.content__account-row:not(:last-child) {
  margin-bottom: 1.5rem;
}
.content__account-row > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.content__account-row > div > label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}
.content__account-row > div > input {
  padding: 1.2rem;
  border: 1.6px solid var(--bordder-color-2);
  outline-color: var(--bordder-color-1);
  border-radius: 1.3rem;
  font-size: 1.4rem;
  font-weight: 400;
}
.content__account-row > div > input:focus {
  background-color: var(--bag-color-input);
}
/* -------------------------------------- */
.content__account-email {
  margin-top: 5rem;
}
.content__account-chexbox {
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  margin: 1.2rem 0;
}
.content__account-chexbox > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.content__account-chexbox > div > span {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  color: var(--text-color);
}
.content__account-chexbox > div > input {
  width: 2.1rem;
  height: 2.1rem;
  margin-right: 1rem;
}
/* ------------------------------------- */
.hr__btn {
  margin: 1.5rem 0;
  border-top: 1px;
  border-left: 0px;
  border-right: 0px;
}
.content__account-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content__account-btn > div > button {
  padding: 1.2rem 1.6rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 1.2rem;
  /* cursor: pointer; */
}
.content__account-btn-left > button {
  border: 1.6px solid var(--btn-logout-color);
  background-color: var(--bag-color-with);
  color: var(--btn-logout-color);
  cursor: pointer;
}
.account-btn-right_1 {
  border: 1.6px solid var(--btn-navbar-color);
  background-color: var(--bag-color-with);
  color: var(--btn-navbar-color);
  cursor: pointer;
}
.account-btn-right_2 {
  margin-left: 1.5rem;
  border: 1.6px solid var(--bordder-color-1);
  background-color: var(--btn-bg-color);
  color: var(--btn-colo-text);
  cursor: pointer;
}
.account-btn-right_3 {
  margin-left: 1.5rem;
  border: none;
  background-color: var(--bag-color-with-1);
  color: var(--text-color1);
  cursor: not-allowed;
}
</style>

///////////// global style ////////

<style>
.content__account-profile-img > div > img {
  width: 12rem;
  height: 12rem;
  border-radius: 16px;
}
</style>
// /////////////// ///////////////////// media query //////////////////

<style scoped>
@media (max-width: 37.5em) {
  .content__account-row {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .content__account-row {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  /* @media (min-width: 46.87em) { */
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
