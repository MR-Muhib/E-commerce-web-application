// import react icons
import { FaShareAlt } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";
import likeProduct from "../../../utils/likeProduct";
import useProduct from "../../../services/api/getAllProduct";

const compareProducts = [
  {
    id: 1,
    icons: <FaShareAlt />,
    compareName: "Share",
  },
  {
    id: 2,
    icons: <MdCompareArrows />,
    compareName: "Compare",
  },
  {
    id: 3,
    icons: <CiHeart />,
    compareName: "Like",
  },
];

// component to add product to cart and other actions  like share, compare, and like
const AddCardBtn = ({ productId }) => {
  const [color, setColor] = useState("");
  const { products } = useProduct();

  const heartHandleClick = (id) => {
    setColor((prevColor) => (prevColor === "red" ? "white" : "red"));

    try {
      likeProduct(products, id); // Call the updated utility function
    } catch (error) {
      console.error("Error liking the product:", error);
    }
  };

  // re-factoring this handler
  const shareHandleClick = (id) => {
    alert("Share card", id);
  };

  const compareHandleClick = (id) => {
    alert("Compare card", id);
  };

  return (
    <div className="flex items-center justify-center w-full bg-[#646463] ">
      <div className="text-center ">
        {/* Add card button */}
        <Button productId={productId} />

        {/* compare icons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 text-sm mt-4 justify-center">
          {compareProducts.map((compare) => (
            <ProductComponent
              key={compare.id}
              icons={compare.icons}
              compareName={compare.compareName}
              onClick={
                compare.compareName === "Like"
                  ? () => heartHandleClick(productId)
                  : compare.compareName === "Share"
                  ? () => shareHandleClick(productId)
                  : compare.compareName === "Compare"
                  ? () => compareHandleClick(productId)
                  : null
              }
              color={compare.compareName === "Like" ? color : "white"} // Dynamic color
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// prop-types
AddCardBtn.propTypes = {
  productId: PropTypes.string,
};

export default AddCardBtn;

// usage in ProductCard component
const ProductComponent = ({ icons, compareName, onClick, color }) => {
  return (
    <div className="flex items-center gap-1 text-white font-semibold">
      <span className="text-xl" style={{ color: color }}>
        {icons}
      </span>
      <p onClick={onClick} className="text-white text-md cursor-pointer">
        {compareName}
      </p>
    </div>
  );
};

// prop-types
ProductComponent.propTypes = {
  icons: PropTypes.node.isRequired,
  compareName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
