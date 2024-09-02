import React from "react";

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer rounded p-2 text-gray-400">
      {children}
    </button>
  );
};

export default Button;
