const Promise = require('bluebird')
const Book = require ('../../../models/book')

const addNewBook = (data) => {
  return new Promise((resolve ,reject)=> {
    _addNew(data)
      .then((result)=> {
        return resolve(result)
      })
      .catch((err)=> {
        return reject(err)
      })
  })
}

const _addNew = (data) => {
  return new Promise ((resolve, reject) => {
    let query
    query = Book.create(data)
      .then((result)=> {
        return resolve(result)
      })
      .catch((err)=> {
        return reject(err)
      })
  })
}
module.exports = {
  addNewBook
}