"use client";
import Logo from "@/app/components/navbar/Logo";
import React from "react";
import NavigationLinks from "./NavigationLinks";
import Languages from "./Languages";
import { useConfig } from "@/app/providers/config";

const Sidebar = () => {
  const {
    openSideBarObject: { openSidebar },
  } = useConfig();
  return (
    <div
      className={`${
        openSidebar ? "fixed z-50 shadow-lg" : "max-md:hidden"
      } pr-10 p-6 flex flex-col gap-2 h-screen pt-7 bg-secondary-light dark:bg-secondary-dark`}
    >
      <Logo />
      <NavigationLinks />
      <Languages />
    </div>
  );
};

export default Sidebar;
