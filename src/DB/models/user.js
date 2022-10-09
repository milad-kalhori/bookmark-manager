const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  family: {
    type: String
  },
  phone: {
    type: String
  },
  role: {
    type: String
  },
  lendingOfbooks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Book'
    }
  ]
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)