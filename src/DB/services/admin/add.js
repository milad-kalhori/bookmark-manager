const Book = require('../../models/book')

const createBook = (body)=> {
    return new Promise((resolve,reject) => {
        const newBook = Book.create(body)
        return resolve(newBook)
    })
}

module.exports = {
    createBook,
}