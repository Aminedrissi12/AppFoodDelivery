import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  state() {
    return {
      token: localStorage._tk,
      error: null,
      user: null,
    }
  },
  mutations,
  actions,
  getters,
}
