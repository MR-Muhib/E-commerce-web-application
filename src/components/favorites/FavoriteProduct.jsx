import PropTypes from "prop-types";

const FavoriteProduct = ({ product }) => {
  const { name, description, price, image } = product;
  const products = JSON.parse(localStorage.getItem("likeProduct")) || [];

  const handleRemove = (id) => {
    const filterProduct = products.filter((p) => p.id !== id);
    localStorage.setItem("likeProduct", JSON.stringify(filterProduct));
  };

  return (
    <div className=" border-gray-500 shadow-md bg-white p-5">
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

      <button
        onClick={() => handleRemove(product.id)}
        className="text-gray-600 py-2 flex items-center justify-center px-5 text-center w-full box-border my-2  border border-gray-300 rounded-md shadow"
      >
        Remove
      </button>
    </div>
  );
};

FavoriteProduct.propTypes = {
  product: PropTypes.object, // PropTypes.shape({ id, name, description, price, image })
};

export default FavoriteProduct;
