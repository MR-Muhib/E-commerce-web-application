import { useEffect, useRef, useState } from "react";
// Import react icons
import { LuAlignJustify } from "react-icons/lu";
import NavLinks from "../NavLinks";

import { useAuth } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const NavToggle = () => {
  // State to track toggle
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);

  const navigate = useNavigate();

  // handle logged in and logged out
  const { userLoggedIn } = useAuth();
  const loggedInHandler = () => {
    userLoggedIn ? userLogout() : userLogin();
  };

  const userLogin = () => {
    if (!userLoggedIn) {
      navigate("/sign-in");
    }
  };

  const userLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/sign-in"); // Redirect to login page
      console.log(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setToggle(false); // Close the toggle when clicking outside
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={toggleRef}>
      <div
        className="text-xl mr-5 cursor-pointer float-right pt-4  ease-in-out	  "
        onClick={(e) => {
          e.stopPropagation();
          setToggle(!toggle);
        }}
      >
        <LuAlignJustify />
      </div>

      {/* Conditionally render NavLinks and NavIcons based on toggle state */}
      {toggle && (
        <div className="absolute top-12 right-0 w-[70%] bg-slate-50 shadow-lg z-10 ">
          <NavLinks toggle={toggle} />

          <div className="flex justify-end">
            <button
              onClick={loggedInHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 w-full m-5 rounded-md"
            >
              {userLoggedIn ? "Log Out" : "Sign In"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavToggle;
