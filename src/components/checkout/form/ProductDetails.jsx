import { useCheckoutContext } from "../../../contexts/CheckoutContext";
import SubTotalCart from "../../../utils/SubTotalCart";

const ProductDetails = () => {
  const subTotal = SubTotalCart();
  const total = parseInt(subTotal);

  const { handleSubmit, PaymentElement } = useCheckoutContext();
 

  return (
    <div className="bg-white w-full my-6">
      <div className="container mx-auto px-5 py-2">
        <div className="flex justify-between ">
          <h1 className="text-xl ">Product</h1>
          <h1 className="text-xl ">Subtotal</h1>
        </div>
        {/* Product Details */}
        <div className="">
          <p className="my-3 text-[#9F9F9F]">
            Asgaard sofa
            <span className="float-right text-black">{subTotal}</span>
          </p>
          <p className="my-3">
            Subtotal <span className="float-right">{subTotal}</span>
          </p>
          <p className="my-3">
            Total
            <span className="float-right text-[#b88e2f] font-bold text-xl">
              {total}
            </span>
          </p>
        </div>

        <hr />

        <div className="my-5">
          <PaymentElement />
        </div>

        <div className=" items-center justify-center flex ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-10 rounded-md border border-gray-300"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// design parts from cart
{
  /*   <div className="">
          <ul className="flex gap-2 my-5">
            <input type="radio" />
            <li className="">Direct Bank Transfer</li>
          </ul>
          <p className="">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>

        <div className="flex gap-2 my-5 text-gray-400">
          <input className="" type="radio" />
          <p className="">Direct Bank Transfer</p>
        </div>

        <div className="flex gap-2 my-5 text-gray-400">
          <input className="" type="radio" />
          <p className="">Cash On Delivery</p>
        </div>

        <p className="my-5">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a className="font-semibold">privacy policy</a>.
        </p> */
}
