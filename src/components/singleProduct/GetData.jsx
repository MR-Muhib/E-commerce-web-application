import ProductSizeBtn from "./product/ProductSizeBtn";
import ProductInfo from "./product/ProductInfo";
import ProductColor from "./product/ProductColor";
import AddToCartButton from "./AddtoCartBtn";
import SocialMedia from "./product/SocialMedia";
import PropTypes from "prop-types";

const GetData = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; // Handle undefined product gracefully.
  }

  return (
    // <div className="flex w-[50%]"></div>
    <div className="">
      <div className="container mx-auto p-2 ">
        <ProductInfo product={product} />

        {/* Product size  */}
        <ProductSizeBtn />

        {/* Add color buttons */}
        <ProductColor />

        {/* add to cart button */}
        <AddToCartButton />

        {/* social media icons */}
        <SocialMedia />
      </div>
    </div>
  );
};

// prop-types

GetData.propTypes = {
  product: PropTypes.object.isRequired,
};

export default GetData;
