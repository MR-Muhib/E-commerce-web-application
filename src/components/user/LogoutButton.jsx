import { auth } from "../../firebase.js"; // Adjust the import path as needed

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // If using React Router

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/sign-in"); // Redirect to login page
      // console.log(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-blue-500 text-white">
      Logout
    </button>
  );
};
export default LogoutButton;
