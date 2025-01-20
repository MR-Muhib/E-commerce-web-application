import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <div>
      <img
        src={image}
        alt={name || "Product image"}
        width={200}
        height={150}
        className="object-cover w-full h-40 p-5"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{name || "Unnamed Product"}</h2>
        <p className="text-gray-500">
          {description?.slice(0, 30) || "No description available."}
        </p>
        <p className="text-black font-semibold mt-2">Price: ${price}</p>
      </div>
    </div>
  );
};
// prop-types

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  rate: PropTypes.number,
  image: PropTypes.string,
};

export default ProductCard;
