import SignNavigate from "../components/user/SignNavigate";

import SignTitle from "../components/user/SignTitle";
import Input from "../components/user/Input";
import Button from "../components/user/Button";
import Remember from "../components/user/Remember";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { isValid } from "../utils/inputValidation";
import { toast } from "react-toastify";

// using flowbite login form
const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // input  validation
  const inputValidation = isValid({ user });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // existing email validation
  const existingEmail = async (email) => {
    try {
      const user = await auth.fetchSignInMethodsForEmail(email);
      if (user.length > 0) {
        setErrorMessage("Email already exists.");
        setIsLoading(false);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // existing email validation
      if (!existingEmail) {
        setErrorMessage("Email does not exist.");
        setIsLoading(false);
        return;
      }

      // Check if the form is valid
      if (!inputValidation) {
        setErrorMessage("Please fill out all the required fields.");
        setIsLoading(false);
        return;
      }

      await signInWithEmailAndPassword(auth, user.email, user.password);

      setIsLoading(false);
      setErrorMessage("");
      // add success toast

      toast.success("Logged In successfully..", {
        position: "top-right",
      });

      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <SignTitle title="Sign in your account" />

            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
              <div className="">
                <Input
                  labelName="Your email"
                  types="email"
                  pl="name@company.com"
                  onHandleChange={handleChange}
                  value={user.email}
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>

              <div className="">
                <Input
                  labelName="Password"
                  types="password"
                  pl="••••••••"
                  onHandleChange={handleChange}
                  value={user.password}
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>

              <Remember />
              {isLoading ? (
                <Button text="Signing in..." disabled />
              ) : (
                <Button text="Sign in" />
              )}

              <SignNavigate
                title="Don’t have an account yet?"
                navigate="/sign-up"
                text="Sign up"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
