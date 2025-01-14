import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";
import useProduct from "../services/api/getAllProduct";
import { SearchProvider } from "../contexts/SearchContext";
import { AuthProvider } from "../contexts/Auth";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "../contexts/CartContext";


const App = () => {
  // get all products
  const { products, loading, error } = useProduct();
  if (loading) return <div className="">loading...</div>;
  if (error) return <div className="">error fetch data...</div>;

  return (
    <>
      <AuthProvider>
        <SearchProvider data={products} loading={loading} error={error}>
          <CartProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </>
  );
};

export default App;
