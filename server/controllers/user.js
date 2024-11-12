// import { User } from "../models/userModel.js";
// import { createToken } from "../utils/jwt.js";
// export const Login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res.status(401).json({
//           message: "Invalid data",
//           success: false,
//         });
//       }
  
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(401).json({
//           message: "Invalid email or password",
//           success: false,
//         });
//       }
  
//       const passwordMatch = await user.matchPassword(password);
//       if (!passwordMatch) {
//         return res.status(400).send({ message: "Invalid credentials" });
//       }
  
//       const token = createToken({ id: user.id });
//       console.log("Generated Token:", token); // Debugging log
  
//       return res.status(200).cookie("token", token).json({
//         message: `Welcome back ${user.fullName}`,
//         user,
//         success: true,
//       });
  
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
// export const Logout = async (req,res) => {
//     return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()), httpOnly:true}).json({
//         message:"User logged out successfully.",
//         success:true,
//     });
// }

// export const Register = async (req,res) =>{
//     console.log("Register route hit");
//     try {
//         const {fullName, email, password} = req.body;
//         if(!fullName || !email || !password){
//             return res.status(401).json({
//                 message:"Invalid data",
//                 success:false
//             })
//         }
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(401).json({
//                 message:"This email is already used",
//                 success:false,
//             })
//         }

   

//         await User.create({
//             fullName,
//             email,
//             password
//         });

//         return res.status(201).json({
//             message:"Account created successfully.",
//             success:true,
//         })

//     } catch (error) {
//         console.log(error);
//     }
// };


// user.js

import { User } from "../models/userModel.js";
import { createToken } from "../utils/jwt.js";

// export const Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email }).populate('wishlist');
//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = createToken({ id: user.id });
//     return res.status(200).cookie("token", token).json({
//       message: `Welcome back ${user.fullName}`,
//       user,
//       wishlist: user.wishlist,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };


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
  }






// export const addToWishlist = async (req, res) => {
//   try {
//     const { productId } = req.body;
//     const user = await User.findById(req.user.id);

//     if (!user.wishlist.includes(productId)) {
//       user.wishlist.push(productId);
//       await user.save();
//     }

//     res.status(200).json({ message: "Added to wishlist", wishlist: user.wishlist });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const removeFromWishlist = async (req, res) => {
//   try {
//     const { productId } = req.body;
//     const user = await User.findById(req.user.id);

//     user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
//     await user.save();

//     res.status(200).json({ message: "Removed from wishlist", wishlist: user.wishlist });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const getUserWishlist = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).populate('wishlist');
//     res.status(200).json({ wishlist: user.wishlist });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
