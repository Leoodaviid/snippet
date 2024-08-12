import React from "react";

const CTASection = () => {
  return (
    <div className="flex flex-col mx-16 mt-28 gap-6 items-center">
      <h2 className="font-bold text-2xl text-center">
        Organize your Code Snippets
        <span className="text-blue-light dark:text-blue-dark">
          {" "}
          Efficiently!
        </span>
      </h2>
      <p>
        With our advanced tagging and search features, you can quickly find the
        snippet you need, right when you need it. Spend less time searching and
        more time coding.
      </p>
      <button
        type="button"
        className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none"
      >{`Let's Get Started`}</button>
    </div>
  );
};

export default CTASection;
