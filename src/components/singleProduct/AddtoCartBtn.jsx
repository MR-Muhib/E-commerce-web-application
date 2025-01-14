import { useState } from "react";
import Button from "./product/Button";
import { useParams } from "react-router-dom";
import useProduct from "../../services/api/getAllProduct";

const AddToCartButton = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const { products, loading, error } = useProduct();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;

  // Find the product by id
  const currentProduct = products.find((p) => p.id === id);

  const handleAddToCart = async () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newProduct = { ...currentProduct, count };
    const productIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === newProduct.id
    );

    if (productIndex !== -1) {
      existingCart[productIndex].count += newProduct.count;
    } else {
      existingCart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  // Ensure valid count input
  const handleCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setCount(value);
    }
  };

  return (
    <div className="my-5 flex gap-2">
      {/* Quantity Selector */}
      <div className="flex text-xl border border-gray-500 rounded-md">
        <button
          className="p-2"
          onClick={() => setCount(count - 1)}
          disabled={count <= 1}
        >
          -
        </button>

        <input
          type="number"
          value={count}
          onChange={handleCountChange}
          min="1"
          max="100"
          className="border-none outline-none w-full text-center"
        />

        <button className="p-2" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button onHandleClick={handleAddToCart} />

      {/* Compare Button */}
      <p className="p-2 border-gray-500 border rounded-md">+ Compare</p>
    </div>
  );
};

export default AddToCartButton;
