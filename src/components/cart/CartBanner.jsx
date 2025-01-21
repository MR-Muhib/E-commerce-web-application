import { RiArrowRightSLine } from "react-icons/ri";

// import image path
import shopBanner from "../../assets/shopbanner.png";
import BannerImage from "../../helper/BannerImages";

const CartBanner = () => {
  return (
    <div className="">
      <BannerImage
        banner={shopBanner}
        logo={null}
        prev={`Home`}
        icons={<RiArrowRightSLine />}
        view={`Cart`}
        title={`Cart`}
      />
    </div>
  );
};

export default CartBanner;
