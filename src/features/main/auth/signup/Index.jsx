import React from "react";
import { Header } from "../../components/Header";
import LayoutOne from "../../components/layoutOne";
import LayoutTwo from "../../components/layoutTwo";
import heroImage from "../../../../assets/images/heroImage.png";
import companyImage from "../../../../assets/images/factoryWithAamdhane.png";

export const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row z-0">
        <LayoutOne></LayoutOne>
        <LayoutTwo>
          <div className=" flex flex-col items-center justify-center">
            <img src={heroImage} alt="" className="w-96" />
            <h1 className="text-xl text-mainText2 w-2/3 text-center font-bold leading-tight">
              Hire the best blue collar workers across the country
            </h1>
            <p className="text-sm font-normal py-4 text-mainText2 text-center">
              One stop-solution for all worker market interactions
            </p>
            <p className="text-sm font-semiBold text-mainText1">
              Trusted by 500+ factories across India
            </p>
            <img
              src={companyImage}
              alt="Factory Using Aamdhane"
              className="w-96"
            />
          </div>
        </LayoutTwo>
      </div>
    </div>
  );
};
