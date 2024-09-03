import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import './components/dashboard/style.css';

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "bg-[#111827]" : "bg-[#F9FAFB]"} min-h-screen flex flex-col`}>
      <div className="flex items-center justify-between w-full p-4 bg-gray-900 border-b border-gray-700">
        <span className="hidden font-normal sm:inline text-gray-200">
          You're now previewing{" "}
          <span className="font-bold">React Admin Dashboard</span> from Flowbite Pro.
        </span>
        <div className="flex items-center">
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
            href="/pro/#pricing"
          >
            Pricing &amp; FAQ
          </a>
        </div>
      </div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />
      <div className="flex flex-1">
        <div className={`w-${isCollapsed ? "[20%]" : "fit"} h-screen overflow-auto hide-scrollbar transition-all duration-300`}>
          <Sidebar darkMode={darkMode} isCollapsed={isCollapsed} />
        </div>
        <main className="w-[80%] flex-1 overflow-auto hide-scrollbar h-screen p-4 transition-all duration-300">
          <Dashboard darkMode={darkMode} />
        </main>
      </div>
    </div>
  );
};

export default App;
