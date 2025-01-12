import HomeAnimation from "../components/homePage/HomeAnimation";
import HomeBanner from "../components/homePage/home-banner/HomeBanner";
import HomeProducts from "../components/homePage/HomeProduct";

const Home = () => {
  return (
    <div className="container  mx-auto">
      <HomeBanner />

      <HomeAnimation />

      <HomeProducts />
    </div>
  );
};

export default Home;
