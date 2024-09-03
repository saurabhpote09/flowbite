import React, { useState } from "react";
import Icon from "../../elements/Icon";
import { ReactComponent as DashboardIcon } from "../../assets/Dashboard.svg";
import { ReactComponent as KanbanIcon } from "../../assets/Kanban.svg";
import { ReactComponent as InboxIcon } from "../../assets/Inbox.svg";
import { ReactComponent as EcommerceIcon } from "../../assets/Ecommerce.svg";
import { ReactComponent as UserIcon } from "../../assets/User.svg";
import { ReactComponent as PagesIcon } from "../../assets/Pages.svg";
import { ReactComponent as AuthIcon } from "../../assets/Authentication.svg";
import { ReactComponent as DocsIcon } from "../../assets/Docs.svg";
import { ReactComponent as ComponentIcon } from "../../assets/Components.svg";
import { ReactComponent as HelpIcon } from "../../assets/Help.svg";
import { ReactComponent as SettingIcon } from "../../assets/Setting.svg";
import { ReactComponent as TweakIcon } from "../../assets/Tweaks.svg";
import { ReactComponent as ArrowIcon } from "../../assets/Arrow.svg";

const Sidebar = ({ darkMode,isCollapsed }) => {
  const [activeSubMenu, setActiveSubMenu] = useState({
    eComm: false,
    user: false,
    pages: false,
    authentication: false,
  });

  const toggleSubMenu = (key) => {
    setActiveSubMenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const MenuArray = [
    { label: "Dashboard", icon: DashboardIcon, active: true },
    { label: "Kanban", icon: KanbanIcon },
    { label: "Inbox", icon: InboxIcon },
  ];

  const LowerSubMenu = [
    { label: "Docs", icon: DocsIcon },
    { label: "Components", icon: ComponentIcon },
    { label: "Help", icon: HelpIcon },
  ];

  const SubMenus = [
    {
      label: "E-Commerce",
      icon: EcommerceIcon,
      submenu: ["Products", "Billing", "Invoice"],
      key: "eComm",
    },
    {
      label: "Users",
      icon: UserIcon,
      submenu: ["Users List", "Profile", "Feed", "Setting"],
      key: "user",
    },
    {
      label: "Pages",
      icon: PagesIcon,
      submenu: [
        "Pricing",
        "Maintenance",
        "404 not found",
        "500 server error",
      ],
      key: "pages",
    },
    {
      label: "Authentication",
      icon: AuthIcon,
      submenu: [
        "Sign in",
        "Sign up",
        "Forgot password",
        "Reset password",
        "Profile lock",
      ],
      key: "authentication",
    },
  ];

  const commonClasses = `flex items-center rounded-lg p-2 text-base font-medium`;
  const hoverClasses = darkMode
    ? "text-white hover:bg-gray-700"
    : "text-gray-900 hover:bg-gray-100";

  return (
    <div
      className={`h-full overflow-y-auto overflow-x-hidden rounded border-r ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } py-4 px-3`}
    >
      <div className="flex h-full flex-col justify-between py-2 ">
        <div className="flex flex-col ">
          <ul className="flex h-full flex-col justify-between gap-2 ">
            {MenuArray.map((menu) => (
              <li key={menu.label} className={`group  `}>
                <a href="/" className={`${commonClasses} ${hoverClasses}`}>
                  <Icon  IconComponent={menu.icon} darkMode={darkMode}/>
              {isCollapsed?<span className="px-3 flex-1 whitespace-nowrap">
                    {menu.label}
                  </span>:''}    
                </a>
              </li>
            ))}

            {SubMenus.map((menu) => (
              <li key={menu.label} className="">
                <a href="#"
                  onClick={() => toggleSubMenu(menu.key)}
                  className={`${commonClasses} justify-between cursor-pointer group ${hoverClasses}`}
                >
                  <div className="flex items-center">
                    <Icon  IconComponent={menu.icon} />
                  {isCollapsed?<span className="px-3 flex-1 whitespace-nowrap">
                      {menu.label}
                    </span>:''}  
                  </div>
                {isCollapsed ?<div className={`size-6 text-2xl transform transition-transform ${
                      activeSubMenu[menu.key] ? "rotate-180" : ""
                    } ${
                      darkMode
                        ? "text-gray-400 group-hover:text-white"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}>
                      <Icon  IconComponent={ArrowIcon}/>
                    </div>:'' }  
                
                </a>
                {activeSubMenu[menu.key] && isCollapsed && (
                  <ul>
                    {menu.submenu.map((submenu) => (
                      <li key={submenu} className="py-1">
                        <a href="/" className={`${commonClasses} pl-8 ${hoverClasses}`}>
                          {submenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul
            className={`mt-4 space-y-2 border-t pt-4 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {LowerSubMenu.map((menu) => (
              <li key={menu.label}>
                <a
                  className={`${commonClasses} justify-start group  ${hoverClasses}`}
                  href="/"
                >
                  <Icon  IconComponent={menu.icon} />
                {isCollapsed?  <span className="px-3 flex-1 whitespace-nowrap">
                    {menu.label}
                  </span>:''}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`flex justify-center ${isCollapsed?'flex-row':'flex-col'}  items-center gap-x-5`}>
          <button className="rounded-lg p-2">
            <Icon  IconComponent={SettingIcon} />
          </button>
          <button className="rounded-lg p-2">
            <Icon  IconComponent={TweakIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
