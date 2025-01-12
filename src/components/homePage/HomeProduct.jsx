import ProductView from "./ProductView";
import useProduct from "../../services/api/getAllProduct";

export default function HomeProducts() {
  const { products, loading, error } = useProduct();

  if (loading) return <div className="">loading....</div>;
  if (error) return <div>Error loading data.</div>;

  return (
    <div className=" bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
        Our Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 px-4">
        {products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
