import PropTypes from "prop-types";
import { createContext, useState, useCallback, useContext } from "react";

// Create the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export function useCartContext() {
  return useContext(CartContext);
}

// CartProvider component
const CartProvider = ({ children }) => {
  const [count, setCount] = useState(1); // State for managing count

  // State to manage cart items, initialized from sessionStorage
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = sessionStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Delete a product from the cart
  const deleteHandler = useCallback((id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  // increment handler
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  // decrement handler
  const handleDecrement = useCallback(() => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }, []);

  // Handle changes to the count input
  const handleCountChange = useCallback((event) => {
    const value = parseInt(event.target.value, 10); // Specify the radix for safety
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setCount(value);
    } else {
      console.error(
        "Invalid count input. Please enter a number between 1 and 100."
      );
    }
  }, []);

  // Add a product to the cart
  const handleAddToCart = useCallback(
    (currentProduct) => {
      const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];
      const productIndex = existingCart.findIndex(
        (cartItem) => cartItem.id === currentProduct.id
      );
      const newProduct = { ...currentProduct, count };

      if (productIndex !== -1) {
        existingCart[productIndex].count += newProduct.count;
      } else {
        existingCart.push(newProduct);
      }

      // Synchronize with sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(existingCart));
      return existingCart;
    },
    [count] // Dependency on count
  );

  // Context value
  const value = {
    cart,
    count,
    deleteHandler,
    handleAddToCart,
    handleCountChange,
    handleIncrement,
    handleDecrement,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartProvider;

// prop-types
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
