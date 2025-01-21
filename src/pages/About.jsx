// import all components for about page
import BlogBanner from "../components/aboutPage/BlogBanner";
import BlogsDesign from "../components/aboutPage/main/BlogDesign";
import BlogsPost from "../components/aboutPage/main/BlogPost";
import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import PageExchangeButtons from "../components/applicationInfo/PageExchangeButtons";

const About = () => {
  return (
    <>
      <div className="">
        <BlogBanner />

        <div className="container sm:flex gap-5 mx-auto">
          <BlogsDesign />
          <BlogsPost />
        </div>

        {/* page exchange button */}
        <PageExchangeButtons />
      </div>
      {/* product quality and over view  */}
      <IntroduceApplication />
    </>
  );
};

export default About;
