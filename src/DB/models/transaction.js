const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  state: String,
  level: String,
  user: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
}, {timestamps: true})


module.exports = mongoose.model('Transation', transactionSchema)