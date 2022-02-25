const mongoose = require('mongoose')

// big S
const bookSchema = new mongoose.Schema({
    bookId: {
      type: String
    },
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
    exist :{
      type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lendingToUser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book