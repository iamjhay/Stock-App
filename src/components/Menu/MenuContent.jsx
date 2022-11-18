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
        className={`fixed w-screen h-screen text-white top-0 left-0 menu-inside ${
          darkMode ? "bg-gray-900" : "bg-black"
        }  z-50 ${open ? "translate-x-0" : "-translate-x-full"}
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
        <div className="relative left-14 sm:left-20 md:left-[220px] top-24 md:top-[100px] overflow-hidden w-auto ">
          <ul className="internal-nav-links">
            {internalLinks.map((link, index) => (
              <li
                key={index}
                className={`mb-4 menu-inside ${
                  open ? `translate-x-0 opacity-100` : `-translate-x-[400px]`
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
                key={link.url}
              >
                <li
                  className={`h-6 w-6 sm:h-8 sm:w-8 transition duration-700 ${
                    open
                      ? `translate-x-0 opacity-100 `
                      : `-translate-x-[400px] opacity-0`
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 200}ms`
                      : `${index * 100}ms`,
                  }}
                >
                  <a
                    href={link.url}
                    className="transition hover:text-gray-300 hover:scale-120"
                  >
                    {link.component}
                  </a>
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
