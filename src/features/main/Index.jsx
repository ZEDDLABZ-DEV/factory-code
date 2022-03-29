import React from "react";
import { Header } from "./components/Header";
import LayoutOne from "./components/layoutOne";
import LayoutTwo from "./components/layoutTwo";
import heroImage from "../../assets/images/heroImage.png";

export const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row z-0">
        <LayoutOne>
          <div className=" flex flex-col items-center justify-center">
            <img src={heroImage} alt="" className="w-128" />
            <h1 className="text-h1 text-black w-2/3 text-center font-bold">
              Hire the best blue collar workers across the country
            </h1>
            <p className="text-lg font-normal py-8">
              One stop-solution for all worker market interactions
            </p>
            <p className="text-md font-semiBold">
              Trusted by 500+ factories across India
            </p>
          </div>
        </LayoutOne>
        <LayoutTwo></LayoutTwo>
      </div>
    </div>
  );
};
