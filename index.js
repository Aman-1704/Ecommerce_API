// importing required packages
const express = require('express');// requiring express, 
const port = 6050;  // assigning port, so that I can try and test as this port,
const bodyParser = require('body-parser');

// requring DataBase
const db = require('./config/mongoose');

// initializing express
const app = express();

// For getting the output from req.body(it will parse the upcoming request to String or Arrays).
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// Setting up the server at the given port
app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});
