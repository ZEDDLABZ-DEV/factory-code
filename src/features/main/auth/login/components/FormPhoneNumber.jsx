import React, { useState } from "react";

import { countryCode as countryCodes } from "../data/countryCode";
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../../../firebase";

const FormPhoneNumber = ({ handleNextPage }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };
  const getOTP = async (e) => {
    e.preventDefault();
    const number = `${countryCode}${phoneNumber}`;
    try {
      const response = await setUpRecaptcha(number);
      if (response) {
        console.log(response);
        handleNextPage(true, response);
        toast.success("OTP Sent Successfully");
      }
    } catch (err) {
      toast.error(`Unable to Send the OTP. ${err.message}`);
    }
  };

  return (
    <form className="w-2/3" onSubmit={(e) => getOTP(e)}>
      <h1 className="text-h1 font-bold text-left text-mainText2 mb-2">
        Employer Sign In
      </h1>
      <p className="text-lg font-semibold text-mainText1 mb-1">
        Enter You Mobile No.
      </p>
      <div>
        <div className="flex flex-row">
          <select
            className="w-24 mr-3 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-white"
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="+91">{countryCode}</option>
            {countryCodes.map((data, index) => {
              return (
                <option key={index} value={data.dial_code}>
                  {data.dial_code}
                </option>
              );
            })}
          </select>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white"
          />
        </div>
        <div className="flex justify-center items-center p-1">
          <div id="recaptcha-container"></div>
        </div>
        <button
          type="submit"
          className="text-center w-full mt-4 bg-primaryBtn rounded py-2 text-md"
        >
          Get OTP
        </button>
      </div>
    </form>
  );
};

export default FormPhoneNumber;
