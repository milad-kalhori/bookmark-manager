const Book = require('../../models/book')

const findAllBooks = ()=>{
    return new Promise((resolve,reject)=>{
        Book.find()
            .then((fetchBooks)=>{
                return resolve(fetchBooks)
            }).catch((err)=>{
                return reject(err)
            })

    })
}

module.exports = {
    findAllBooks,
}