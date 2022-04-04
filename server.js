require('dotenv').config();
const express = require('express');
const app = express();
//cors for package for cors error
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

//connect to DB
connectDB();

//built-in middleware to handle urlencoded data
//in other words form data :
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

app.use('/customers', require('./routes/api/customers'));
app.use('/customerDetails', require('./routes/api/customerDetails'));
app.use('/createInvoice', require('./routes/api/invoice'))


//common routing for all of the route that did not match the previous conditions
app.all('*', (req, res) => {
    res.status(404)
    res.type('text').send('404 not found')

})
//if the Database connection is successful then we want to listen for any other request
mongoose.connection.once('open', () => {
    console.log("Successfully connected to the Data Base");
    //tis is for the server to listen on a specific port nubmer
    app.listen(PORT, () => console.log(`server runnig on port ${PORT}`))
})
