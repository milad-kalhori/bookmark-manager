const router = require('express').Router()
const Services = require('../../services')

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

router.route('/createBook')
  .post((req,res,next)=> {
      Services.Admin.createBook(req.body)
      .then((result) => {
          return console.log(result)
      })
      .catch((err) => {
          return console.log(err)
      })
})

module.exports = router





































/*
const router = require('express').Router()
const { body, validationResult } = require('express-validator')
const Multer = require('../../../lib/middlewares/multer-util')

const { celebrate, Joi } = require('../../../lib/middlewares/celebrate')
const ErrorHandler = require('../../../lib/components/handlers/errorHandler')
const SuccessHandler = require('../../../lib/components/handlers/successHandler')
const { picUpload } = require('../../../lib/middlewares/multer-util')
const Services = require('../../services')
const HSErrorTypes = require('../../errors')
const Validator = require('../transaction/validator')
const { reject } = require('bluebird')

router.route('/categories')
  .post(celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      icon: Joi.string().required(),
      elementId: Joi.string().allow(''),
      priority: Joi.string(),
      description: Joi.string(),
      productType: Joi.string().valid('shop', 'charity', 'brand').default('shop')
    }),
    query: {},
    params: {}
  }), (req, res, next) => {
    Services.Admin.Shop.Categories.addNew(req.user, req.body)
      .then((category) => {
        return SuccessHandler(res, 200, category)
      })
      .catch((err) => {
        return ErrorHandler(err, req, res)
      })
  })
  .get((req, res, next) => {
    let productType = req.query.productType
    Services.Admin.Shop.Categories.findAll(req.user, productType)
      .then((categories) => {
        return SuccessHandler(res, 200, categories)
      })
      .catch((err) => {
        return ErrorHandler(err, req, res)
      })
  })
*/