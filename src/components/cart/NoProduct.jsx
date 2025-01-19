import { useNavigate } from "react-router-dom";

const NoProduct = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <div className="container text-center bg-common mt-8 flex items-center justify-center">
      <div className="">
        <h2
          onClick={handleClick}
          className="text-xl cursor-pointer font-semibold hover:underline p-5"
        >
          Shop Now
        </h2>
        <p className="italic">Start adding products to your cart</p>
      </div>
    </div>
  );
};

export default NoProduct;
