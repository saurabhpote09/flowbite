import React from "react";
import { ReactComponent as ArrowIcon } from "../assets/Trend.svg";

import { ReactComponent as RightArrowIcon } from "../assets/RightArrow.svg";
import Dropdown from "./Dropdown";

const Card = ({ number, subtitle, trendNum, trend, children, darkMode }) => {
  return (
    <div
      className={`rounded-lg p-4 shadow ${
        darkMode ? "bg-gray-800" : "bg-white"
      } sm:p-6 xl:p-8`}
    >
      <div className="flex items-center">
        <div className="shrink-0">
          <span
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-black"
            } sm:text-3xl`}
          >
            {number}
          </span>
          <h3
            className={`text-base font-normal ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {subtitle}
          </h3>
        </div>
        <div
          className={`flex w-0 flex-1 items-center justify-end text-base font-bold ${
            trend === "uptrend" ? "text-green-400" : "text-red-400"
          } ml-5`}
        >
          {trendNum}
          <div className={`${trend === "uptrend" ? "" : "rotate-180"}`}>
            <ArrowIcon />
          </div>
        </div>
      </div>
      {children}
      <div
        className={`flex items-center justify-between border-t pt-3 ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } sm:pt-6`}
      >
        <div className="flex justify-center items-center gap-1">
          <Dropdown darkMode={darkMode} />
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

export default Card;
