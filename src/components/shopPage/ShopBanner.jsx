import { RiArrowRightSLine } from "react-icons/ri";

// import image path
import shopBanner from "../../assets/shopbanner.png";
import BannerImage from "../../helper/BannerImages";

const ShopBanner = () => {
  return (
    <BannerImage
      banner={shopBanner}
      logo={null}
      prev={`Home`}
      icons={<RiArrowRightSLine />}
      view={`Shop`}
      title={`Shop`}
    />
  );
};

export default ShopBanner;
