import { createStore } from 'vuex'

import auth from './modules/auth/index'

export default createStore({
  state: {},
  modules: {
    auth,
    namespaced: true,
  },
})
