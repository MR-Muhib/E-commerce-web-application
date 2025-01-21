import PropTypes from "prop-types";
import { useCartContext } from "../../contexts/CartContext";
import useProduct from "../../services/api/getAllProduct";

const FavoriteProduct = ({ product, onRemove }) => {
  const { name, title, price, image } = product;
  const { handleAddToCart } = useCartContext();
  const { products } = useProduct();
  const findProduct = products.find((p) => p.id === product.id);
  if (!findProduct) return null;
  // console.log(findProduct);

  return (
    <div className="border-gray-500 shadow-md bg-white flex flex-col justify-between h-full">
      <img
        className=" w-auto mx-auto mb-2"
        src={image}
        alt={name || "No Image Available"}
      />
      <div className="p-4">
        <h3 className="text-md md:text-xl mb-3 font-bold">{name}</h3>
        <p className="text-gray-400 text-sm mb-2">{title}</p>
        <span className="text-black text-md md:text-xl">$ {price}</span>
      </div>
      {/* Buttons at the bottom */}
      <div className="px-5 mb-2">
        <button
          onClick={() => onRemove(product.id)}
          className="text-gray-600 py-2 flex items-center justify-center px-5 text-center w-full box-border my-2 border border-gray-300 rounded-md shadow"
        >
          Remove
        </button>
        <button
          onClick={() => handleAddToCart(findProduct)}
          className="text-gray-600 py-2 flex items-center justify-center px-5 text-center w-full box-border my-2 border border-gray-300 rounded-md shadow"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

FavoriteProduct.propTypes = {
  product: PropTypes.object, // PropTypes.shape({ id, name, description, price, image })
  onRemove: PropTypes.func.isRequired, // PropTypes.func(productId) => void
};

export default FavoriteProduct;
