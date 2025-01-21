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
import { isValid } from "../utils/inputValidation";

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

  // input validation
  const inputValidation = isValid({ user });
  // console.log(inputValidation);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setErrorMessage(""); // Clear previous error messages

    try {
      // Check if the form is valid
      if (!inputValidation) {
        setErrorMessage("Please fill out all the required fields.");
        setLoading(false);
        return;
      }

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
        password: user.password,
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
    // reset input fields
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <section className="bg-gray-50  w-full ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-200">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <SignTitle title="Create a mew account" />

            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={submitHandler}
            >
              <div className="">
                <InputSignUp
                  labelName="Your Name"
                  types="name"
                  pl="John Doe"
                  onHandleChange={handleChange}
                  value={user.name}
                  required={true}
                />
                {user.name === "" ? (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                ) : (
                  <p style={{ color: "red" }}></p>
                )}
              </div>

              <div className="">
                <InputSignUp
                  labelName="Your Email"
                  types="email"
                  pl="name@gmail.com"
                  onHandleChange={handleChange}
                  value={user.email}
                />
                {user.email === "" ? (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                ) : (
                  <p style={{ color: "red" }}></p>
                )}
              </div>

              <div className="">
                <InputSignUp
                  labelName="Password"
                  types="password"
                  pl="••••••••"
                  onHandleChange={handleChange}
                  value={user.password}
                />
                {user.password === "" ? (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                ) : (
                  <p style={{ color: "red" }}></p>
                )}
              </div>
              {isLoading ? (
                <Button text="Creating Account..." disabled />
              ) : (
                <Button text="Sign Up" />
              )}

              <SignNavigate
                title="Already have an account?"
                navigate="/sign-in"
                text="Sign in"
              />
            </form>

            <LogoutButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
