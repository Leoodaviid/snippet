import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

const Search = () => {
  return (
    <div className="relative pl-3 w-[60%] h-[38px] bg-primary-light dark:bg-primary-dark rounded-3xl flex items-center gap-2">
      <FiSearch className="text-blue-light dark:text-blue-dark" />
      <input
        type="text"
        placeholder="Search a snippet..."
        className="w-[70%] outline-none text-sm bg-primary-light dark:bg-primary-dark text-slate-500"
      />
      <AddSnippetButton />
    </div>
  );
};

function AddSnippetButton() {
  return (
    <div className="absolute flex sm:gap-1 px-1 sm:pr-2 rounded-full bg-blue-light dark:bg-blue-dark p-1 text-sm text-white top-[5px] right-[6px] items-center cursor-pointer select-none">
      <div className="font-bold">
        <IoIosAdd size={20} />
      </div>
      <div className="max-md:hidden">Snippet</div>
    </div>
  );
}

export default Search;
