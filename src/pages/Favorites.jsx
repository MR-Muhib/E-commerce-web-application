import FavoriteProduct from "../components/favorites/FavoriteProduct";
import NoFavorites from "../components/favorites/NoFavorites";

const Favorites = () => {
  // const favoritesProduct = localStorage.getItem("likeProduct");
  const products = JSON.parse(localStorage.getItem("likeProduct")) || [];
  const findProduct = products.length > 0;

  return (
    <div className="w-full ">
      <div className="container mx-auto p-5 my-5">
        {findProduct ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-5 px-4">
            {products.map((product) => (
              <FavoriteProduct key={product.id} product={product} />
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
