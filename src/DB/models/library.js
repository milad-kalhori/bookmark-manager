const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema({
  count :{
    type:Number
  },
  row: [
    {type: Number}
  ],
  culmn: [
    {type: Number}
  ],
  numberOfExist :{
    type: Number
  },
  numberOfLending :{
    type: Number
  },
  bokks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Book'
    }
  ],
}, {timestamps: true})

module.exports = mongoose.model('Library', librarySchema)