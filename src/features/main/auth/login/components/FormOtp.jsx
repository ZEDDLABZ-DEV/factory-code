import React from "react";

const FormOtp = () => {
  return (
    <form className="w-2/3">
      <h1 className="text-h1 font-bold text-left text-mainText2 mb-2">
        Verify OTP
      </h1>
      <p className="text-sm font-semibold text-mainText1 mb-1">
        Enter the OTP we have sen to
      </p>
      <div>
        <div className="flex flex-row">
          <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
        </div>
        <button className="text-center w-full mt-4 bg-primaryBtn rounded py-2 text-md">
          Verify OTP
        </button>
      </div>
    </form>
  );
};

export default FormOtp;
