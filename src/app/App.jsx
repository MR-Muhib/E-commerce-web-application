import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";
import useProduct from "../services/api/getAllProduct";
import { SearchProvider } from "../contexts/SearchContext";
import { AuthProvider } from "../contexts/Auth";
// import { store } from "./store";
// import { Provider } from "react-redux";

const App = () => {
  // get all products
  const { products, loading, error } = useProduct();
  if (loading) return <div className="">loading...</div>;
  if (error) return <div className="">error fetch data...</div>;
  // console.log(products);
  return (
    <>
      <AuthProvider>
        <SearchProvider data={products} loading={loading} error={error}>
          <RouterProvider router={router} />
        </SearchProvider>
      </AuthProvider>
    </>
  );
};

export default App;
