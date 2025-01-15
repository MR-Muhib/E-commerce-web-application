import { useNavigate } from "react-router-dom";
import SubTotalCart from "../../utils/SubTotalCart";

const CartTotal = () => {
  const subTotal = SubTotalCart();
  const total = parseInt(subTotal);
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto md:w-[420px] md:h-[300px]  bg-common p-5 md:mt-8 md:ml-5">
      <div className=" ">
        <h1 className="text-center mb-5 font-semibold text-xl">Cart Totals</h1>
        <p className=" mb-2">
          Subtotal <span className="float-right">{subTotal}</span>
        </p>
        <p className="mb-4">
          Total <span className="float-right">{total}</span>
        </p>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full mt-20 border border-black py-2 px-4 rounded-xl"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
