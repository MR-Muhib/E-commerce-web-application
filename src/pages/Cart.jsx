import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import CartBanner from "../components/cart/CartBanner";
import CartTotal from "../components/cart/CartTotal";
import NoProduct from "../components/cart/NoProduct";

import ProductInfo from "../components/cart/ProductInfo";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div className="w-full bg-white ">
      <CartBanner />

      <hr></hr>

      <div className=" md:container md:mx-auto md:flex mb-5 ">
        {cart.length === 0 ? <NoProduct /> : <ProductInfo />}

        <CartTotal />
      </div>

      <IntroduceApplication />
    </div>
  );
};

export default Cart;
