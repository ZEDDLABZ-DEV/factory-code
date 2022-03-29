import React from "react";

const LayoutOne = ({ children }) => {
  return (
    <div className="w-2/3 min-h-screen bg-white flex items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutOne;
