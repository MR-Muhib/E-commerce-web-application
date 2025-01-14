import PropTypes from "prop-types";

const Button = ({ onHandleClick }) => {
  return (
    <button
      onClick={onHandleClick}
      className="p-2 border-gray-500 border rounded-md"
    >
      Add To Cart
    </button>
  );
};

export default Button;

// prop-types
Button.propTypes = {
  onHandleClick: PropTypes.func,
};
