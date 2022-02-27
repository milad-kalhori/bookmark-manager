const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config( {path: './config/config.env'} )

const app = express()

// body parser
app.use(express.json());

const DB = process.env.DATABASE_LOCAL
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"))


const Port = process.env.Port || 5000
const server = app.listen(Port , ()=> {
    console.log(`server run on port ${Port}`)
})

// http://localhost:5000
app.use('/api/v2/admin/library', require('./src/routes/admin/library'))
app.use('/api/v2/user',require('./src/routes/user/library'))


process.on('unhandledRejection',(reason,reject)=> {
    let promiseCauseProblem = reason.stack.split('\n ')
    console.log(`unhandledRejection --> ${reason}, ${promiseCauseProblem[1]}`)
})