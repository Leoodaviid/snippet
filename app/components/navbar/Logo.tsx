import React from "react";
import { FaCode } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-blue-light dark:bg-blue-dark p-[6px] rounded-md`}>
        <FaCode size={20} />
      </div>
      <div className="flex gap-1 text-xl">
        <span className="font-bold text-blue-light dark:text-blue-dark">
          Code
        </span>
        <span className="text-slate-500 font-light">Snippet</span>
      </div>
    </div>
  );
};

export default Logo;
