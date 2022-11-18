import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

const SlideBar = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  const { openMobileSearch, setOpenMobileSearch } = useContext(StockContext);
  return (
    <div
      className={`fixed w-screen h-screen text-white top-0 left-0 menu-outside py-4 px-6 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }  z-50 ${openMobileSearch ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      {children}
      <button
        onClick={() => setOpenMobileSearch(!openMobileSearch)}
        className="fixed z-50 bottom-4 right-4 h-8 w-8 bg-indigo-600 rounded-md flex sm:hidden justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
      >
        <XMarkIcon className="h-4 w-4  fill-gray-100" />
      </button>
    </div>
  );
};

export default SlideBar;
