import HomeAnimation from "../components/homePage/HomeAnimation";
import HomeBanner from "../components/homePage/home-banner/HomeBanner";
import HomeProducts from "../components/homePage/HomeProduct";

const Home = () => {
  return (
    <div className="">
      <HomeBanner />

      <HomeAnimation />

      <HomeProducts />
    </div>
  );
};

export default Home;
