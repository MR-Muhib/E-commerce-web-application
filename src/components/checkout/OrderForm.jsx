import ProductDetails from "./form/ProductDetails";
import UserForm from "./form/UserForm";

const OrderForm = () => {
  return (
    <div className="container mx-auto md:grid grid-cols-2 gap-5">
      <UserForm />
      <ProductDetails />
    </div>
  );
};

export default OrderForm;
