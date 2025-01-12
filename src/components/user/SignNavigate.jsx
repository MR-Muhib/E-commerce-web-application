import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SignNavigate = ({ title, navigate, text }) => {
  return (
    <>
      <p className="text-sm font-light text-gray-500 ">
        {title}
        <Link
          to={navigate}
          className="font-medium pl-2 text-blue-600 hover:underline dark:text-primary-500"
        >
          {text}
        </Link>
      </p>
    </>
  );
};

// prop-types

SignNavigate.propTypes = {
  title: PropTypes.string,
  navigate: PropTypes.string,
  text: PropTypes.string,
};

export default SignNavigate;
