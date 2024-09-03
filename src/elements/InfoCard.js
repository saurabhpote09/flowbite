import React from "react";

import { ReactComponent as RightArrowIcon } from "../assets/RightArrow.svg";
import Dropdown from "./Dropdown";
const InfoCard = ({ title, subtitle, darkMode, children }) => {
  return (
    <div
      className={`  rounded-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      } h-full p-4 shadow sm:p-6 `}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <a
          href="/"
          className={`flex items-center rounded-lg p-2 text-sm font-medium ${
            darkMode
              ? "text-blue-500 hover:bg-gray-700"
              : "text-blue-700 hover:bg-gray-100"
          }`}
        >
          View all
        </a>
      </div>
      {subtitle && (
        <h3
          className={`text-base font-normal mb-3 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {subtitle}
        </h3>
      )}

      {children}
      <div
        className={`flex items-center justify-between border-t pt-3 ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } sm:pt-6`}
      >
        <div className="flex justify-center items-center gap-1">
          <Dropdown darkMode={darkMode}/>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span className="text-blue-500 uppercase text-sm font-medium">
            View Report
          </span>
          <div className="text-blue-500 size-6 flex justify-center items-center">
            <RightArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
