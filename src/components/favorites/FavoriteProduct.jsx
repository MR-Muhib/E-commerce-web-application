import PropTypes from "prop-types";

const FavoriteProduct = ({ product }) => {
  const { name, description, price, image } = product;
  return (
    <div className=" border-gray-500 hover:shadow-md bg-white shadow-sm">
      <img
        className="h-20 w-auto mx-auto my-2"
        src={image}
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

      <button className="text-gray-600 py-2 flex items-center justify-center px-5 text-center w-full box-border my-5  border border-gray-300 rounded-md shadow">
        Remove
      </button>
    </div>
  );
};

FavoriteProduct.propTypes = {
  product: PropTypes.object, // PropTypes.shape({ id, name, description, price, image })
};

export default FavoriteProduct;
