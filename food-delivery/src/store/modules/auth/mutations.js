export default {
  logUser(state, paylaod) {
    localStorage.setItem('_tk', paylaod.token)
    state.error = null
    state.user = paylaod
  },
  ErrorLog(state, paylaod) {
    state.error = paylaod
  },
  SignUser(state, paylaod) {
    state.toke = paylaod.token
    localStorage.setItem('_tk', paylaod.token)
    state.error = null
    state.user = paylaod
  },
  logout(state) {
    localStorage.removeItem('_tk')
    state.user = null
  },
}
