import React from "react";

const AnalyticsTable = ({ darkMode }) => {
  return (
    <table
      className={`w-full text-left text-sm ${
        darkMode ? "text-gray-400" : "text-gray-500"
      } min-w-full table-fixed`}
    >
      <thead
        className={`${
          darkMode ? "bg-gray-700 text-gray-400" : "bg-gray-50 text-gray-700"
        } text-xs uppercase`}
      >
        <tr>
          <th
            className={`whitespace-nowrap rounded-l border-x-0 py-3 px-4 text-left align-middle text-xs font-semibold uppercase ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"
            }`}
          >
            Top Channels
          </th>
          <th
            className={`whitespace-nowrap border-x-0 py-3 px-4 text-left align-middle text-xs font-semibold uppercase ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"
            }`}
          >
            Users
          </th>
          <th
            className={`min-w-[140px] whitespace-nowrap rounded-r border-x-0 py-3 px-4 text-left align-middle text-xs font-semibold uppercase ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"
            }`}
          >
            Acquisition
          </th>
        </tr>
      </thead>
      <tbody className={`${darkMode ? "divide-gray-700" : "divide-gray-100"}`}>
        <tr
          
          className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Organic Search
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            5,649
          </td>
          <td className="px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs">
            <div className="flex items-center">
              <span className="mr-2 text-xs font-medium">30%</span>
              <div className="relative w-full">
                <div
                  className={`h-2 w-full rounded-sm ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-sm bg-primary-700"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr
          
          className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Referral
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            4,025
          </td>
          <td className="px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs">
            <div className="flex items-center">
              <span className="mr-2 text-xs font-medium">24%</span>
              <div className="relative w-full">
                <div
                  className={`h-2 w-full rounded-sm ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-sm bg-orange-300"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr
          
          className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Organic Search
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            5,649
          </td>
          <td className="px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs">
            <div className="flex items-center">
              <span className="mr-2 text-xs font-medium">30%</span>
              <div className="relative w-full">
                <div
                  className={`h-2 w-full rounded-sm ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-sm bg-primary-700"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr
          
          className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal ${
             darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Referral
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            4,025
          </td>
          <td className="px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs">
            <div className="flex items-center">
              <span className="mr-2 text-xs font-medium">24%</span>
              <div className="relative w-full">
                <div
                  className={`h-2 w-full rounded-sm ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-sm bg-orange-300"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr
          
          className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Organic Search
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            5,649
          </td>
          <td className="px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs">
            <div className="flex items-center">
              <span className="mr-2 text-xs font-medium">30%</span>
              <div className="relative w-full">
                <div
                  className={`h-2 w-full rounded-sm ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-sm bg-primary-700"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr
          
          className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Referral
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            4,025
          </td>
          <td className="px-6 py-4 whitespace-nowrap border-t-0 p-4 align-middle text-xs">
            <div className="flex items-center">
              <span className="mr-2 text-xs font-medium">24%</span>
              <div className="relative w-full">
                <div
                  className={`h-2 w-full rounded-sm ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-sm bg-orange-300"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
