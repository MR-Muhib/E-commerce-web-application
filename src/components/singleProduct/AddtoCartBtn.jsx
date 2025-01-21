// import { useState } from "react";
import Button from "./product/Button";
import { useParams } from "react-router-dom";
import useProduct from "../../services/api/getAllProduct";
import { useCartContext } from "../../contexts/CartContext";

const AddToCartButton = () => {
  // const [count, setCount] = useState(1);
  const { id } = useParams();
  const { products } = useProduct();

  // Find the product by id
  const currentProduct = products.find((p) => p.id === id);

  const {
    handleCountChange,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    count,
  } = useCartContext();

  return (
    <div className="my-5 flex gap-2">
      {/* Quantity Selector */}
      <div className="flex text-xl border border-gray-500 rounded-md">
        <button className="p-2" onClick={() => handleDecrement()}>
          -
        </button>

        <input
          type="number"
          value={count}
          onChange={() => handleCountChange(event)}
          min="1"
          max="100"
          className="border-none outline-none w-full text-center"
        />

        <button className="p-2" onClick={() => handleIncrement()}>
          +
        </button>
      </div>

      {/* Add to Cart Button */}

      <Button onHandleClick={() => handleAddToCart(currentProduct)} />

      {/* Compare Button */}
      <p className="p-2 border-gray-500 border rounded-md">+ Compare</p>
    </div>
  );
};

export default AddToCartButton;
