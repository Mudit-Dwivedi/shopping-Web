const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    // role:{
    //     type:String,
    //     enum:["Admin","Student","visitor "],
    //     default: "Visitor",
    // }
});

module.exports = mongoose.model("User",userSchema);