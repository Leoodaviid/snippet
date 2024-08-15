"use client";
import { useConfig } from "@/app/providers/config";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SidebarMenuIcon = () => {
  const {
    openSideBarObject: { openSidebar, setOpenSidebar },
  } = useConfig();
  return (
    <>
      {!openSidebar ? (
        <FiMenu
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-slate-500 h-5 w-5 cursor-pointer hidden max-md:block"
        />
      ) : (
        <IoClose
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-slate-500 h-5 w-5 cursor-pointer hidden max-md:block"
        />
      )}
    </>
  );
};

export default SidebarMenuIcon;
