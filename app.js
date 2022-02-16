const express = require('express')

const app = express()

app.use('api/v2/admin/library/', require('./src/routes/admin/library'))
app.use('api/v2/user/library/', require('./src/routes/user/library'))


const Port = process.env.Port || 5000
const server = app.listen(Port , ()=> {
    console.log(`server run on port ${Port}`)
})


process.on('unhandledRejection',(reason,reject)=> {
    let promiseCauseProblem = reason.stack.split('\n ')
    console.log(`unhandledRejection --> ${reason}, ${promiseCauseProblem[1]}`)
})