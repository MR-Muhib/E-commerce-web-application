import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image1 from "../../assets/animationImages/Image-living room.png";
import Image2 from "../../assets/animationImages/Mask Group (1).png";
import Image3 from "../../assets/animationImages/Mask Group.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const carouselArr = [
  {
    id: 1,
    src: Image1,
    title: "Dining",
  },
  {
    id: 2,
    src: Image2,
    title: "Living",
  },
  {
    id: 3,
    src: Image3,
    title: "Bedroom",
  },
  {
    id: 4,
    src: Image1,
    title: "Carousel",
  },
  {
    id: 5,
    src: Image2,
    title: "Carousel",
  },
  {
    id: 6,
    src: Image3,
    title: "Carousel",
  },
];

const HomeAnimation = () => {
  return (
    <Carousel responsive={responsive} className="container mx-auto  w-full">
      {carouselArr.map((item) => (
        <div key={item.id} className="p-4 ">
          <img className="" src={item.src} alt={item.title} />
          <p className="text-center mt-4 mb-">{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeAnimation;
