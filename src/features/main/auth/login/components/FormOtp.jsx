import React, { useContext, useState } from "react";
import { UserContext } from "../../../../../App";
import call from "../../../../../utils/call";

const FormOtp = ({ otpResponse }) => {
  const userDetails = useContext(UserContext);
  const [otp, setOtp] = useState("");
  const { store, dispatch } = userDetails;
  const sumbitForm = (e) => {
    e.preventDefault();
    otpResponse
      ?.confirm(otp)
      .then((res) =>
        call({
          route: "api/auth/app-user/login",
          type: "POST",
          body: res?._tokenResponse?.idToken,
        })
          .then((res) => dispatch({}))
          .catch(() => {})
      )
      .catch((e) => console.log("err", e));
  };

  return (
    <form onSubmit={(e) => sumbitForm(e)} className="w-2/3">
      <h1 className="text-h1 font-bold text-left text-mainText2 mb-2">
        Verify OTP
      </h1>
      <p className="text-sm font-semibold text-mainText1 mb-1">
        Enter the OTP we have sent to
      </p>
      <div>
        <div className="flex flex-row">
          <input
            onChange={(e) => setOtp(e.target.value)}
            type="number"
            className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white"
          />
        </div>
        <button
          type="submit"
          className="text-center w-full mt-4 bg-primaryBtn rounded py-2 text-md"
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
};



export default FormOtp;
