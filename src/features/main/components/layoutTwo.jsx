import React from "react";

const LayoutTwo = ({ children }) => {
  return (
    <div className="w-5/12 min-h-screen bg-mainPrimary flex items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutTwo;
