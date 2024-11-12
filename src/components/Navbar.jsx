// import {FaShoppingCart} from "react-icons/fa"
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {

//   const {cart} = useSelector((state) => state);

//   return (
//     <div >
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

//         <NavLink to="/">
//           <div className="ml-5">
//           <img src="../logo.png" className="h-14"/>
//           </div>
//         </NavLink>

//           <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//             <NavLink to="/">
//               <p>Home</p>
//             </NavLink>

//             <NavLink to="/cart">
//               <div className="relative">
//                   <FaShoppingCart className="text-2xl"/>
//                   {
//                     cart.length > 0 &&
//                     <span
//                     className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                     justify-center items-center animate-bounce rounded-full text-white" 
//                     >{cart.length}</span>
//                   }
                  
//               </div>
//             </NavLink>

            
//             <NavLink to="/signup">
//               <p>Signup</p>
//             </NavLink>
            
//           </div>
//       </nav>
//     </div>
//   )
// };

// export default Navbar;

// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const { cart } = useSelector((state) => state);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Check if auth token or login cookie exists to determine login status
//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const authToken = localStorage.getItem("authToken");
//       const loginCookie = document.cookie.includes("authCookie"); // Adjust "authCookie" to your cookie name
//       setIsLoggedIn(!!authToken || loginCookie);
//     };

//     // Run initially on mount and whenever login status changes
//     checkLoginStatus();

//     // Listen for storage changes to handle cases where login status changes
//     window.addEventListener("storage", checkLoginStatus);

//     return () => {
//       window.removeEventListener("storage", checkLoginStatus);
//     };
//   }, []);

//   const handleLogout = () => {
//     // Remove auth token and update state
//     localStorage.removeItem("authToken");
//     document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear the cookie
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
//         <NavLink to="/">
//           <div className="ml-5">
//             <img src="../logo.png" className="h-14" alt="Logo" />
//           </div>
//         </NavLink>

//         <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//           <NavLink to="/">
//             <p>Home</p>
//           </NavLink>

//           <NavLink to="/cart">
//             <div className="relative">
//               <FaShoppingCart className="text-2xl" />
//               {cart.length > 0 && (
//                 <span
//                   className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                   justify-center items-center animate-bounce rounded-full text-white"
//                 >
//                   {cart.length}
//                 </span>
//               )}
//             </div>
//           </NavLink>

//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="text-red-500">
//               Logout
//             </button>
//           ) : (
//             <NavLink to="/signup">
//               <p>Signup</p>
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const { cart } = useSelector((state) => state);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially false
//   const navigate = useNavigate();

//   // Check login status on component mount
//   useEffect(() => {
//     const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(storedLoginStatus); // Set initial login status
//   }, []);

//   // Function to handle login (just for demonstration purposes)
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     navigate("/"); // Redirect to home after logging out
//   };

//   return (
//     <div>
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
//         <NavLink to="/">
//           <div className="ml-5">
//             <img src="../logo.png" className="h-14" alt="Logo" />
//           </div>
//         </NavLink>

//         <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//           <NavLink to="/">
//             <p>Home</p>
//           </NavLink>

//           <NavLink to="/cart">
//             <div className="relative">
//               <FaShoppingCart className="text-2xl" />
//               {cart.length > 0 && (
//                 <span
//                   className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                   justify-center items-center animate-bounce rounded-full text-white"
//                 >
//                   {cart.length}
//                 </span>
//               )}
//             </div>
//           </NavLink>

//           {/* Toggle between Signup and Logout based on login status */}
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="text-red-500">
//               Logout
//             </button>
//           ) : (
//             <NavLink to="/signup">
//               <p>Signup</p>
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;








// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const { cart } = useSelector((state) => state);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Function to check login status
//   const checkLoginStatus = () => {
//     const authToken = localStorage.getItem("authToken");
//     const loginCookie = document.cookie.includes("authCookie"); // Adjust "authCookie" to your cookie name
//     setIsLoggedIn(!!authToken || loginCookie);
//   };

//   // Check login status on mount
//   useEffect(() => {
//     checkLoginStatus();

//     // Listen for storage changes from other tabs
//     window.addEventListener("storage", checkLoginStatus);

//     return () => {
//       window.removeEventListener("storage", checkLoginStatus);
//     };
//   }, []);

//   const handleLogout = () => {
//     // Remove auth token and clear cookie
//     localStorage.removeItem("authToken");
//     document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     setIsLoggedIn(false); // Update local state
//     navigate("/login");
//   };

//   return (
//     <div>
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
//         <NavLink to="/">
//           <div className="ml-5">
//             <img src="../logo.png" className="h-14" alt="Logo" />
//           </div>
//         </NavLink>

//         <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//           <NavLink to="/">
//             <p>Home</p>
//           </NavLink>

//           <NavLink to="/cart">
//             <div className="relative">
//               <FaShoppingCart className="text-2xl" />
//               {cart.length > 0 && (
//                 <span
//                   className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                   justify-center items-center animate-bounce rounded-full text-white"
//                 >
//                   {cart.length}
//                 </span>
//               )}
//             </div>
//           </NavLink>

//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="text-red-500">
//               Logout
//             </button>
//           ) : (
//             <NavLink to="/signup">
//               <p>Signup</p>
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useWishlist } from "../context/WishlistContext";

// const Navbar = () => {
//   const { cart } = useSelector((state) => state);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { clearWishlist } = useWishlist(); // Import clearWishlist

//   // Function to check login status
//   const checkLoginStatus = () => {
//     const authToken = localStorage.getItem("authToken");
//     const loginCookie = document.cookie.includes("authCookie"); // Adjust "authCookie" to your cookie name
//     setIsLoggedIn(!!authToken || loginCookie);
//   };

//   // Check login status on mount and when location changes
//   useEffect(() => {
//     checkLoginStatus();

//     // Listen for storage changes from other tabs
//     window.addEventListener("storage", checkLoginStatus);

//     return () => {
//       window.removeEventListener("storage", checkLoginStatus);
//     };
//   }, [location]);

//   const handleLogout = () => {
//     // Remove auth token and clear cookie
//     localStorage.removeItem("authToken");
    
//     document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     //clearWishlist();
//     setIsLoggedIn(false); // Update local state
//     navigate("/login");

    
//   };

//   return (
//     <div>
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
//         <NavLink to="/">
//           <div className="ml-5">
//             <img src="../logo.png" className="h-14" alt="Logo" />
//           </div>
//         </NavLink>

//         <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//           <NavLink to="/">
//             <p>Home</p>
//           </NavLink>

//           <NavLink to="/cart">
//             <div className="relative">
//               <FaShoppingCart className="text-2xl" />
//               {cart.length > 0 && (
//                 <span
//                   className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                   justify-center items-center animate-bounce rounded-full text-white"
//                 >
//                   {cart.length}
//                 </span>
//               )}
//             </div>
//           </NavLink>

//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="text-red-500">
//               Logout
//             </button>
//           ) : (
//             <NavLink to="/signup">
//               <p>Signup</p>
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;






import { useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { clearCart } from "../redux/Slices/CartSlice"; // Make sure the path is correct

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { clearUser, setUser, isLoggedIn: wishlistLoggedIn } = useWishlist();

  // Function to check login status and load the wishlist if the user is logged in
  const checkLoginStatus = () => {
    const authToken = localStorage.getItem("authToken");
    const loginCookie = document.cookie.includes("authCookie");
    const loggedIn = !!authToken || loginCookie;

    if (loggedIn) {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUser(storedUserId); // Load wishlist for the user
      }
    }

    setIsLoggedIn(loggedIn);
  };

  // Check login status on mount and when location changes
  useEffect(() => {
    checkLoginStatus();

    // Listen for storage changes from other tabs
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, [location]);

  const handleLogout = () => {
    // Remove auth token and clear cookie
    localStorage.removeItem("authToken");
    document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Clear user data and wishlist
    clearUser(); // This will also clear the wishlist immediately
    dispatch(clearCart()); // Clear the cart
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" alt="Logo" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          
          <NavLink to="/wishlist">
            <p>wishlist</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          ) : (
            <NavLink to="/signup">
              <p>Signup</p>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
