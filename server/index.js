
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").connect();

// route import and mount
const User = require("./routes/user");
app.use("/api/v1",User);

//activation 

app.listen(PORT, () => {
    console.log (`app is listioning at ${PORT}`);
})

app.get("/", (req,res) =>{
    res.send("Hello Buddy");
});