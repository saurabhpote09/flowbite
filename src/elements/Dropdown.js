import React, { useState } from "react";
import { ReactComponent as DownArrowIcon } from "../assets/DownArrow.svg";
const Dropdown = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div
        className="flex justify-center items-center gap-1 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className={`${darkMode ? "text-white" : "text-black"} text-sm`}>
          Last 7 Days
        </span>
        <div className={`${darkMode ? "text-white" : "text-black"}`}>
          <DownArrowIcon />
        </div>
      </div>
      {isOpen && (
        <ul className={`absolute z-10 right-[-60px] mt-2 w-48 ${darkMode?'bg-gray-700':'bg-white'}  rounded-lg shadow-lg`}>
          <li
            className={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer rounded-t-lg ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <strong>Sep 16, 2021 - Sep 22, 2021</strong>
          </li>
          <div class="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
          <li
            class={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Yesterday
          </li>
          <li
            class={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Today
          </li>
          <li
            class={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Last 7 days
          </li>
          <li
            class={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Last 30 days
          </li>
          <li
            class={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Last 90 days
          </li>
          <div class="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
          <li
            class={`flex items-center justify-start py-2 px-4 text-sm cursor-pointer ${
              darkMode
                ? "hover:bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Custom...
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
