const Express = require('express')
const NewUser = Express.Router()
const auth = require('./../Controller/controllerUser')

NewUser.route('/auht-user').get(auth.CheckAuth, auth.autoAuth)
NewUser.route('/sign-up').post(auth.signUp)
NewUser.route('/login').post(auth.login)

module.exports = NewUser

/*


*/
