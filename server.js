require('dotenv').config();
const express = require('express');
const app = express();
//cors for package for cors error
const cors = require('cors')
//importing corsOption form config 
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')

//connect to DB
connectDB()

//Cross Origin Resourse Shareing
app.use(cors(corsOptions))

//built-in middleware to handle urlencoded data
//in other words form data :
app.use(express.urlencoded({ extended: false }))

//built-in middleware for json
app.use(express.json())


//if the Database connection is successful then we want to listen for any other request
mongoose.connection.once('open', () => {
    console.log("Successfully connected to the Data Base");
    //tis is for the server to listen on a specific port nubmer
    app.listen(PORT, () => console.log(`server runnig on port ${PORT}`))
})
