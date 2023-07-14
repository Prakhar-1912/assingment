import React ,{useState} from "react";
import bellicon from "../assests/bellicon.png";
import usericon from "../assests/usericon.png";

import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

// const Header = () => {
//   const { user, logOut } = UserAuth();
  
//   const handleSignOut = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-between flex-wrap">
//       <div>
//         <p className="text-2xl m-2 font-bold">Dashboard</p>
//       </div>
//       <div className="flex">
//         <input
//           className="m-2 p-2 border border-white rounded-full"
//           type="text"
//           placeholder="Search..."
//         />
      
//         <img className="h-6 w-6 m-3" alt="Bell-icon" src={bellicon} />
//         <img className="h-6 w-6 m-3" alt="user-icon" src={usericon} />
//         {user?.displayName ? (
//           <button onClick={handleSignOut}>
//             <Link to="/">logOut</Link>
//           </button>
//         ) : (
//           <button className="m-2 p-2 bg-slate-400 rounded-lg">
//             <Link to="/">Sign In</Link>{" "}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  const { user, logOut } = UserAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between flex-wrap">
      <div className="p-2">
        <p className="text-2xl font-bold items-center">Dashboard</p>
      </div>
      <div className="relative">
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
        <input
          className="m-2 p-2 border border-white rounded-full"
          type="text"
          placeholder="Search..."
        />
        <img className="h-6 w-6 m-3" alt="Bell-icon" src={bellicon} />
          <img className="h-6 w-6 m-3" alt="user-icon" src={usericon} />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
            {user?.displayName ? (
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                <Link to="/">Log Out</Link>
              </button>
            ) : (
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                <Link to="/">Sign In</Link>{" "}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;