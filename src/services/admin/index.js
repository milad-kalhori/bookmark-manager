const res = require("express/lib/response")

const getAllBooks = (data)=> {
    const {name,year,price} = data
    res.status(200).json({
        name,
        year,
        price,
        success: true,
        msg: "getNowWeathermap",
    })
}


module.exports = {
    getAllBooks,
}