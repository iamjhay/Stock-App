import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import MenuContext from "../../context/MenuContext";

const MenuButton = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="fixed bottom-8 right-16 z-10 flex items-center justify-between gap-2 bg-indigo-800 text-gray-100 p-2 sm:px-6 sm:py-2 rounded-lg font-semibold cursor-pointer"
    >
      <span className="hidden sm:block">Menu</span>
      <PlusIcon className="h-5 sm:w-6 sm:h-6" />
    </div>
  );
};

export default MenuButton;
