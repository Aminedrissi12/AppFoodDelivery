import axios from 'axios'

export default {
  async loginn(context, paylode) {
    await axios
      .post(`${process.env.VUE_APP_URL_BACKEND}/new-user/login`, {
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
    await axios
      .post(`${process.env.VUE_APP_URL_BACKEND}/new-user/sign-up`, {
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
      .get(`${process.env.VUE_APP_URL_BACKEND}/new-user/auht-user`, {
        headers: {
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
  // ///////////////////////////////////////
  async updateClientUser(context, paylode) {
    await axios
      .patch(`http://localhost:8081/api/new-user/update-user`, paylode, {
        headers: {
          _tk: `${localStorage._tk}`,
        },
      })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
