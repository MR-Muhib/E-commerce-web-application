import ProductDetails from "./form/ProductDetails";
import UserForm from "./form/UserForm";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutProvider } from "../../contexts/CheckoutContext";

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",

  appearance: {
    /*...*/
  },
};

const OrderForm = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  console.log(stripePromise);

  return (
    <div className="container mx-auto md:grid grid-cols-2 gap-5">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutProvider>
          <UserForm />
          <ProductDetails />
        </CheckoutProvider>
      </Elements>
    </div>
  );
};

export default OrderForm;
