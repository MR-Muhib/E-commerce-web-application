import "../index.css"

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
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
