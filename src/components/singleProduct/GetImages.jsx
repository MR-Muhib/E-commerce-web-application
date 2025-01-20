import PropTypes from "prop-types";

const GetImages = ({ product }) => {
  return (
    <div className="">
      <div className="container  flex justify-between  mx-auto">
        {/* Left side related product image */}
        <div className="pr-5">
          <GetImagesFun image={product.image} />
          <GetImagesFun image={product.image} />
          <GetImagesFun image={product.image} />
          <GetImagesFun image={product.image} />
          <GetImagesFun image={product.image} />
        </div>

        {/* product image */}
        <div className="">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto mt-5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GetImages;

const GetImagesFun = ({ image }) => {
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

// prop-types

GetImages.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
  }),
};

GetImagesFun.propTypes = {
  image: PropTypes.string.isRequired,
};
