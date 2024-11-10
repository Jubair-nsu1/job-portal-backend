const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      //'mongodb://127.0.0.1:27017/job-portal',
      //'mongodb://mongodb:27017/job-portal',
      'mongodb+srv://jubair421:mango123@cluster0.ap8mvgi.mongodb.net/job-portal',
      // process.env.MONGO_URI_LOCAL,
      // 'mongodb+srv://jubair421:mango123@cluster0.ap8mvgi.mongodb.net/',
      // process.env.MONGO_URI_DOCKER,
    )
  } catch (error) {
    console.log(error)
    console.log("Not Connected")
  }
}

module.exports = connectDB


