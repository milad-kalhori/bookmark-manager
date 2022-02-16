const res = require("express/lib/response")

const getAllBooks = (data)=> {
    return new Promise((resolve,reject)=>{
        return resolve(data)
    })
}


module.exports = {
    getAllBooks,
}