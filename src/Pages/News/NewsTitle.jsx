import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const NewsTitle = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section
      className={`relative bg-[url('https://assets.website-files.com/62833e53f002ae1e26ae29ff/62833e53f002ae22e3ae2a42_Send%20Illustration.svg')] bg-no-repeat bg-right-top bg-auto w-full py-[100px] sm:py-[150px] ${
        darkMode ? "bg-black " : "bg-indigo-900 z-20"
      } `}
      style={{ backgroundPosition: "80% 50%" }}
    >
      <div className="w-[90%] lg:max-w-[1200px] mx-auto">
        <div className="sm:max-w-[550px] md:max-w-[600px]">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-semibold text-white z-50">
            Tech is changing. <br /> Stay informed.
          </h2>
          <p className="text-lg sm:text-xl font-normal text-white mt-4 sm:mt-6">
            Discover articles and news on everything that's happening in Silicon
            Valley.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsTitle;
