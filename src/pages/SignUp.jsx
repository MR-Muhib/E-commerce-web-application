import InputSignUp from "../components/user/Input";
import SignNavigate from "../components/user/SignNavigate";
import SignTitle from "../components/user/SignTitle";
import Button from "../components/user/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LogoutButton from "../components/user/LogoutButton";

import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

// Using Flowbite for the signup form
const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setErrorMessage(""); // Clear previous error messages

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      // Get the newly created user's UID from the userCredential
      const userId = userCredential.user.uid;

      // Save user data to Firestore
      await setDoc(doc(db, "users", userId), {
        name: user.name,
        email: user.email,
        role: "user", // You should NOT save the password here
      });

      console.log("User successfully created and saved to Firestore.");
      setLoading(false);
      navigate("/"); // Redirect to the home page
    } catch (error) {
      setErrorMessage(error.message); // Display error message
      setLoading(false); // Stop loading
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <SignTitle title="Create a mew account" />

            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={submitHandler}
            >
              <InputSignUp
                labelName="Your Name"
                types="name"
                pl="John Doe"
                onHandleChange={handleChange}
                value={user.name}
              />

              <InputSignUp
                labelName="Your Email"
                types="email"
                pl="name@gmail.com"
                onHandleChange={handleChange}
                value={user.email}
              />

              <InputSignUp
                labelName="Password"
                types="password"
                pl="••••••••"
                onHandleChange={handleChange}
                value={user.password}
              />
              <Button text="Sign Up" />

              <SignNavigate
                title="Already have an account?"
                navigate="/sign-in"
                text="Sign in"
              />
              <div className="text-center">
                {isLoading && <p>Creating New User</p>}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              </div>
            </form>

            <LogoutButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
