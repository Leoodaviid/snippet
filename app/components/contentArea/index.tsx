import React from "react";
import ProfileUser from "@/app/components/user";
import Search from "../Search";
import ThemeBtn from "../buttons/ThemeBtn";

const ContentArea = () => {
  return (
    <div className="w-full md:w-[80%] p-5">
      <div className="rounded-lg flex justify-between gap-2 items-center bg-secondary-light dark:bg-secondary-dark p-3">
        <ProfileUser />
        <Search />
        <ThemeBtn />
      </div>
    </div>
  );
};

export default ContentArea;
