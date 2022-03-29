import React from "react";
import { Header } from "../../components/Header";
import LayoutOne from "../../components/layoutOne";
import LayoutTwo from "../../components/layoutTwo";
import heroImage from "../../../../assets/images/heroImage.png";
import companyImage from "../../../../assets/images/factoryWithAamdhane.png";
import { countryCode } from "./data/countryCode";

export const Login = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row z-0">
        <LayoutOne>
          <div className=" flex flex-col items-center justify-center">
            <img src={heroImage} alt="" className="w-128" />
            <h1 className="text-h1 text-mainText2 w-2/3 text-center font-bold leading-tight">
              Hire the best blue collar workers across the country
            </h1>
            <p className="text-lg font-normal py-4 text-mainText2">
              One stop-solution for all worker market interactions
            </p>
            <p className="text-md font-semiBold text-mainText1">
              Trusted by 500+ factories across India
            </p>
            <img src={companyImage} alt="Factory Using Aamdhane" />
          </div>
        </LayoutOne>
        <LayoutTwo>
          <form className="w-2/3">
            <h1 className="text-h1 font-bold text-left text-mainText2 mb-2">
              Employer Sign In
            </h1>
            <p className="text-lg font-semibold text-mainText1 mb-1">
              Enter You Mobile No.
            </p>
            <div>
              <div className="flex flex-row">
                <select
                  type=""
                  className="w-24 mr-3 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-white"
                >
                  <option value="+91">+91</option>
                  {countryCode.map((data, index) => {
                    return (
                      <option key={index} value={data.dial_code}>
                        {data.dial_code}
                      </option>
                    );
                  })}
                </select>
                <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
              <button className="text-center w-full mt-4 bg-primaryBtn rounded py-2 text-md">
                Get OTP
              </button>
            </div>
          </form>
        </LayoutTwo>
      </div>
    </div>
  );
};
