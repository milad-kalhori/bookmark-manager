const Promise = require('bluebird')
const Book = require('../../../models/book')

const findAll = ()=> {
  return new Promise((resolve,reject) => {
    const condition = {}
    _findBasedOnCondition(condition, true)
      .then((result)=>{
        return resolve(result)
      }).catch((err)=>{
        return  reject(err)
      })
  })
}

const _findBasedOnCondition = (condition, multiple=false)=> {
  return new Promise((resolve,reject) => {
    let query
    if (multiple) query = Book.find(condition)
    else query = Book.findOne(condition)
    query.exec((err, result) => {
      if (err) return reject(err)
      return resolve(result)
    })
  })
}

module.exports = {
  findAllBooks: findAll,
}
