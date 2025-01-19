import PropTypes from "prop-types";

const FormInput = ({ name, title, pl, type, handleChange, value, error }) => {
  return (
    <div className="mb-5">
      <label className="font-semibold text-md mb-2" htmlFor={title}>
        {name}
      </label>
      <input
        className="border p-3 rounded-md w-full my-3 text-md"
        type={type}
        id={title}
        name={title}
        placeholder={pl}
        onChange={handleChange}
        value={value} // Bind input value to state
        required // Add required attribute to enforce input field
      />

      <div className="text-red-500 text-xs">{error}</div>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pl: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired, // Ensure value is passed
  fildErrors: PropTypes.object, // Ensure fieldErrors are passed for error handling,
};

export default FormInput;
