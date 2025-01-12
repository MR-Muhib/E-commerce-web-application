import "../index.css";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="root-layout">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
