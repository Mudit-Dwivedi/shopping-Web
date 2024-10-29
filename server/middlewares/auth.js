

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) =>{
    try{

console.log("cookie", req.cookies.token);
console.log("body", req.body.token);

     const token = req.body.token || req.cookies.token || req.header("Authorization").replace("bearer", "");

     if(!token || token === undefined){
        return res.status(400).json({
            success:false,
            message:"Token Missing"
        });
     }

    //  verify Token 
    try{
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      req.user =  payload;
    } catch(err){
      return res.status(400).json({
        success:false,
        message:'token is invalid'
       });
    }
 next();
    } catch(err){
    return res.status(500).json({
        success:false,
        message:"Something went Wrong While Fetching Token"
     });
    }
}

// exports.isStudent = (req,res,next) => {
//     try{
//         if(req.user.role !== "Student"){
//             return res.status(401).json({
//                 success:false,
//                 message:"This is a Protected Route for Students"
//             })
//         }
//         next();
//     } catch(err){
//      return res.status(500).json({
//         success:false,
//         message:"User role is not matched"
//      })
//     }
// }

// exports.isAdmin = (req,res,next) =>{
//     try{
//       if(req.user.role !== 'Admin'){
//         return res.status(401).json({
//             success:false,
//             message:"This is a Protected route for Admin "
//         });
//       }
//       next();
//     } catch(err){
//      return res.status(500).json({
//         success:false,
//         message:"user Role is not matching"
//      })
//     }
// }