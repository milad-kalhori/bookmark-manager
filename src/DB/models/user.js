const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name :{
        type: String
    },
    family :{
        type: String
    },
    phone :{
        type: String
    },
    //privilege
    role :{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
      },
    lendingOfbooks :{
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    },
})

const User = mongoose.model('User', userSchema)
module.exports = User