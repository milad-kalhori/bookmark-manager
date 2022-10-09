const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  authet: {
    type: String
  },
  price: {
    type: Number
  },
  row: {
    type: Number
  },
  culmn: {
    type: Number
  },
  lending: {
    type: Boolean
  },
  exist:{
    type: Boolean
  },
  lendingToUser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema)
