import PropTypes from "prop-types";
import useProduct from "../../../services/api/getAllProduct";
import { useCartContext } from "../../../contexts/CartContext"; // Import the custom hook

const Button = ({ productId }) => {
  const products = useProduct().products;
  const currentProduct = products.find((product) => product.id === productId);

  // Use the custom hook to access handleAddToCart from CartContext
  const { handleAddToCart } = useCartContext();

  return (
    <button
      onClick={() => handleAddToCart(currentProduct)}
      className="px-8 py-2 bg-white text-[#c6a356]"
    >
      Add to Cart
    </button>
  );
};

// prop-types
Button.propTypes = {
  productId: PropTypes.string.isRequired,
};

// default export
export default Button;
