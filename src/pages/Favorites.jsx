import { useEffect, useState } from "react";
import FavoriteProduct from "../components/favorites/FavoriteProduct";
import NoFavorites from "../components/favorites/NoFavorites";

const Favorites = () => {
  const [likeProducts, setLikeProducts] = useState([]);
  const findProduct = likeProducts.length > 0;

  useEffect(() => {
    const existingProducts =
      JSON.parse(localStorage.getItem("likeProduct")) || [];
    setLikeProducts(existingProducts);
  }, []);

  const handleRemove = (id) => {
    const updatedProducts = likeProducts.filter((product) => product.id !== id);
    setLikeProducts(updatedProducts);
    localStorage.setItem("likeProduct", JSON.stringify(updatedProducts));
  };

  return (
    <div className="w-full ">
      <h1 className="text-2xl font-bold text-center mt-5 text-[#b88e2f]">
        Favorite Products
      </h1>
      <div className="container mx-auto p-5 my-5">
        {findProduct ? (
          <div className="grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {likeProducts.map((product) => (
              <FavoriteProduct
                key={product.id}
                product={product}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <NoFavorites />
        )}
      </div>
    </div>
  );
};

export default Favorites;
