import React from "react";
import { countryCode } from "../data/countryCode";

const FormPhoneNumber = () => {
  return (
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
  );
};

export default FormPhoneNumber;
