const Databaseservices = require('../../DB/services')

const getAllBooks = (body)=> {
    return new Promise((resolve,reject) => {
       Databaseservices.Admin.Find.getAllBooks()
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
    getAllBooks,
    createBook,
}