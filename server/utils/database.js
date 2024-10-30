
// const mongoose = require("mongoose");

// require("dotenv").config();

// exports.connect = () => {

//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {console.log("DB connected Successfully")
// })
//     .catch((err) =>{
//         console.log("DB Connection Issue");
//         console.error(err);
//         process.exit(1);
//     });
// };


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    
    path: "./.env" 
});

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
};

export default databaseConnection;
