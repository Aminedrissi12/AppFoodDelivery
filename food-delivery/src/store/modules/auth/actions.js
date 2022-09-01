import axios from 'axios'
// http://localhost:8081
export default {
  async loginn(context, paylode) {
    await axios
      .post(
        'https://fooddeliveryservenodejs.herokuapp.com/api/new-user/login',
        {
          email: paylode.email,
          password: paylode.password,
        }
      )
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
      .post(
        'https://fooddeliveryservenodejs.herokuapp.com/api/new-user/sign-up',
        {
          FullName: paylode.fullName,
          email: paylode.email,
          password: paylode.password,
          passwordConfirm: paylode.confirmPassword,
        }
      )
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
      .get(
        'https://fooddeliveryservenodejs.herokuapp.com/api/new-user/auht-user',
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            _tk: `${paylode}`,
          },
        }
      )
      .then(({ data }) => {
        context.commit('logUser', data)
      })
      .catch((err) => {
        context.commit('logout')
        context.commit('ErrorLog', err.response.data.message)
      })
  },
}
