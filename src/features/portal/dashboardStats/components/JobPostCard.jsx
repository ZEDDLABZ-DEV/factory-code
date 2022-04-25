import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const JobPostCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-mainSecondary shadow w-full my-5 p-3 rounded flex items-center justify-around">
      <div className="p-1 w-1/3">
        <h1 className="text-black font-semiBold text-xl pb-2">
          {props.jobTitle}
        </h1>
        <p className="text-base">
          Shift Salary:{" "}
          <span className="font-bold py-1">{props.shiftSalary}</span>
        </p>
        <p className="text-base">
          Skills Required:{" "}
          <span className="font-bold py-1">{props.skills}</span>
        </p>
        <p className="text-base">
          Experience Required:{" "}
          <span className="font-bold py-1">{props.expReq}</span>
        </p>
      </div>
      <div className="w-44 h-28 bg-slate-100 rounded flex flex-col items-center justify-evenly p-3">
        <h1 className="text-mainDashboard text-4xl font-semibold">
          {props.reqWorkers}
        </h1>
        <p className="text-center text-base ">Workers Required</p>
      </div>
      <div className="w-44 h-28 bg-slate-100 rounded flex flex-col items-center justify-evenly p-3">
        <h1 className="text-mainDashboard text-4xl font-semibold">250</h1>
        <p className="text-center text-base">Application Received</p>
      </div>
      <div className="flex flex-col gap-5">
        <Button onClick={() => navigate(`/portal/Applications/${props.id}`)}>
          Edit Application
        </Button>
        <Button>Review Application</Button>
      </div>
    </div>
  );
};

export default JobPostCard;
