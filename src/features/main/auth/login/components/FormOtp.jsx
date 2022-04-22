import React, { useContext, useState } from "react";
import { UserContext } from "../../../../../App";
import call from "../../../../../utils/call";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const FormOtp = ({ otpResponse }) => {
  const userDetails = useContext(UserContext);
  const navigate = useNavigate();

  const { store, dispatch } = userDetails;
  const navigation = useNavigate();
  const verifyOtp = (values) => {
    otpResponse
      ?.confirm(values.otp)
      .then((res) => {
        toast.success("OTP Verified Successfully.");
        axios({
          method: "POST",
          url: "https://apitest.aamdhane.com/api/auth/app-user/login",
          data: {
            idToken: res?._tokenResponse?.idToken,
          },
        })
          .then((res) => {
            dispatch({ token: res?.data?.token });
            localStorage.setItem("jwt", JSON.stringify(res?.data?.token));
            axios({
              method: "GET",
              url: "https://apitest.aamdhane.com/api/auth/app-user/login",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${res?.data?.token}`,
              },
            })
              .then((res) => {
                dispatch({ data: res?.data });
                localStorage.setItem("userDetails", JSON.stringify(res?.data));
                navigation("/portal/dashboard");
              })
              .catch(() => {});
          })

          .catch(() => {});
      })
      .catch(() => {navigate("/signup"); toast.error("Invalid OTP or Unregistered User")});
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .min(6, "Too short")
        .max(6, "Too Long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      verifyOtp(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-2/3">
      <h1 className="text-h1 font-bold text-left text-mainText2 mb-2">
        Verify OTP
      </h1>
      <p className="text-sm font-semibold text-mainText1 mb-1">
        Enter the OTP we have sent to
      </p>
      <div>
        <div className="flex flex-row">
          <input
            {...formik.getFieldProps("otp")}
            className={`w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest ring-2 ring-white ${
              formik.touched.otp && formik.errors.otp
                ? "focus:ring-red-600 border-2 border-red-600 ring-0"
                : "focus:ring-primaryBtn"
            }`}
          />
        </div>
        {formik.touched.otp && formik.errors.otp ? (
          <div className="text-right text-red-600 font-semibold">
            {formik.errors.otp}
          </div>
        ) : null}
        <button
          type="submit"
          className={`text-center w-full mt-4 bg-primaryBtn rounded py-2 text-md text-white font-bold ${
            formik.touched.otp && formik.errors.otp
              ? "opacity-50 hover:cursor-default"
              : "opacity-100"
          }`}
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
};

export default FormOtp;
