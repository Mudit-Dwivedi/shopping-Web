import { User } from "../models/userModel.js";
import { createToken } from "../utils/jwt.js";
export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(401).json({
          message: "Invalid data",
          success: false,
        });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          message: "Invalid email or password",
          success: false,
        });
      }
  
      const passwordMatch = await user.matchPassword(password);
      if (!passwordMatch) {
        return res.status(400).send({ message: "Invalid credentials" });
      }
  
      const token = createToken({ id: user.id });
      console.log("Generated Token:", token); // Debugging log
  
      return res.status(200).cookie("token", token).json({
        message: `Welcome back ${user.fullName}`,
        user,
        success: true,
      });
  
    } catch (error) {
      console.log(error);
    }
  };
  
export const Logout = async (req,res) => {
    return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()), httpOnly:true}).json({
        message:"User logged out successfully.",
        success:true,
    });
}

export const Register = async (req,res) =>{
    console.log("Register route hit");
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

   

        await User.create({
            fullName,
            email,
            password
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
};