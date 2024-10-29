
const bcrypt =  require("bcrypt");
const User  = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//signup route handler
exports.signup = async(req,res) =>{
    try{
        //get data
        const {name,email,password} =req.body;
        //check if user alreadyu exist
        const existingUser = await User.findOne({email});
        if(existingUser ){
            return res.status(400).json({
                success:false,
                message:'user already Exists'
            });
        }
//secure Password
    let hashedPassword;
    try{
        hashedPassword =  await bcrypt.hash(password,10);
    }
          catch(err){
            return res.status(500).json({
                success:false,
                message: 'error in hashing Password'
            });
          }

          //create entry for user
          const user = await User.create({
            name,email,password:hashedPassword
          })
         return res.status(200).json({
         success:true,
         message:'User Created Successfully'
         });

    }
    catch(error){
           return res.status(500).json({
            success:false,
            message:'User cannot be registered'
           }); 
    }
} 


//login

exports.login = async (req,res) => {
   try{

    const {email,password} = req.body;

    if(!email || !password){
        //validation of email and password
      return  res.status(400).json({
            success:false,
            message:'Please fill all detail Successfully'
        });
    }
    //check for registered user
     const user  = await User.findOne({email});
       
       //if not register
       if(!user){
       return res.status(401).json({
        success:false,
        message:'User is not Register'
       });
       }

         const payload = {
            email:user.email,
            id:user._id,
              };

 // verify password & generate a JWT token 
       if(await bcrypt.compare(password, user.password)){
          // password match
          let token = jwt.sign(payload,
             process.env.JWT_SECRET,
             {
            expiresIn:"2hr",
          });
          //user obj ke andar pass kr rahe h 
      
        //  user = user.toObject();
          user.token = token;
          user.password = undefined;

          const options =  {
          expires: new Date( Date.now() + 3*24*60*60*1000),
          //user side nhi dikhega
          httpOnly:true,
          }

          res.cookie("MuditCookie",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"User Logged in successfull"
          });

//  body
          // res.status(200).json({
          //   success:true,
          //   token,
          //   user,
          //   message:"User Logged in successfull"
          // });
        //   const decodeToken = jwt.decode(token);
        //   console.log('Decoded Token:' , decodeToken);
        }

       else{
        return res.status(403).json({
            success:false,
            message:'Password Incorrect'
        });
       }
   }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Login Failed"
        })
    }

}