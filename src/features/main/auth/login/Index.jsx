import React, { useContext, useState } from "react";
import { Header } from "../../components/Header";
import LayoutOne from "../../components/layoutOne";
import LayoutTwo from "../../components/layoutTwo";
import heroImage from "../../../../assets/images/heroImage.png";
import companyImage from "../../../../assets/images/factoryWithAamdhane.png";
import FormPhoneNumber from "./components/FormPhoneNumber";
import FormOtp from "./components/FormOtp";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";

export const Login = () => {
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [confirmResponse, setConfirmOtpResponse] = useState({});
  return (
    <div>
      <Header />
      <div className="flex flex-row z-0">
        <LayoutOne>
          <div className="flex flex-col items-center justify-center">
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
          <div className="flex flex-col w-full justify-center items-center">
            {verifyOtp ? (
              <FormOtp otpResponse={confirmResponse} />
            ) : (
              <FormPhoneNumber
                handleNextPage={(value, response) => {
                  setVerifyOtp(value);
                  setConfirmOtpResponse(response);
                }}
              />
            )}

            <h1 className="mt-2">
              Don't have an account yet ?{" "}
              <Link
                to="/signup"
                className=" font-bold hover:underline text-primaryBtn"
              >
                Sign Up
              </Link>
            </h1>
          </div>
        </LayoutTwo>
      </div>
    </div>
  );
};
