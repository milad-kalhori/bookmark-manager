const Promise = require('bluebird')
const Book = require ('../../../models/book')

const removeBook = (id) => {
  return new Promise((resolve ,reject)=> {
    const condition = {id}

    _deleteOne(condition)
      .then((result)=> {
        return resolve(result)
      })
      .catch((err)=> {
        return reject(err)
      })
  })
}

const _deleteOne = (condition) => {
  return new Promise ((resolve, reject) => {
    Book.findOneAndRemove(condition, {new: true})
      .then((result)=> {
        return resolve(result)
      })
      .catch((err)=> {
        if (err && err.name === 'MongoError' && err.code === 11000) {
          return reject(HSError.Products.Charity.Duplicate)
        }
        return reject(err)
      })
  })
}

module.exports = {
  removeBook,
}