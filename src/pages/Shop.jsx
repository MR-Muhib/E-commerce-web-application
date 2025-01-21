// import all components
import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import PageExchangeButtons from "../components/applicationInfo/PageExchangeButtons";
import ShopBanner from "../components/shopPage/ShopBanner";
import ShopProducts from "../components/shopPage/ShopProducts";

const Shop = () => {
  return (
    <>
      <div className="">
        <ShopBanner />

        <ShopProducts />

        {/* page exchange button */}
        <PageExchangeButtons />
      </div>

      {/* product quality and over view  */}
      <IntroduceApplication />
    </>
  );
};

export default Shop;
