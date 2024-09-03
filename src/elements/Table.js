import React from "react";

const AnalyticsTable = ({ darkMode,data }) => {
  return (
    <div className="overflow-x-auto">
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
              className={`rounded-l border-x-0 py-3 px-4 text-left align-middle text-xs font-semibold uppercase ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"
              }`}
            >
              Top Channels
            </th>
            <th
              className={` border-x-0 py-3 px-4 text-left align-middle text-xs font-semibold uppercase ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"
              }`}
            >
              Users
            </th>
            <th
              className={`min-w-[140px]  rounded-r border-x-0 py-3 px-4 text-left align-middle text-xs font-semibold uppercase ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"
              }`}
            >
              Acquisition
            </th>
          </tr>
        </thead>
        <tbody className={`${darkMode ? "divide-gray-700" : "divide-gray-100"}`}>
        {data.map((item, index) => (
          <tr key={index} className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            <td
              className={`px-6 py-4  border-t-0 p-4 text-left align-middle text-sm font-normal ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {item.channel}
            </td>
            <td
              className={`px-6 py-4  border-t-0 p-4 align-middle text-xs font-medium ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {item.users}
            </td>
            <td className="px-6 py-4  border-t-0 p-4 align-middle text-xs">
              <div className="flex items-center">
                <span className="mr-2 text-xs font-medium">{item.acquisitionPercentage}%</span>
                <div className="relative w-full">
                  <div
                    className={`h-2 w-full rounded-sm ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className="h-2 rounded-sm bg-primary-700"
                      style={{ width: `${item.acquisitionPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
