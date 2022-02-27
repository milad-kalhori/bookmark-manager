const router = require('express').Router()
const Seservices = require('../../services')


router.route('/getAllBooks')
    .get((req,res,next)=>{
        Seservices.User.getAllBooks()
            then((result)=>{
                console.log(result)
            }).catch((err)=>{
                console.log(err)
            })
    })

module.exports = router