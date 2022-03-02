const mongoose = require("mongoose")

const connectDB = (DB) => {
    mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"))
}


module.exports = connectDB
