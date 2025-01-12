import { useState, useEffect, useRef } from "react";
// Import react icons
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);

  // Close the search bar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex items-center space-x-2" ref={searchRef}>
      {searchVisible && (
        <input
          type="text"
          placeholder="Search"
          className="border-2 px-2 py-1 rounded"
        />
      )}
      <button
        className="p-2"
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing immediately when toggling
          setSearchVisible(!searchVisible);
        }}
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default Searchbar;
