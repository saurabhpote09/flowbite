import React from 'react'

const Progesslist = ({country,darkMode}) => {
  return (
    <ul className="space-y-6 my-10">
    {country.map((item, index) => (
      <li key={index} className="w-full items-center sm:flex">
        <div className="mb-3 flex items-center sm:mb-0">
          <svg
            className="h-4 w-4"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.529053"
              width="25.7567"
              height="17.1429"
              rx="2"
              fill="white"
            ></rect>
            <mask
              id="mask0"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="26"
              height="18"
              style={{ maskType: "alpha" }}
            >
              <rect
                y="0.529053"
                width="25.7567"
                height="17.1429"
                rx="2"
                fill="white"
              ></rect>
            </mask>
            <g mask="url(#mask0)">
              <path d={item.svgPath} fill={item.fillColor}></path>
            </g>
          </svg>
          <span className={`mx-5 ml-3 w-32 text-base font-medium ${darkMode?'text-white':'text-gray-900'} sm:flex-none`}>
            {item.country}
          </span>
        </div>
        <div className={`h-5 w-full rounded-lg ${darkMode?'bg-gray-700':'bg-gray-200'}`}>
          <div
            className="h-5 rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-100"
            style={{ width: `${item.percentage}%` }}
          >
            {` ${item.percentage}%`}
          </div>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default Progesslist