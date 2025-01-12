import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

const NavLinks = () => {
  const { userLoggedIn } = useAuth();
  console.log(userLoggedIn);

  return (
    <nav className="p-6 sm:p-3  md:bg-transparent">
      <ul className="flex flex-col md:flex-row md:gap-5 md:justify-center sm:items-end ">
        <Lists path="/" title="Home" />

        {userLoggedIn ? <Lists path="/shop" title="Shop" /> : null}

        <Lists path="/about" title="About" />

        <Lists path="/contact" title="Contact" />
      </ul>
    </nav>
  );
};

const Lists = ({ path, title }) => {
  return (
    <li className="list-style">
      <Link to={path} className="hover:text-gray-700 block">
        {title}
      </Link>
    </li>
  );
};

// prop-types
Lists.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLinks;
