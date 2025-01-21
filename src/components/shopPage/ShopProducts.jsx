import ProductCard from "./ProductCard.jsx";
import AddCardBtn from "./add-to-card/AddCardBtn.jsx";
import useProduct from "../../services/api/getAllProduct.js";

const ShopProducts = () => {
  const { products, loading, error } = useProduct();

  if (loading) return <div className="">loading....</div>;
  if (error) return <div>Error loading data.</div>;

  return (
    <div className="container px-4 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group  shadow-md bg-[#f4f5f7] hover:shadow-lg transition ease-in-out"
        >
          {/* Product  card */}
          <ProductCard product={product} />

          {/* Add to Cart Button (Hidden by Default) */}
          <div className="absolute w-full flex h-full top-0 left-0 opacity-0 group-hover:opacity-90 transition ease-in-out duration-300">
            <AddCardBtn productId={product.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
