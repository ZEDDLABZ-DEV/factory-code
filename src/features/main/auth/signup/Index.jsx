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
        <LayoutOne>
          <div className="w-2/3 justify-start items-start">
            <div className="flex flex-col my-4">
              <label className="mb-4">Industry</label>
              <select className="w-1/2 mr-3 mb-6 text-md rounded py-2 shadow-md focus:outline-none focus:ring-primaryBtn ring-2 ring-white" />
            </div>
            <div className="flex flex-row mt-8">
              <div className="flex flex-col mr-4">
                <label className="mb-4">Factory name</label>
                <input className="w-full mb-6 text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4">Factory Address</label>
                <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4">Factory Address</label>
                <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="flex flex-col mr-4">
                <label className="mb-4">Factory name</label>
                <input className="w-full mb-6 text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4">Factory Address</label>
                <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4">Factory Address</label>
                <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="flex flex-col mr-4">
                <label className="mb-4">Factory name</label>
                <input className="w-full mb-6 text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
              </div>
              <div className="flex flex-col mx-4">
                <label className="mb-4">Factory Address</label>
                <input className="w-full text-md rounded py-2 shadow-md focus:outline-none px-3 tracking-widest focus:ring-primaryBtn ring-2 ring-white" />
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
