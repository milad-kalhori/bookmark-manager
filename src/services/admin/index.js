const Promise = require('bluebird')
const Databaseservices = require('../../DB/services')


const findAllBooks = (body)=> {
  return new Promise((resolve,reject) => {
    Databaseservices.Admin.Book.Find.findAllBooks()
      .then((result) => {
        return resolve(result)
      })
      .catch((error) => {
        return reject(error)
      })
  })
}


const findBook = (body)=> {
  return new Promise((resolve,reject) => {
    Databaseservices.Admin.Book.Find.findBook(body)
      .then((result) => {
        return resolve(result)
      })
      .catch((error) => {
        return reject(error)
      })
  })
}

const addNewBook = (body) => {
  return new Promise((resolve,reject) => {
    Databaseservices.Admin.Book.Add.addNewBook(body)
      .then((result) => {
        return resolve(result)
      })
      .catch((error) => {
        return reject(error)
      })
  })
}

const updateBook = (id, body) => {
  return new Promise((resolve, reject)=> {
    const {title, auther, year} = body
    Databaseservices.Admin.Book.Modify.updateBook(id, title, auther, year)
    .then((result) => {
      return resolve(result)
    })
    .catch((error) => {
      return reject(error)
    })
  })
}

const updateAllBook = (query, body) => {
  return new Promise((resolve, reject)=> {
    Databaseservices.Admin.Book.Modify.updateAllBook(query, body)
    .then((result) => {
      return resolve(result)
    })
    .catch((error) => {
      return reject(error)
    })
  })
}

const removeBook = (id) => {
  return new Promise((resolve, reject)=> {
    Databaseservices.Admin.Book.Remove.removeBook(id)
    .then((result) => {
      return resolve(result)
    })
    .catch((error) => {
      return reject(error)
    })
  })
}

module.exports = {
  findAllBooks,
  findBook,
  addNewBook,
  updateBook,
  updateAllBook,
  removeBook,
}