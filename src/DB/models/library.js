const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema({
  count :{
    type:Number
  },
  numberOfExist :{
    type: Number
  },
  numberOfLending :{
    type: Number
  },
  createdAt: {
    type: Date,
    // default: Date.now
    },
  bokks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Book'
    }
  ],
}, {timestamps: true})

const Library = mongoose.model('Library', librarySchema)
module.exports = Library