import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Root from "../pages/Root";

// dynamic pages for product
import SingleProductById from "../pages/SingleProduct";
import SignIn from "../pages/SignIn";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";
import Checkout from "../pages/Checkout";
// import PrivateAdminRoute from "../components/protectedRoute/ProvateAdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/shop",
        element: <Shop />,
      },

      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },

      {
        path: "/favorites",
        element: <Favorites />,
      },

      { path: "/cart", element: <Cart /> },

      // add dynamic elements by id using home page product
      { path: "/single-product/:id", element: <SingleProductById /> },

      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
