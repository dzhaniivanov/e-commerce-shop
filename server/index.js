const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose
    .connect("mongodb+srv://admin:admin123@ecommerce.4jrm7.mongodb.net/ecommerce?retryWrites=true&w=majority")
    .then(() => console.log("Database Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    })




app.listen(5000, () => {
    console.log("Backend server is running!")
});