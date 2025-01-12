import PropTypes from "prop-types";

// React icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-3 ">
      <LinkButton path="/sign-in" icon={<CiUser className="text-xl" />} />

      <LinkButton path="/favorites" icon={<CiHeart className="text-xl" />} />

      {/* import Searchbar component */}
      <Searchbar />

      <LinkButton path="/cart" icon={<CiShoppingCart className="text-xl" />} />
    </div>
  );
};

const LinkButton = ({ path, icon }) => {
  return (
    <Link to={path}>
      <button className="p-3">{icon}</button>
    </Link>
  );
};

// prop-types
LinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default NavIcons;
