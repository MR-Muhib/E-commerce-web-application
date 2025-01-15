import CheckoutBanner from "../components/checkout/CheckoutBanner";
import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import OrderForm from "../components/checkout/OrderForm";

const Checkout = () => {
  return (
    <div>
      <div className="">
        <CheckoutBanner />

        <OrderForm />

        <IntroduceApplication />
      </div>
    </div>
  );
};

export default Checkout;
