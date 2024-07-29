import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-blue-500 p-[6px] rounded-md`}>icon</div>
      <div className="flex gap-1 text-xl">
        <span className="font-bold text-blue-500">Code</span>
        <span className="text-slate-600">Snippet</span>
      </div>
    </div>
  );
};

export default Logo;
