"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-[36px] w-[74px] rounded-3xl bg-primary-light dark:bg-primary-dark flex items-center gap-2 px-[3px]">
      <div
        aria-label="Toggle Dark Mode"
        className={`w-full h-8 flex items-center transition-all duration-300 justify-between rounded-full cursor-pointer select-none`}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <>
            <button className="w-7 h-7 bg-blue-light dark:bg-blue-dark rounded-full flex justify-center items-center transition-transform duration-300">
              <CiLight className="h-6 w-6 text-white" />
            </button>
            <div className="w-7 h-7 rounded-full flex justify-center items-center transition-transform duration-300">
              <CiDark className="h-7 w-7 text-slate-500" />
            </div>
          </>
        ) : (
          <>
            <div className="w-7 h-7 rounded-full flex justify-center items-center transition-transform duration-300">
              <CiLight className="h-6 w-6 text-slate-500" />
            </div>
            <button className="w-7 h-7 bg-blue-light dark:bg-blue-dark rounded-full flex justify-center items-center transition-transform duration-300">
              <CiDark className="h-7 w-7 text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeBtn;
