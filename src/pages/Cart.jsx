import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import CartBanner from "../components/cart/CartBanner";
import CartTotal from "../components/cart/CartTotal";

import ProductInfo from "../components/cart/ProductInfo";

const Cart = () => {
  return (
    <div className="w-full bg-white ">
      <CartBanner />

      <hr></hr>

      <div className=" md:container md:mx-auto md:flex mb-5 ">
        <ProductInfo />
        <CartTotal />
      </div>

      <IntroduceApplication />
    </div>
  );
};

export default Cart;
