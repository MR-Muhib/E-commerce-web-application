import PropTypes from "prop-types";

const UserForm = () => {
  return (
    <div className="bg-white w-full my-6 ">
      <form className="container mx-auto px-5 py-2">
        <div className="flex justify-between gap-5">
          <FormInput name="First Name" type="text" title="fname" pl="John..." />
          <FormInput name="Last name" type="text" title="lname" pl="Doe..." />
        </div>
        <FormInput
          name="Company Name (Optional)"
          type="text"
          title="cname"
          pl=""
        />
        <FormInput name="Country / Region" type="text" title="crname" pl="" />
        <FormInput name="Street address" type="text" title="saddress" pl="" />
        <FormInput name="Town / City" type="text" title="tcity" pl="" />
        <FormInput name="Province" type="text" title="province" pl="" />
        <FormInput name="ZIP code" type="number" title="code" pl="" />
        <FormInput name="Phone" type="number" title="phone" pl="" />
        <FormInput name="Email address" type="email" title="email" pl="" />
        <FormInput
          name=""
          title="text"
          type="text"
          pl="Additional information"
        />
      </form>
    </div>
  );
};

const FormInput = ({ name, title, pl, type }) => {
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
        required
      />
    </div>
  );
};

// prop-types

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pl: PropTypes.string,
  type: PropTypes.string,
};

export default UserForm;
