import React from 'react'
import User from "../assets/User.png";
const CustomerList = ({ name, email, amount, darkMode }) => {
  return (
    <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4 ">
      <div>
        <img src={User} alt={name} className="size-8 rounded-full" />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </p>
        <p
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {email}
        </p>
      </div>
      <div
        className={`inline-flex items-center text-base font-semibold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {amount}
      </div>
    </div>
  </li>
  )
}

export default CustomerList