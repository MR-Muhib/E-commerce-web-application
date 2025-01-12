import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

const ProductView = ({ product }) => {
  const { name, description, price } = product;
  const { userLoggedIn } = useAuth();
  return (
    <div className=" border-gray-200 hover:shadow-md bg-[#f4f5f7]">
      <Link
        to={
          (`/single-product/${product.id}`,
          userLoggedIn ? `/single-product/${product.id}` : "/sign-in")
        }
      >
        <img
          src="https://img-new.cgtrader.com/items/2987022/ad162c5369/large/chear-folding-chair-3d-model-ad162c5369.jpg"
          alt={name || "No Image Available"}
        />
        <div className="p-4">
          <h3 className="text-sm md:text-md mb-3 font-bold">{name}</h3>
          <p className="text-gray-400 text-sm mb-2">
            {description.slice(0, 20)}
            <br /> view more..
          </p>
          <span className="text-gray-600 text-sm md:text-md">$ {price}</span>
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
