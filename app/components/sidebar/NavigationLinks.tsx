"use client";
import React from "react";
import { useConfig } from "@/app/providers/config";

const NavigationLinks = () => {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useConfig();

  function clicked(index: number) {
    const updateSidebar = sideBarMenu.map((menu, i) => {
      if (i === index) {
        return { ...menu, isSelected: true };
      } else {
        return { ...menu, isSelected: false };
      }
    });

    setSideBarMenu(updateSidebar);
  }
  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">Quick Links</div>
      <ul className="text-slate-400 mt-4 flex-flex-col gap-2">
        {sideBarMenu.map((menu, index) => (
          <li
            key={menu.id}
            onClick={() => clicked(index)}
            className={`flex cursor-pointer select-none gap-1 mt-1 items-center w-full ${
              menu.isSelected
                ? "bg-blue-light dark:bg-blue-dark text-white"
                : "text-slate-400 bg-transparent"
            } flex gap-1 items-center hover:bg-blue-light dark:hover:bg-blue-dark hover:text-white p-1.5 px-2 rounded-md w-[60%]`}
          >
            {menu.icons}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;
