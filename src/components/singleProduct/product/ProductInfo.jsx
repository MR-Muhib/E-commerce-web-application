import PropTypes from "prop-types";
import { useState } from "react";

const ProductInfo = ({ product }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <h1 className="text-2xl font-bold uppercase">{product.name}</h1>

      <p className="font-semibold text-xl text-gray-500 py-1">
        Price: ${product.price}
      </p>
      <p className="text-2xl text-yellow-500">* * * *</p>

      <p className="text-justify pb-4">
        {toggle ? product.description : product.description?.slice(0, 100)}
      </p>
      <button
        onClick={() => setToggle(!toggle)}
        className="text-blue-500 hover:text-blue-700 mb-5"
      >
        {toggle ? "Show Less" : "Read More"}
      </button>
    </>
  );
};

// prop-types

ProductInfo.propTypes = {
  product: PropTypes.object,
};

// defaultProps

export default ProductInfo;
