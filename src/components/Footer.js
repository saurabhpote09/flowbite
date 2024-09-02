import React from "react";
import { ReactComponent as FacebookIcon } from "../assets/Facebook.svg";
import { ReactComponent as InstaIcon } from "../assets/Instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/Twitter.svg";
import { ReactComponent as GithubIcon } from "../assets/Github.svg";
import { ReactComponent as SocialIcon } from "../assets/Social.svg";
import Icon from "../elements/Icon";

const Footer = ({ darkMode }) => {
  return (
    <div>
      <footer
      className={`flex items-center justify-between p-6 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-lg`}
    >
      {" "}
      <div className="flex items-center gap-5 flex-col lg:flex-row">
        <p className={`${darkMode ? "text-white" : "text-gray-500"} text-sm`}>
          Terms and Condition
        </p>
        <p className={`${darkMode ? "text-white" : "text-gray-500"} text-sm`}>
          Privacy and Policy
        </p>
        <p className={`${darkMode ? "text-white" : "text-gray-500"} text-sm`}>
          Licensing
        </p>
        <p className={`${darkMode ? "text-white" : "text-gray-500"} text-sm`}>
          Cookie Policy
        </p>
        <p className={`${darkMode ? "text-white" : "text-gray-500"} text-sm`}>
          Contact
        </p>
      </div>
      <div className="flex items-center gap-5 flex-col sm:flex-row">
        <Icon darkMode={darkMode} IconComponent={FacebookIcon} />
        <Icon darkMode={darkMode} IconComponent={InstaIcon} />
        <Icon darkMode={darkMode} IconComponent={TwitterIcon} />
        <Icon darkMode={darkMode} IconComponent={GithubIcon} />
        <Icon darkMode={darkMode} IconComponent={SocialIcon} />
      </div>
    </footer>

    <p className={`${darkMode ? "text-white" : "text-gray-500"} text-base my-8 text-center`}>© 2019-2022 Flowbite.com. All rights reserved.</p>
    </div>
  );
};

export default Footer;
