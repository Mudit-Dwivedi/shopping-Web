

// const express = require("express");
// const router  = express.Router();

// const {login, signup} = require("../controllers/Auth.js");
// const {auth} = require("../middlewares/auth");

// router.post("/login", login);
// router.post("/Signup", signup);

// router.get("/test", auth , (req,res) => {
//     res.json({
//         success:true,
//         message:"welcome to protected Test",
//     });
// });

// router.get("/student", auth ,isStudent, (req,res) =>{
//     res.json({
//         success:true,
//         message:"Welcome to Protected route for Student",
//     });
// });

// router.get("/Admin", auth, isAdmin, (req,res) =>{
//     res.json({
//         success:true,
//         message:'Welcome to Protected route for Admin',
//     });
// });


//module.exports = router;


import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";


const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;
 