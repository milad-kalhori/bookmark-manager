const Databaseservices = require('../../DB/services')

const getAllBooks = () => {
    return new Promise((resolve,reject)=>{
        Databaseservices.User.Find.getAlllBooks()
            .then((result)=>{
                return resolve(result)
            }).catch((err)=>{
                return reject(err)
            })
    })
}

module.exports = {
    getAllBooks,
}