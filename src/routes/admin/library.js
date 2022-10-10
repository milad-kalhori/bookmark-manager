const express = require('express')
const Services = require('../../services')

const router = express.Router()

router.route('/findAllBooks')
  .get((req,res,next)=> {
    Services.Admin.findAllBooks(req.body)
      .then((result) => {
        return console.log(result)
      })
      .catch((err) => {
        return console.log(err)
      })
  })

router.route('addNewBook')
  .post((req,res,next)=> {
    Services.Admin.addNewBook()
      .then((result)=> {
        return console.log(result)
      })
      .catch((err)=> {
        return console.log(err)
      })
  })

module.exports = router