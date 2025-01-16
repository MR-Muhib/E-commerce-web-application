import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../contexts/CartContext";

const ProductView = ({ product }) => {
  const { deleteHandler } = useCartContext();

  return (
    <>
      <tr className="">
        <td className="">
          <div className="sm:flex  sm:gap-5 my-3 pl-2">
            <img
              className="sm:w-14 w-10"
              src={product.image}
              alt={product.name}
            />
            <span className="text-sm sm:text-md sm:px-4 py-2">
              {product.name}
            </span>
          </div>
        </td>
        <td className="px-5 py-2  text-md text-center ">${product.price}</td>
        <td className="px-4 py-2    text-md text-center ">
          <span className="w-auto px-2 py-1 border border-gray-200 rounded-md">
            {product.count}
          </span>
        </td>

        <div className="flex justify-around gap-5 pt-7">
          <td className="  text-md text-center ">
            {product.price * product.count}
          </td>

          <button
            onClick={() => deleteHandler(product.id)}
            className="mx-2 text-xl pr-2"
          >
            <MdDelete />
          </button>
        </div>
      </tr>
    </>
  );
};

// prop-types
ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
