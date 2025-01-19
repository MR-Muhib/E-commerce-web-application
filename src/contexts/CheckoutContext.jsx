import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { createContext, useContext, useState } from "react";
import SubTotalCart from "../utils/SubTotalCart";
import PropTypes from "prop-types";

const CheckoutContext = createContext();

export function useCheckoutContext() {
  return useContext(CheckoutContext);
}

export function CheckoutProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [fildErrors, setFieldErrors] = useState("");
  const subTotal = SubTotalCart();
  const totalPrice = parseInt(subTotal, 10);

  const initialState = {
    fname: "",
    lname: "",
    cname: "",
    crname: "",
    saddress: "",
    tcity: "",
    province: "",
    code: "",
    phone: "",
    email: "",
    additionalInfo: "",
  };

  const [userInfo, setUserInfo] = useState(initialState);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  // Validation function
  const validateInputs = () => {
    const errors = {};

    if (!userInfo.fname.trim()) errors.fname = "First name is required.";
    if (!userInfo.lname.trim()) errors.lname = "Last name is required.";
    if (!userInfo.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      errors.email = "Invalid email format.";
    }
    if (!userInfo.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(userInfo.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!userInfo.saddress.trim())
      errors.saddress = "Street address is required.";
    if (!userInfo.tcity.trim()) errors.tcity = "City is required.";
    if (!userInfo.province.trim()) errors.province = "Province is required.";
    if (!userInfo.code.trim()) {
      errors.code = "Postal/ZIP code is required.";
    } else if (!/^\d{5}(-\d{4})?$/.test(userInfo.code)) {
      errors.code = "Invalid postal/ZIP code format.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!validateInputs()) {
      setErrorMessage("Please fill out all required fields correctly.");
      return;
    }

    if (!totalPrice || isNaN(totalPrice)) {
      setErrorMessage("Invalid total price.");
      return;
    }

    if (elements == null || stripe == null) {
      setErrorMessage("Stripe elements not initialized.");
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      setErrorMessage(submitError.message);
      return;
    }

    const backendUrl = import.meta.env.VITE_STRIPE_BACKEND_URL;
    if (!backendUrl) {
      setErrorMessage("Backend URL not configured.");
      return;
    }

    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currency: "usd", amount: totalPrice * 100 }),
      });

      const { client_secret: clientSecret } = await res.json();

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: { return_url: `${window.location.origin}` },
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        console.log("Payment successful!");
      }
    } catch (err) {
      setErrorMessage("An error occurred during payment processing.", err);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        handleSubmit,
        handleChange,
        PaymentElement,
        userInfo,
        setUserInfo,
        errorMessage,
        fildErrors,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

// prop-types

CheckoutProvider.propTypes = {
  children: PropTypes.node,
};
