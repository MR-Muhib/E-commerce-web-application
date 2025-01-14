import { useCartContext } from "../contexts/CartContext";

const SubTotalCart = () => {
  const { cart } = useCartContext();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  return subtotal.toFixed(2);
};

export default SubTotalCart;
