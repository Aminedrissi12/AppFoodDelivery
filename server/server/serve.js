const app = require('./../App')
const mongoose = require('mongoose')
const dontenv = require('dotenv')

dontenv.config()

const password = process.env.PASSWORD
const use = process.env.USER_DATA

const rtlMongo = `mongodb+srv://${use}:${password}@cluster0.gpxxz.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(rtlMongo)
  .then(() => {
    console.log('DB connections successful!')
  })
  .catch((err) => {
    console.log(err)
  })

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`run server on http://localhost:${port}/`)
})
