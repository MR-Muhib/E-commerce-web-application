import SignNavigate from "../components/user/SignNavigate";

import SignTitle from "../components/user/SignTitle";
import Input from "../components/user/Input";
import Button from "../components/user/Button";
import Remember from "../components/user/Remember";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// using flowbite login form
const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // input validation

  const submitHandler = async (event) => {
    event.preventDefault();
    // const enteredEmail = emailInputRef.current.value;
    // const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      if (res.user) {
        console.log("User logged in successfully", res.user);
      }
      setIsLoading(false);
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <SignTitle title="Sign in your account" />

            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
              <Input
                labelName="Your email"
                types="email"
                pl="name@company.com"
                onHandleChange={handleChange}
                value={user.email}
              />

              <Input
                labelName="Password"
                types="password"
                pl="••••••••"
                onHandleChange={handleChange}
                value={user.password}
              />

              <Remember />

              <Button text="Sign in" />

              <SignNavigate
                title="Don’t have an account yet?"
                navigate="/sign-up"
                text="Sign up"
              />
              {errorMessage && (
                <div className="text-red-500 text-xs italic">
                  {errorMessage}
                </div>
              )}
              {isLoading && (
                <div className="text-center text-gray-500">Signing in...</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
