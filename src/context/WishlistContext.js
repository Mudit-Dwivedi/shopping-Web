// import React, { createContext, useState, useContext, useEffect } from 'react';

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   // Initialize wishlist from localStorage
//   const [wishlist, setWishlist] = useState(() => {
//     const storedWishlist = localStorage.getItem('wishlist');
//     return storedWishlist ? JSON.parse(storedWishlist) : [];
//   });

//   // Function to add or remove an item from the wishlist
//   const addToWishlist = (item) => {
//     setWishlist((prevWishlist) => {
//       const isItemInWishlist = prevWishlist.some((product) => product.id === item.id);
//       const updatedWishlist = isItemInWishlist
//         ? prevWishlist.filter((product) => product.id !== item.id)
//         : [...prevWishlist, item];

//       // Save updated wishlist to localStorage
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = (productId) => {
//     setWishlist((prevWishlist) => {
//       const updatedWishlist = prevWishlist.filter(product => product.id !== productId);

//       // Save updated wishlist to localStorage
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   useEffect(() => {
//     // Save wishlist to localStorage whenever it changes
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
//   }, [wishlist]);

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);



// // context/WishlistContext.jsx
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   // Initialize wishlist from localStorage
//   const [wishlist, setWishlist] = useState(() => {
//     const storedWishlist = localStorage.getItem('wishlist');
//     return storedWishlist ? JSON.parse(storedWishlist) : [];
//   });

//   // Function to add or remove an item from the wishlist
//   const addToWishlist = (item) => {
//     setWishlist((prevWishlist) => {
//       const isItemInWishlist = prevWishlist.some((product) => product.id === item.id);
//       const updatedWishlist = isItemInWishlist
//         ? prevWishlist.filter((product) => product.id !== item.id)
//         : [...prevWishlist, item];

//       // Save updated wishlist to localStorage
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = (productId) => {
//     setWishlist((prevWishlist) => {
//       const updatedWishlist = prevWishlist.filter((product) => product.id !== productId);

//       // Save updated wishlist to localStorage
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   const clearWishlist = () => {
//     setWishlist([]); // Reset wishlist state to an empty array
//     localStorage.removeItem('wishlist');
//   }

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist,clearWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };



// context/WishlistContext.jsx
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

//   // Load wishlist from localStorage for the current user
//   useEffect(() => {
//     if (userId) {
//       const storedWishlist = localStorage.getItem(`wishlist_${userId}`);
//       setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
//     }
//   }, [userId]);

//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     if (userId) {
//       localStorage.setItem(`wishlist_${userId}`, JSON.stringify(wishlist));
//     }
//   }, [wishlist, userId]);

//   // Function to add or remove an item from the wishlist
//   const addToWishlist = (item) => {
//     setWishlist((prevWishlist) => {
//       const isItemInWishlist = prevWishlist.some((product) => product.id === item.id);
//       const updatedWishlist = isItemInWishlist
//         ? prevWishlist.filter((product) => product.id !== item.id)
//         : [...prevWishlist, item];

//       return updatedWishlist;
//     });
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = (productId) => {
//     setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
//   };

//   // Clear wishlist when user logs out
//   const clearWishlist = () => {
//     setWishlist([]);
//     if (userId) {
//       localStorage.removeItem(`wishlist_${userId}`);
//     }
//   };

//   // Function to set user ID when logging in
//   const setUser = (id) => {
//     setUserId(id);
//     localStorage.setItem('userId', id);
//   };

//   // Function to clear user data when logging out
//   const clearUser = () => {
//     setUserId('');
//     localStorage.removeItem('userId');
//     clearWishlist();
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         addToWishlist,
//         removeFromWishlist,
//         clearWishlist,
//         setUser,
//         clearUser,
//         isLoggedIn: !!userId,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };




import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  //   const [wishlist, setWishlist] = useState([]);
 const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  // Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Function to add or remove an item from the wishlist
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const isItemInWishlist = prevWishlist.some((product) => product.id === item.id);
      const updatedWishlist = isItemInWishlist
        ? prevWishlist.filter((product) => product.id !== item.id)
        : [...prevWishlist, item];

      // Save updated wishlist to localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };


    // Clear wishlist when user logs out
  const clearWishlist = () => {
    setWishlist([]);
    if (userId) {
      localStorage.removeItem(`wishlist_${userId}`);
    }
  };

 // Function to clear user data when logging out
  const clearUser = () => {
    setUserId('');
    localStorage.removeItem('userId');
    clearWishlist();
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter(product => product.id !== productId);

      // Save updated wishlist to localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  useEffect(() => {
    // Save wishlist to localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist ,clearUser}}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);