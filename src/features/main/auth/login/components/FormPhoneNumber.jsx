import React, { useState } from "react";

import { countryCode as countryCodes } from "../data/countryCode";
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormPhoneNumber = ({ handleNextPage }) => {
  const [countryCode, setCountryCode] = useState("+91");

  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };

  const getOTP = async (values) => {
    const number = `${countryCode}${values.phoneNumber}`;
    try {
      const response = await setUpRecaptcha(number);
      if (response) {
        console.log(response,"Auth Response")
        handleNextPage(true, response , number);
        toast.success("OTP Sent Successfully");
      }
    } catch (err) {
      toast.error(`Unable to Send the OTP. ${err.message}`);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(999999999, "Too Short")
        .max(9999999999, "Too Long")
        .required("A phone number is required"),
    }),
    onSubmit: (values) => {
      getOTP(values);
    },
  });

  return (
    <form className="w-2/3" onSubmit={formik.handleSubmit}>
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
            inputmode="numeric"
            {...formik.getFieldProps("phoneNumber")}
            type="text"
            className={`w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest ring-2 ring-white ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "focus:ring-red-600 border-2 border-red-600 ring-0"
                : "focus:ring-primaryBtn"
            }`}
          />
        </div>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-right text-red-600 font-semibold">
            {formik.errors.phoneNumber}
          </div>
        ) : null}
        <div className="flex justify-center items-center p-1"></div>
        <button
          type="submit"
          className={`text-center w-full mt-4 bg-primaryBtn rounded py-2 text-md text-white font-bold ${
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "opacity-50 hover:cursor-default"
              : "opacity-100"
          }`}
        >
          Get OTP
        </button>
        <div className="flex items-center justify-center mt-4">
          <div id="recaptcha-container"></div>
        </div>
      </div>
    </form>
  );
};

export default FormPhoneNumber;
