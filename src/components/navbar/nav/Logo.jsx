import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img className="p-2 w-11" src={logo} alt="Logo" />
      <h1 className="font-bold text-lg pt-1">Furniro</h1>
    </Link>
  );
};

export default Logo;
