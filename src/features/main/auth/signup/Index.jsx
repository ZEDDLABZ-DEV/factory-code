import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import LayoutOne from "../../components/layoutOne";
import LayoutTwo from "../../components/layoutTwo";
import heroImage from "../../../../assets/images/heroImage.png";
import companyImage from "../../../../assets/images/factoryWithAamdhane.png";
import call from "../../../../utils/call";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
  const [industryType, setIndustryType] = useState([]);

  const formik = useFormik({
    initialValues: {
      industryType: "",
      millOwner: "",
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
      millOwner: Yup.string().required("Required"),
      industryType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const getIndustryType = () =>
    Promise.all([
      call({
        url: "/api/admin-tasks/dropdown/industryType",
        type: "GET",
      })
        .then((res) => setIndustryType(res))
        .catch((err) => console.log(err)),
    ]);

    useEffect(() => getIndustryType(), [])
    

  return (
    <div>
      <Header />
      <div className="flex flex-row z-0">
        <LayoutOne>
          <div className="w-3/4 justify-start items-start">
            <h1 className="text-h1 text-mainText2 font-bold mt-16">
              Company Registration
            </h1>
            <div className="flex flex-col my-4">
              <label className="mb-4 text-lg font-semibold text-mainText1">
                Industry Type
              </label>
              <select className="w-1/2 mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2">
                <option value="">Select Industry Type</option>
                {
                  industryType.map((data) => <option value={data?.label}>{data?.label}</option>)
                }
              </select>
            </div>
            <div className="flex flex-row mt-4">
              <div className="flex flex-col mr-4">
                <label className="mb-4 text-lg font-semibold text-mainText1">
                  Factory name
                </label>
                <input className="w-full mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4 text-lg font-semibold text-mainText1">
                  Factory Address
                </label>
                <input className="w-full mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2" />
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="flex flex-col mr-4">
                <label className="mb-4 text-lg font-semibold text-mainText1">
                  Factory name
                </label>
                <input className="w-full mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4 text-lg font-semibold text-mainText1">
                  Factory Address
                </label>
                <input className="w-full mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2" />
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="flex flex-col mr-4">
                <label className="mb-4 text-lg font-semibold text-mainText1">
                  Factory name
                </label>
                <input className="w-full mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4 text-lg font-semibold text-mainText1">
                  Factory Address
                </label>
                <input className="w-full mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-mainDashboardText2 bg-mainDashboardText2 bg-opacity-5 px-2" />
              </div>
            </div>
          </div>
        </LayoutOne>
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
