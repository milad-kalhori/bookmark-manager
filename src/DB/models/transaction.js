const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  state: String,
  level: String,
}, {timestamps: true})


module.exports = mongoose.model('Transation', transactionSchema)