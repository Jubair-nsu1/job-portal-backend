const express = require('express');
const cors = require('cors')
const cookieParser = require("cookie-parser");
require("dotenv").config();

//Route
const jobRoutes = require("./routes/circularRoute");
const userRoute = require("./routes/userRoutes");

//Server setup
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log(`Server running on port ${PORT}`);
    }
});


//Database Connection
const connectDB = require("./config/db");
connectDB();

//SeedDB (Admin Data)
// const seedDB = require("./config/seed")
// seedDB();

// Use CORS middleware to allow requests from the frontend
app.use(
    cors({
      origin: ["https://bylc-career.netlify.app"], // add your frontend's origin here
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
      credentials: true,
      optionsSuccessStatus: 200,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("*/files", express.static("files")); //static makes files accessible from anywhere

//Call all Routes
app.use("/api", jobRoutes); //All the routes defined in auth.js will be prefixed with /api/auth
app.use("/api", userRoute);
