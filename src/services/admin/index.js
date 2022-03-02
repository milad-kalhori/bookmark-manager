const Databaseservices = require('../../DB/services')
// bluebird

const findAllBooks = (body)=> {
    return new Promise((resolve,reject) => {
       Databaseservices.Admin.Find.findAllBooks()
       .then((result) => {
           return resolve(result)
       })
       .catch((error) => {
           return reject(error)
       })
    })
}
const createBook = (body) => {
    return new Promise((resolve,reject) => {
        Databaseservices.Admin.Add.createBook(body)
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
    createBook,
}