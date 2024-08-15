import React from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="flex p-5 max-sm:mt-09 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
};

export default Navbar;
