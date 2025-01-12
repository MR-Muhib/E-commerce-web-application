import homeBanner from "../../../assets/home-page-banner.png";
import HomeBannerContent from "./HomeBannerContent";

export default function HomeBanner() {
  return (
    <div
      className="relative  bg-center w-full h-[300px]"
      style={{
        backgroundImage: `url(${homeBanner})`,
      }}
    >
      <HomeBannerContent />
    </div>
  );
}
