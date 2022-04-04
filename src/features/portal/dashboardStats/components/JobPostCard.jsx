import { Button } from "antd";
import React from "react";

const JobPostCard = () => {
  return (
    <div className="bg-mainSecondary shadow w-full my-5 p-3 rounded flex items-center justify-around">
      <div className="p-1">
        <h1 className="text-black font-semiBold text-xl pb-2">Job Title</h1>
        <p className="text-base">
          Details: <span className="font-bold py-1">Details</span>
        </p>
        <p className="text-base">
          Details: <span className="font-bold py-1">Details</span>
        </p>
        <p className="text-base">
          Details: <span className="font-bold py-1">Details</span>
        </p>
      </div>
      <div className="w-44 h-28 bg-slate-100 rounded flex flex-col items-center justify-evenly p-3">
        <h1 className="text-mainDashboard text-4xl font-semibold">120</h1>
        <p className="text-center text-base ">Workers Required</p>
      </div>
      <div className="w-44 h-28 bg-slate-100 rounded flex flex-col items-center justify-evenly p-3">
        <h1 className="text-mainDashboard text-4xl font-semibold">250</h1>
        <p className="text-center text-base">Application Received</p>
      </div>
      <div className="flex flex-col gap-5">
        <Button>Edit Application</Button>
        <Button>Review Application</Button>
      </div>
    </div>
  );
};

export default JobPostCard;
