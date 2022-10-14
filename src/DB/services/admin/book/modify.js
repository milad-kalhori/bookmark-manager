const Promise = require('bluebird')
const Book = require ('../../../models/book')

const updateBook = (id, title, year, auther) => {
  return new Promise((resolve ,reject)=> {
    const query = {id}
    const update = {}
    if (title) update.title = title
    if (year) update['year'] = year
    if (title) update.auther = auther

    _edithOne(query,update)
      .then((result)=> {
        return resolve(result)
      })
      .catch((err)=> {
        return reject(err)
      })
  })
}

const _edithOne = (query, update) => {
  return new Promise ((resolve, reject) => {
    Book.findOneAndUpdate(query, update, {new: true})
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

const updateAllBook = (title, year) => {
  return new Promise ((resolve, reject) => {
    const query = {title}
    const update = {year}
    Book.updateMany(query, update, {new: true, upsert: true })
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
  updateBook,
  updateAllBook
}