import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name, logo }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="sm:w-auto w-full flex flex-row justify-between sm:flex-col">
        <div className="flex items-center xs:gap-2">
          {name ? (
            <>
              <img
                src={logo}
                alt={name}
                className="h-9 w-9 xs:w-10 xs:h-10 rounded-full "
              />
              <h1 className="text-xl xs:text-2xl sm:text-3xl font-medium ml-1 sm:ml-2">
                {name}
              </h1>
            </>
          ) : (
            <div
              className={`w-full ${
                darkMode ? "bg-gray-900" : "bg-transparent sm:bg-white"
              }  rounded-lg sm:shadow-2xl mr-2 sm:p-2`}
            >
              <div className="animate-pulse">
                <div className="flex">
                  <div className="h-8 w-10 sm:h-10 sm:w-12 bg-gray-400 rounded-[100%]"></div>
                  <div className="w-full ml-2 sm:ml-5">
                    <div className="h-3 w-24 sm:w-48 sm:h-4 my-1 bg-gray-400 rounded"></div>
                    <div className="w-16 h-2 sm:w-32 sm:h-4 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Search />
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;
