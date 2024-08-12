import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const Languages = () => {
  return (
    <div className="mt-12 text-sm">
      <div className="font-bold text-slate-400">languages</div>
      <div className="mt-5 ml-2 text-slate-400 flex-flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <RiJavascriptFill size={15} />
            JavaScript
          </div>
          <span className="font-bold">3</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <BiLogoTypescript size={15} />
            Typescript
          </div>
          <span className="font-bold">5</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <RiJavascriptFill size={15} />
            C++
          </div>
          <span className="font-bold">1</span>
        </div>
      </div>
    </div>
  );
};

export default Languages;
