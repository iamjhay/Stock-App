import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ExternalLinks, internalLinks } from "../../constants/mock";
import MenuContext from "../../context/MenuContext";
import ThemeContext from "../../context/ThemeContext";

const MenuContent = () => {
  const { darkMode } = useContext(ThemeContext);
  const { open, setOpen } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div
        className={`fixed w-screen xs:w-2/3 md:w-1/2 h-screen text-white top-0 left-0 menu-inside z-50 overflow-hidden ${
          darkMode ? "bg-gray-900" : "bg-black"
        }   ${open ? "translate-x-0 " : "-translate-x-full"}
        `}
      >
        <XMarkIcon
          className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 fill-gray-500 absolute inset-y-5 right-10 sm:inset-y-10 sm:right-20 z-50 cursor-pointer hover:scale-75 ${
            open
              ? "rotate-0 delay-150 menu-inside"
              : "-rotate-180 delay-75 menu-outside"
          } `}
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative  top-32 md:top-[130px] overflow-hidden w-auto menu-inside left-14 ${
            open ? "!left-14 !sm:left-20 !md:left-[220px]" : ""
          } `}
        >
          <ul className="internal-nav-links">
            {internalLinks.map((link, index) => (
              <li
                key={index}
                className={`mb-4 menu-inside ${
                  open ? `translate-x-0` : `-translate-x-full`
                }`}
                style={{
                  transitionDelay: open
                    ? `${index * 100}ms`
                    : `-${index * 100}ms`,
                }}
              >
                <Link
                  onClick={() => setOpen(false)}
                  to={link.url}
                  className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl transition duration-300 hover:text-indigo-400 hover:cursor-pointer  "
                >
                  {link.component}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-20 flex flex-wrap">
            {ExternalLinks.map((link, index) => (
              <div
                className="overflow-hidden mr-4 last-of-type:mr-0"
                key={index}
              >
                <li
                  className={`h-6 w-6 sm:h-8 sm:w-8 transition duration-700 ${
                    open
                      ? `translate-x-0 opacity-100 `
                      : `-translate-x-full opacity-0`
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 200}ms`
                      : `${index * 100}ms`,
                  }}
                >
                  <Link
                    to={link.url}
                    className="transition hover:text-gray-300 hover:scale-120"
                  >
                    {link.component}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
