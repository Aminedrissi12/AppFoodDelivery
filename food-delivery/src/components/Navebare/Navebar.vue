<template>
  <nav class="nav-fex">
    <div class="row-nave-bare">
      <!-- logo -->
      <div class="col cl-0">
        <router-link :to="url.home">
          <div>
            <Logo />
          </div>
          <!--  input serch -->
        </router-link>
        <input v-show="mobilNavSherch" type="Search" placeholder="Search" />
      </div>

      <!-- link page  -->
      <div class="col cl-1" v-show="!mobilNAv">
        <router-link :to="url.Restaurants">Restaurants</router-link>
        <router-link :to="url.Deals">Deals</router-link>
        <span class="cl-span"></span>
        <router-link :to="url.MyOrders">My orders</router-link>
      </div>
      <!-- My cart and profile -->
      <div class="col col-2">
        <router-link :to="url.MyCart" @click="clickBtnRouter">
          <span class="icon-cart">
            <mdicon name="shopping" class="iconCart" padding="11rem" />
          </span>
        </router-link>
        <router-link :to="url.Profile" @click="clickBtnRouter">
          <profileImag />
        </router-link>
        <!-- ---------icon-sherch--------- -->
        <div class="icon-Navbar" v-show="!mobilNavSherch">
          <mdicon name="magnify" />
        </div>

        <div class="icon-Navbar" v-show="mobilNAv">
          <span class="cl-span"></span>
          <mdicon :name="navb_icon" @click="opneSideB" />
        </div>
      </div>
    </div>
  </nav>
  <!-- --------------side-bare---------- -->
  <transition name="side-bare" class="side-Bar-row" v-show="mobilSadeBar">
    <!-- <div class="side-Bar-row" > -->
    <div class="side-Bar-col">
      <router-link :to="url.Restaurants" @click="clickBtnRouter">
        <mdicon name="silverware-clean" />
        <span>Restaurants</span>
      </router-link>
      <router-link :to="url.Deals" @click="clickBtnRouter">
        <mdicon name="account-cash-outline" />
        <span>Deals</span>
      </router-link>
      <router-link :to="url.MyOrders" @click="clickBtnRouter">
        <mdicon name="cart" />
        <span>My orders</span>
      </router-link>
    </div>
  </transition>

  <!-- ---------------------------------------------- -->
</template>

<script>
import profileImag from '../userProfile/profileImag.vue'
import Logo from './../layout/logo/logo.vue'
export default {
  components: {
    profileImag,
    Logo,
  },
  data() {
    return {
      navb_icon: 'menu',
      mobilNAv: null,
      mobilSadeBar: null,
      iconNavMob: false,
      mobilNavSherch: true,
      windowWidth: null,
      url: {
        home: '/',
        Restaurants: '/Restaurants',
        Deals: '/Deals',
        MyOrders: '/MyOrders',
        MyCart: '/MyCart',
        Profile: '/Profile',
      },
    }
  },
  methods: {
    clickBtnRouter() {
      this.mobilSadeBar = false
      this.navb_icon = 'menu'
    },
    opneSideB() {
      this.mobilSadeBar = !this.mobilSadeBar
      if (this.mobilSadeBar === true) {
        this.navb_icon = 'close'
      } else if (!this.mobilSadeBar) {
        this.navb_icon = 'menu'
      }
    },
    checkScreen() {
      this.windowWidth = window.innerWidth

      if (this.windowWidth <= 787) {
        this.mobilNAv = true
        return
      }
      this.mobilSadeBar = false
      this.navb_icon = 'menu'
      this.mobilNAv = false
    },
    checksherch() {
      this.windowWidth = window.innerWidth

      if (this.windowWidth <= 467) {
        this.mobilNavSherch = false
        return
      }
      this.mobilNavSherch = true
    },
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    window.addEventListener('resize', this.checksherch)
    this.checkScreen()
    this.checksherch()
  },
}
</script>

<style scoped>
@import './Navebar.css';

.side-bare-enter-active,
.side-bare-leave-active {
  transition: 1s ease-in-out;
}

.side-bare-enter-from,
.side-bare-leave-to {
  transform: translateX(300rem);
}
.side-bare-enter-to,
.side-bare-leave-from {
  transform: translateX(0);
}
</style>
