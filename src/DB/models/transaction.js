const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({

}, {timestamps: true})


module.exports = mongoose.model('Transation', transactionSchema)