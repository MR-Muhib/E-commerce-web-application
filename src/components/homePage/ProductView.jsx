import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductView = ({ product }) => {
  const { name, price, image, title } = product;
  // console.log(product.product.name);

  return (
    <div className=" border-gray-200 hover:shadow-md bg-[#f4f5f7]">
      <Link to={`/single-product/${product.id}`}>
        <img src={image} alt={name || "No Image Available"} />
        <div className="p-4">
          <h3 className="text-md md:text-xl mb-1 font-bold">{name}</h3>
          <h3 className=" text-md mb-1 text-gray-400">{title}</h3>

          <span className="text-black font-semibold  md:text-md">
            $ {price}
          </span>
        </div>
      </Link>
    </div>
  );
};
// prop-types
ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
