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

module.exports = {
  findAllBooks,
  findBook,
  addNewBook,
}