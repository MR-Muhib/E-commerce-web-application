import FavoriteProduct from "../components/favorites/FavoriteProduct";

const Favorites = () => {
  const favoritesProduct = localStorage.getItem("likeProduct");

  if (!favoritesProduct) {
    return <div>No favorite products yet</div>;
  }

  const products = JSON.parse(favoritesProduct);

  return (
    <div className="w-full ">
      <div className="container mx-auto p-5 my-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-5 px-4">
          {products.map((product) => (
            <FavoriteProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
