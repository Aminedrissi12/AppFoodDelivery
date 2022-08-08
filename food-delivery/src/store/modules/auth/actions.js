import axios from 'axios'

export default {
  async loginn(context, paylode) {
    await axios
      .post('http://localhost:8081/api/new-user/login', {
        email: paylode.email,
        password: paylode.password,
      })
      .then(({ data }) => {
        context.commit('logUser', data)
      })
      .catch((err) => {
        context.commit('ErrorLog', err.response.data.message)
      })
  },
  // ///////////////////////////////////////
  async Signup(context, paylode) {
    // console.log(paylode.fullName)

    await axios
      .post('http://localhost:8081/api/new-user/sign-up', {
        FullName: paylode.fullName,
        email: paylode.email,
        password: paylode.password,
        passwordConfirm: paylode.confirmPassword,
      })
      .then(({ data }) => {
        context.commit('SignUser', data)
      })
      .catch((err) => {
        console.log(err)
        context.commit('ErrorLog', err.response.data.message)
      })
  },
  // ///////////////////////////////////////
  async authUser(context, paylode) {
    await axios
      .get('http://localhost:8081/api/new-user/auht-user', {
        headers: {
          'Content-Type': 'multipart/form-data',
          _tk: `${paylode}`,
        },
      })
      .then(({ data }) => {
        context.commit('logUser', data)
      })
      .catch((err) => {
        context.commit('logout')
        context.commit('ErrorLog', err.response.data.message)
      })
  },
}
