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
      <div className="container mx-auto p-5 my-5">
        {findProduct ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-5 px-4">
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
