import PropTypes from "prop-types";
import ProductView from "./ProductView";
import { useCartContext } from "../../contexts/CartContext";
const ProductInfo = () => {
  const { cart } = useCartContext();
  const products = cart;

  return (
    <div className="container mx-auto ">
      <table className="table-auto w-full  my-8 border-collapse ">
        <thead>
          <tr className="bg-common py-4 font-serif">
            <th className="">Product Name</th>
            <th className="">Price</th>
            <th className="">Quantity</th>
            <th className="">Subtotal</th>
          </tr>
        </thead>

        <tbody className="">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductView product={product} key={product.id} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No product found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
// prop-types
ProductInfo.propTypes = {
  orderProduct: PropTypes.array,
};

export default ProductInfo;
