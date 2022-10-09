const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./src/DB/drivers/mongoose')

dotenv.config({path: './src/config/config.env'})

const app = express()

connectDB()

app.use('/api/v2/admin/library', require('./src/routes/admin/library'))
app.use('/api/v2/user',require('./src/routes/user/library'))

const PORT = process.env.PORT || 8000
const server = app.listen(PORT , (err, result)=> {
  if (err) console.log(err)
  else console.log(`server run on port ${PORT}`)
})

process.on('unhandledRejection',(reason,reject)=> {
  let promiseCauseProblem = reason.stack.split('\n ')
  console.log(`unhandledRejection --> ${reason}, ${promiseCauseProblem[1]}`)
})

