import React, { useContext } from "react";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
  const {
    setStockSymbol,
    hide,
    setHide,
    openMobileSearch,
    setOpenMobileSearch,
  } = useContext(StockContext);

  const hideSearch = () => {
    setHide(false);
  };

  const handleStock = (item) => {
    setStockSymbol(item.symbol);
    setOpenMobileSearch(false);
  };

  return (
    <>
      {hide ? (
        <ul
          onClick={hideSearch}
          className={`${
            openMobileSearch ? "bottom-0 h-screen border-0" : "h-64 border-2"
          } absolute top-12  w-full rounded-md overflow-y-scroll ${
            darkMode
              ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
              : "bg-white border-neutral-200 custom-scrollbar"
          }`}
        >
          {results.map((item) => (
            <li
              key={item.symbol}
              className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
                darkMode
                  ? "hover:bg-indigo-600 text-white"
                  : "hover:bg-indigo-200 text-black"
              } transition duration-300`}
              onClick={() => handleStock(item)}
            >
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default SearchResults;
