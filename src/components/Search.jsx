import React, { useContext, useState } from "react";
// import { mockSearchResults } from "../constants/mock";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import SearchResults from "./SearchResults";
import Modal from "./Modals";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { searchSymbol } from "../api/stock-api";
import SlideBar from "./SlideBar";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const { hide, setHide, openMobileSearch, setOpenMobileSearch } =
    useContext(StockContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbol(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      <Modal error={error} />;
      console.log(error);
    }

    if (!input) {
      setHide(false);
    } else if (input) {
      setHide(true);
    } else {
      setHide(!hide);
    }
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <>
      <div
        className={`sm:flex items-center my-2 lg:my-4 border-2 rounded-md relative z-30 hidden sm:w-96  ${
          input !== "" ? "ring-indigo-400/50 ring-2" : "ring-0"
        } ${
          darkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-neutral-400"
        }`}
      >
        <input
          type="text"
          value={input}
          className={`w-full px-4 py-2 focus:outline-none border-0 rounded-md ${
            darkMode ? "bg-gray-900" : null
          }`}
          placeholder="Search stock by symbols ..."
          onChange={(e) => setInput(e.target.value)}
          onBlur={(e) => setInput(e.target.value)}
          onInput={updateBestMatches}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              updateBestMatches();
            }
          }}
        />

        {input && (
          <button onClick={clear} className="m-1">
            <XMarkIcon className="h-4 w-4 fill-gray-500" />
          </button>
        )}

        <button
          onClick={updateBestMatches}
          className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
        >
          <MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
        </button>

        {input && bestMatches.length > 0 ? (
          <SearchResults results={bestMatches} />
        ) : null}

        {input && bestMatches.length === 0 ? (
          <ul
            title="click the search icon"
            className={`absolute top-12 border-2 w-full rounded-md h-20 ${
              darkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <li className="p-4 text-center flex items-center justify-between rounded-md animate-pulse ease-linear">
              <span className="h-12 w-12 rounded-full bg-gray-400"></span>
              <span className="h-8 w-64 rounded-md bg-gray-400"></span>
            </li>
          </ul>
        ) : null}
      </div>

      <button
        onClick={() => setOpenMobileSearch(true)}
        className="h-8 w-8 bg-indigo-600 rounded-md flex sm:hidden justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
      >
        <MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
      </button>

      {openMobileSearch ? (
        <SlideBar>
          <div
            className={`flex items-center my-2 lg:my-4 border-2 rounded-md relative z-30 w-full sm:w-96 ${
              input !== "" ? "ring-indigo-400/50 ring-2" : "ring-0"
            } ${
              darkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-neutral-400"
            }`}
          >
            <input
              type="text"
              value={input}
              className={`w-full px-4 py-2 focus:outline-none border-0 rounded-md ${
                darkMode ? "bg-gray-900" : "bg-transparent text-black"
              }`}
              placeholder="Search stock..."
              onChange={(e) => setInput(e.target.value)}
              onBlur={(e) => setInput(e.target.value)}
              onInput={updateBestMatches}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  updateBestMatches();
                }
              }}
            />

            {input && (
              <button onClick={clear} className="m-1">
                <XMarkIcon className="h-4 w-4 fill-gray-500" />
              </button>
            )}

            <button
              onClick={updateBestMatches}
              className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
            >
              <MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
            </button>

            {input && bestMatches.length > 0 ? (
              <SearchResults results={bestMatches} />
            ) : null}

            {input && bestMatches.length === 0 ? (
              <ul
                title="click the search icon"
                className={`absolute top-12 border-2 w-full rounded-md h-20 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-neutral-200"
                }`}
              >
                <li className="p-4 text-center flex items-center justify-between rounded-md animate-pulse ease-linear">
                  <span className="h-12 w-12 rounded-full bg-gray-400"></span>
                  <span className="h-8 w-64 rounded-md bg-gray-400"></span>
                </li>
              </ul>
            ) : null}
          </div>
        </SlideBar>
      ) : (
        ""
      )}
    </>
  );
};

export default Search;
