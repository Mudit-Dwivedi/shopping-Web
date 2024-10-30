
// const express = require("express");
// const app = express();

// require("dotenv").config();
// const PORT = process.env.PORT || 3000;

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// app.use(express.json());

// require("./config/database").connect();

// // route import and mount
// const User = require("./routes/user");
// app.use("/api/v1",User);

// //activation 

// app.listen(PORT, () => {
//     console.log (`app is listioning at ${PORT}`);
// })

// app.get("/", (req,res) =>{
//     res.send("Hello Buddy");
// });


// const express = require("express");
// const app = express();
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// // Enable CORS for cross-origin requests
// app.use(cors({
//   origin: "http://localhost:3000", // Frontend URL
//   credentials: true,               // Allow cookies to be sent with requests
// }));

// // Middleware
// app.use(cookieParser());
// app.use(express.json());

// // Connect to the database
// require("./utils/database").connect();

// // Import and mount routes
// const User = require("./routes/userRoute");
// app.use("/api/v1", User);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`App is listening at http://localhost:${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import cors from 'cors';


databaseConnection();

dotenv.config({
    path:"./.env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.use("/user", userRouter);


app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
    console.log(`Mongo URI: ${process.env.MONGO_URI}`);
});



