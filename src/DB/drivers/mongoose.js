const mongoose = require("mongoose")

const connectDB = () => {
  const DB = process.env.DATABASE_LOCAL
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"))
}


module.exports = connectDB
