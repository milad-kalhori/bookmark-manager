const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  state: {
    type: String
  },
  level: {
    type: String
  },
  internalTrackingNumber: {
    type: Number
  },
  identifire:{
    type: String
  },
  user: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
}, {timestamps: true})


module.exports = mongoose.model('Transation', transactionSchema)