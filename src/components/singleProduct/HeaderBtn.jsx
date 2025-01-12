// react icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderBtn = () => {
  const style = "flex justify-center gap-2  mr-5";
  return (
    <div className="bg-[#f9f1e7] w-full  ">
      <div className="container mx-auto flex w-full h-20 gap-6 items-center px-5">
        <div className=" flex text-gray-500 border-r-2 border-black pr-4">
          <div className={style}>
            <Link href="/">Home</Link>
            <MdOutlineKeyboardArrowRight className="text-2xl text-black" />
          </div>

          <div className={style}>
            <Link href="/shop">Shop</Link>
            <MdOutlineKeyboardArrowRight className="text-2xl text-black" />
          </div>
        </div>

        <p className="">Asgaard sofa</p>
      </div>
    </div>
  );
};

export default HeaderBtn;
