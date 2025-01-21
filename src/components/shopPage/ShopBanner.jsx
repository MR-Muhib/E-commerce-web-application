import { RiArrowRightSLine } from "react-icons/ri";

// import image path
import shopBanner from "../../assets/shopbanner.png";
import BannerImage from "../../helper/BannerImages";

const ShopBanner = () => {
  return (
    <div className="">
      <BannerImage
        banner={shopBanner}
        logo={null}
        prev={`Home`}
        icons={<RiArrowRightSLine />}
        view={`Shop`}
        title={`Shop`}
      />
    </div>
  );
};

export default ShopBanner;
