import React from "react";
import ProfileUser from "@/app/components/user";
import Search from "../Search";
import ThemeBtn from "../buttons/ThemeBtn";
import SidebarMenuIcon from "../sidebar/SidebarMenuIcon";

const ContentArea = () => {
  return (
    <div className="w-full md:w-[80%] p-5">
      <div className="rounded-lg flex justify-between gap-2 items-center bg-secondary-light dark:bg-secondary-dark p-3">
        <ProfileUser />
        <Search />
        <div className="flex gap-3 items-center">
          <ThemeBtn />
          <SidebarMenuIcon />
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
