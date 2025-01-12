// import { useState } from "react";
import Logo from "./nav/Logo";
import NavIcons from "./nav/NavIcons";
import NavLinks from "./NavLinks";
import NavToggle from "./nav/NavToggle";

const Navbar = () => {
  return (
    <div className="flex bg-white shadow-sm w-full h-12 ">
      <div className="container mx-auto  flex  justify-between px-5">
        <Logo />

        <div className="hidden sm:block">
          <NavLinks />
        </div>

        <div className="hidden sm:block ">
          <NavIcons />
        </div>
      </div>

      <div className=" sm:hidden ">
        <NavToggle />
      </div>
    </div>
  );
};

export default Navbar;
