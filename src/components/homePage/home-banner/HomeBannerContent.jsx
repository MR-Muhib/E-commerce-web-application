const HomeBannerContent = () => {
  return (
    <div className="relative flex items-center float-right  w-auto h-auto  md:w-80 top-10 md:right-10  ">
      <div className="right-side bg-[#fff3e3] rounded-md p-5">
        <div>
          <p className="text-sm text-gray-500">New Arrival</p>
          <h1 className="lg:text-3xl sm:text-xl font-bold text-[#b88e2f]">
            Discover Our New Collection
          </h1>

          <p className="mb-2 mt-2 text-gray-700 text-sm">
            Lore of the new collection will be available in the following
            formats and will be.
          </p>

          <button className="bg-[#b88e2f] hover:bg-[#ddaf42] text-white font-bold py-2 px-4 uppercase text-sm mt-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerContent;
