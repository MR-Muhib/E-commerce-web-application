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
  // State to manage cart items
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Add or update a product in the cart
  // const addToCart = useCallback((newProduct) => {
  //   setCart((prevCart) => {
  //     const existingProductIndex = prevCart.findIndex(
  //       (item) => item.id === newProduct.id
  //     );

  //     let updatedCart;
  //     if (existingProductIndex !== -1) {
  //       // If product exists, update its count
  //       updatedCart = [...prevCart];
  //       updatedCart[existingProductIndex].count += newProduct.count;
  //     } else {
  //       // If product doesn't exist, add it to the cart
  //       updatedCart = [...prevCart, newProduct];
  //     }

  //     // Save the updated cart to localStorage
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     return updatedCart;
  //   });
  // }, []);

  // Delete a product from the cart
  const deleteHandler = useCallback((id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  // Context value
  const value = {
    cart,
    // addToCart,
    deleteHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider };

// prop-types
CartProvider.propTypes = {
  children: PropTypes.node,
};
