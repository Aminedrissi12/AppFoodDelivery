export default {
  logUser(state, paylaod) {
    console.log(paylaod.user.FullName)
    localStorage.setItem('_tk', paylaod.token)
    state.error = null
    state.validation = true
    state.token = paylaod.token
    state.id = paylaod.user.id
    state.useName = paylaod.user.FullName
  },
  ErrorLog(state, paylaod) {
    console.log(paylaod)
    state.error = paylaod
  },
  SignUser(state, paylaod) {
    state.toke = paylaod.token
    state.id = paylaod.user.id
    state.useName = paylaod.user.FullName
    localStorage.setItem('_tk', paylaod.token)
    state.error = null
  },
  logout(state) {
    localStorage.removeItem('_tk')
    console.log(state)
    state.error = null
    state.token = null
    state.id = null
    state.useName = null
  },
  autoLogin(state) {
    if (state.token) {
      state.validation = true
    } else {
      state.validation = false
    }
  },
}
