const Book = require('../../models/book')

const findAllBooks = ()=> {
  return new Promise((resolve,reject) => {
    const condition = {}
    _findAllBooks(condition, true)
      .then((result)=>{
        return resolve(result)
      }).catch((err)=>{
        return  reject(err)
      })
  })
}

const _findAllBooks = (condition, multiple=false)=> {
  return new Promise((resolve,reject) => {
    let query
    if (multiple) query = Book.find(condition)
    else query = Book.findOne(condition)
    query.exec((err, result) => {
      if (!result || err) return reject(err)
      if (result) return resolve(result)
    })
  })
}

module.exports = {
  findAllBooks,
}
