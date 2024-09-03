import React from 'react'
import { ReactComponent as DownArrowIcon } from "../assets/DownArrow.svg";
import { ReactComponent as RightArrowIcon } from "../assets/RightArrow.svg";
const InfoCard = ({ title, subtitle, darkMode, children }) => {
  return (
    <div
    className={`mb-4  rounded-lg ${
      darkMode ? "bg-gray-800" : "bg-white"
    } p-4 shadow sm:p-6`}
  >
    <div className="mb-4 flex items-center justify-between">
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
        className={`text-base font-normal ${
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
        <span
          className={`${darkMode ? "text-white" : "text-black"} text-sm`}
        >
          Last 7 Days
        </span>
        <div className={`${darkMode ? "text-white" : "text-black"}`}>
          <DownArrowIcon />
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        <span className="text-blue-500 uppercase text-sm font-medium">
          Product Report
        </span>
        <div className="text-blue-500">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoCard