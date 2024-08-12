import Logo from "@/app/components/navbar/Logo";
import React from "react";
import NavigationLinks from "./NavigationLinks";
import Languages from "./Languages";

const Sidebar = () => {
  return (
    <div className="max-md:hidden pr-10 p-6 flex flex-col gap-2 h-screen pt-7 bg-secondary-light dark:bg-secondary-dark">
      <Logo />
      <NavigationLinks />
      <Languages />
    </div>
  );
};

export default Sidebar;
