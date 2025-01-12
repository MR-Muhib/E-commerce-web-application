import { useEffect, useRef, useState } from "react";
// Import react icons
import { LuAlignJustify } from "react-icons/lu";
import NavLinks from "../NavLinks";

const NavToggle = () => {
  // State to track toggle
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setToggle(false); // Close the toggle when clicking outside
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={toggleRef}>
      <div
        className="text-xl mr-5 cursor-pointer float-right pt-4 "
        onClick={(e) => {
          e.stopPropagation();
          setToggle(!toggle);
        }}
      >
        <LuAlignJustify />
      </div>

      {/* Conditionally render NavLinks and NavIcons based on toggle state */}
      {toggle && (
        <div className="absolute top-12 right-0 w-[70%] bg-slate-50 shadow-lg z-10">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default NavToggle;
