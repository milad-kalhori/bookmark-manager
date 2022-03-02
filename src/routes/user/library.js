const router = require('express').Router()
const Seservices = require('../../services')


router.route('/findAllBooks')
    .get((req,res,next)=>{
        Seservices.User.findAllBooks()
            then((result)=>{
                console.log(result)
            }).catch((err)=>{
                console.log(err)
            })
    })

module.exports = router