import { createRouter, createWebHistory } from 'vue-router'
import RootPage from './../rootPage/RootPage.vue'
import Home from '@/page/Home.vue'
import Restaurants from '@/page/Restaurants.vue'
import Deals from '@/page/Deals.vue'
import MyOrders from '@/page/MyOrders.vue'
import Profile from '@/page/Profile.vue'
import MyCart from '@/page/MyCart.vue'
import login from '@/page/logIn.vue'
import SignUp from '@/page/SignUp.vue'
import ForgotPassword from '@/page/forgotPassword.vue'

//////////////////// children Profile /////////////////
import Account from '@/components/routerComponent/profileRoute/account.vue'
import Address from '@/components/routerComponent/profileRoute/address.vue'
import Payment from '@/components/routerComponent/profileRoute/PaymentMethode.vue'
import Security from '@/components/routerComponent/profileRoute/security.vue'

const routes = [
  {
    path: '/',
    redirect: '/Home',
    name: 'rootpage',
    component: RootPage,
    // only authenticated users can see home
    meta: { requiresAuth: true },
    props: true,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home,
        // only authenticated users can see home
        meta: { requiresAuth: true },
      },
      {
        path: '/Restaurants',
        name: 'Restaurants',
        component: Restaurants,
        // only authenticated users can see Restaurants
        meta: { requiresAuth: true },
      },
      {
        path: '/Deals',
        name: 'Deals',
        component: Deals,
        // only authenticated users can see Deals
        meta: { requiresAuth: true },
      },
      {
        path: '/MyOrders',
        name: 'MyOrders',
        component: MyOrders,
        // only authenticated users can see MyOrders
        meta: { requiresAuth: true },
      },
      {
        path: '/Profile',
        redirect: '/Profile/account',
        name: 'Profile',
        component: Profile,
        // only authenticated users can see Profile
        meta: { requiresAuth: true },
        props: true,
        children: [
          {
            path: '/Profile/account',
            name: 'Account',
            component: Account,
          },
          {
            path: '/Profile/address',
            name: 'Address',
            component: Address,
          },
          {
            path: '/Profile/payment',
            name: 'Payment',
            component: Payment,
          },
          {
            path: '/Profile/security',
            name: 'Security',
            component: Security,
          },
        ],
      },
      {
        path: '/MyCart',
        name: 'MyCart',
        component: MyCart,
        // only authenticated users can see MyCart
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    component: login,
    // anybody can see a Login
    meta: { requiresAuth: false },
    beforeEnter: () => {
      const token = localStorage._tk
      // check if token is true
      if (token) {
        return { path: '/' }
      } else return true
    },
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
    // anybody can see a SignUp
    meta: { requiresAuth: false },
    beforeEnter: () => {
      const token = localStorage._tk
      // check if token is true
      if (token) {
        return { path: '/' }
      } else return true
    },
  },
  {
    path: '/Forgot-Password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    // anybody can see a SignUp
    meta: { requiresAuth: false },
    beforeEnter: () => {
      const token = localStorage._tk
      // check if token is true
      if (token) {
        return { path: '/' }
      } else return true
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  const token = localStorage._tk

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check if token = true
    if (!token) {
      // go to ALL router
      next('/Login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
