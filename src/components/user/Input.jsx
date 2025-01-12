import PropTypes from "prop-types";

const Input = ({ labelName, types, pl, onHandleChange }) => {
  return (
    <div>
      <label
        htmlFor={types}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {labelName}
      </label>
      <input
        type={types}
        name={types}
        onChange={onHandleChange}
        id={types}
        placeholder={pl}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
    </div>
  );
};

// prop-types

Input.propTypes = {
  labelName: PropTypes.string,
  types: PropTypes.string,
  pl: PropTypes.string,
  onHandleChange: PropTypes.func,
};

export default Input;
