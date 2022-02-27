const Book = require('../../models/book')

const getAllBooks = ()=> {
    return new Promise((resolve,reject) => {
        Book.Find()
            .then((fetchBooks)=>{
                return resolve(fetchBooks)
            }).catch((error)=>{
                return reject(error)
            })
        /*
        Book.find({}, function(err, allBooks) {
        return resolve(allBooks)
    })
    */
})
}


// _editOne  findAll

module.exports = {
    getAllBooks,
}