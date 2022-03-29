import React from "react";

export const Card = ({ src, title }) => {
  return (
    <div className="flex justify-center items-center my-auto min-h-screen">
      <div className="flex flex-col w-1/4 h-auto rounded-lg">
        <img src={src} alt="card1" className="rounded-t-lg" />
        <p className="pl-5 py-1 my-auto text-mainSecondary font-semibold bg-mainCard rounded-b-lg">
          {title}
        </p>
      </div>
    </div>
  );
};
