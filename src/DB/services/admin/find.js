const Book = require('../../models/book')

const getAllBooks = ()=> {
    return new Promise((resolve,reject) => {
        //const allBooks = Book.Find()
        Book.find({}, function(err, allBooks) {
        return resolve(allBooks)
    })
})
}

module.exports = {
    getAllBooks,
}