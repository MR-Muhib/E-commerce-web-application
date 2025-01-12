import { useState } from "react";

const AddToCartButton = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="my-5 flex gap-2">
      <div className="flex  text-xl border border-gray-500 rounded-md">
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
          onChange={(e) => setCount(parseInt(e.target.value))}
          min="1"
          max="100"
          className="border-none outline-none w-full text-center"
        />

        <button className="p-2" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      <button className="p-2 border-gray-500 border rounded-md">
        Add To Cart
      </button>

      <p className="p-2 border-gray-500 border rounded-md">+ Compare</p>
    </div>
  );
};

export default AddToCartButton;
