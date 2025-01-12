import image from "../../assets/BlogImages/Rectangle 68 (1).png";

const GetImages = () => {
  return (
    <div className="">
      <div className="container  flex justify-between  mx-auto">
        {/* Left side related product image */}
        <div className="pr-5">
          <GetImagesFun />
          <GetImagesFun />
          <GetImagesFun />
          <GetImagesFun />
          <GetImagesFun />
        </div>

        {/* product image */}
        <div className="">
          <img
            src={image}
            alt="image"
            className="w-full h-auto mt-5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GetImages;

const GetImagesFun = () => {
  return (
    <img
      src={image}
      alt="image name"
      width={100}
      height={50}
      className="w-20 h-auto mt-5 block"
    />
  );
};
