import { RiArrowRightSLine } from "react-icons/ri";

// import image path
import shopBanner from "../../assets/shopbanner.png";
import BannerImage from "../../helper/BannerImages";

const CheckoutBanner = () => {
  return (
    <div className="">
      <BannerImage
        banner={shopBanner}
        logo={null}
        prev={`Home`}
        icons={<RiArrowRightSLine />}
        view={`Checkout`}
        title={`Checkout`}
      />
    </div>
  );
};

export default CheckoutBanner;
