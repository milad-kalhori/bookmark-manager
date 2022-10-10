const Promise = require('bluebird')
const Databaseservices = require('../../DB/services')

const findAllBooks = () => {
  return new Promise((resolve,reject)=>{
    Databaseservices.User.Book.Find.findAllBooks()
      .then((result)=>{
         return resolve(result)
       }).catch((err)=>{
          return reject(err)
       })
  })
}

module.exports = {
  findAllBooks,
}