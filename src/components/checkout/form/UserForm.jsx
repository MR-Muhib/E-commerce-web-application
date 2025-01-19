import FormInput from "./FormInput";

import { useCheckoutContext } from "../../../contexts/CheckoutContext";

const UserForm = () => {
  const {
    handleChange,
    userInfo,
    handleSubmit,
    fildErrors,
  } = useCheckoutContext();
  // console.log(fildErrors.fname);

  return (
    <div className="bg-white w-full my-6">
      <form onSubmit={handleSubmit} className="container mx-auto px-5 py-2">
        <div className="flex justify-between gap-5">
          <FormInput
            name="First Name"
            type="text"
            title="fname"
            pl="John..."
            handleChange={handleChange}
            value={userInfo.fname}
            error={fildErrors.fname}
          />
          <FormInput
            name="Last Name"
            type="text"
            title="lname"
            pl="Doe..."
            handleChange={handleChange}
            value={userInfo.lname}
            error={fildErrors.lname}
          />
        </div>

        <FormInput
          name="Company Name (Optional)"
          type="text"
          title="cname"
          pl=""
          handleChange={handleChange}
          value={userInfo.cname}
          error={fildErrors.cname}
        />
        <FormInput
          name="Country / Region"
          type="text"
          title="crname"
          pl=""
          handleChange={handleChange}
          value={userInfo.crname}
          error={fildErrors.crname}
        />
        <FormInput
          name="Street Address"
          type="text"
          title="saddress"
          pl=""
          handleChange={handleChange}
          value={userInfo.saddress}
          error={fildErrors.saddress}
        />
        <FormInput
          name="Town / City"
          type="text"
          title="tcity"
          pl=""
          handleChange={handleChange}
          value={userInfo.tcity}
          error={fildErrors.tcity}
        />
        <FormInput
          name="Province"
          type="text"
          title="province"
          pl=""
          handleChange={handleChange}
          value={userInfo.province}
          error={fildErrors.province}
        />
        <FormInput
          name="ZIP Code"
          type="number"
          title="code"
          pl=""
          handleChange={handleChange}
          value={userInfo.code}
          error={fildErrors.code}
        />
        <FormInput
          name="Phone"
          type="number"
          title="phone"
          pl=""
          handleChange={handleChange}
          value={userInfo.phone}
          error={fildErrors.phone}
        />
        <FormInput
          name="Email Address"
          type="email"
          title="email"
          pl=""
          handleChange={handleChange}
          value={userInfo.email}
          error={fildErrors.email}
        />
        <FormInput
          name="Additional Information"
          title="additionalInfo"
          type="text"
          pl="Additional information"
          handleChange={handleChange}
          value={userInfo.additionalInfo}
          error={fildErrors.additionalInfo} // Added error prop to FormInput component
        />
        {/* Added the empty field */}
        <FormInput
          name="Empty Field (Optional)"
          title="empty"
          type="text"
          pl="Enter any optional value..."
          handleChange={handleChange}
          value={userInfo.empty}
        />
      </form>
    </div>
  );
};

export default UserForm;
