import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="w-60 h-28 bg-white shadow-lg rounded-lg flex flex-col p-4">
      <p className="text-sm text-mainDashboard font-semibold leading-6 pb-6">{title}</p>
      <p className="text-lg text-mainDashboard font-extraBold leading-6">{text}</p>
    </div>
  );
};

export default Card;
