import React from "react";
import User from "../../assets/User.png";
import { ReactComponent as MenuIcon } from "../../assets/Menu.svg";
import { ReactComponent as BellIcon } from "../../assets/Bell.svg";
import { ReactComponent as TileIcon } from "../../assets/Tile.svg";
import { ReactComponent as LightModeIcon } from "../../assets/LightMode.svg";
import { ReactComponent as DarkModeIcon } from "../../assets/DarkMode.svg";
import { ReactComponent as SearchIcon } from "../../assets/Search.svg";
import Icon from "../../elements/Icon";

const Navbar = ({ darkMode, setDarkMode, setIsCollapsed, isCollapsed }) => {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const themeClasses = darkMode
    ? "bg-gray-800 border-gray-700 text-white"
    : "bg-white border-gray-200 text-black";

  return (
    <div
      className={`p-3 flex items-center justify-between w-full border-b ${themeClasses}`}
    >
      <div className="flex items-center">
        <button
          className="mr-3 p-2 text-gray-400 rounded cursor-pointer"
          onClick={toggleSidebar}
        >
          <Icon darkMode={darkMode} IconComponent={MenuIcon} />
        </button>
        <a className="flex items-center" href="/">
          <img
            alt="Flowbite Logo"
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-8"
          />
          <span className="text-2xl font-semibold whitespace-nowrap hidden sm:block">
            Flowbite
          </span>
        </a>
        <div className="ml-16 hidden md:block">
          <div className="relative w-full">
            <div className="absolute top-0 bottom-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon darkMode={darkMode} IconComponent={SearchIcon} />
            </div>
            <input
              className={`block w-full border rounded-lg p-2.5 text-sm ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } pl-10`}
              id="search"
              name="search"
              placeholder="Search"
              type="search"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg hover:text-white group">
          <Icon
            darkMode={darkMode}
            IconComponent={BellIcon}
            className={`hover:${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
          />
        </div>
        <div className="p-2 rounded-lg hover:text-white group">
          <Icon
            darkMode={darkMode}
            IconComponent={TileIcon}
            className={`hover:${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
          />
        </div>
        <div
          className="p-2 rounded-lg hover:text-white group"
          onClick={() => setDarkMode(!darkMode)}
        >
          <button className="flex justify-center items-center">
            <Icon
              darkMode={darkMode}
              IconComponent={darkMode ? LightModeIcon : DarkModeIcon}
            />
          </button>
        </div>
        <img src={User} alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
