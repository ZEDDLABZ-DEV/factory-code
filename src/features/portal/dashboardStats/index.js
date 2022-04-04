import React, { useContext, useEffect, useReducer } from "react";
import Card from "./components/card";
import call from "../../../utils/call";
import { UserContext } from "../../../App";
import axios from "axios";
const DashboardStats = () => {
  const [data, setData] = useReducer(
    (state, diff) => ({ ...state, ...diff }),
    {}
  );
  const userDetails = useContext(UserContext);
  console.log(userDetails);
  const getData = () => {
    Promise.all([
      call({
        url: "https://apitest.aamdhane.com/api/count/jobs",
        type: "GET",
      }),

      call({
        url: "https://apitest.aamdhane.com/api/count/applications",
        type: "GET",
      }),
      call({
        url: "https://apitest.aamdhane.com//api/count/labourers",
        type: "GET",
      }),
      call({
        url: "https://apitest.aamdhane.com/api/count/mills",
        type: "GET",
      }),
    ])

      .then((res) => {
        console.log(res);
        setData({
          jobs: res[0],
          jobApplications: res[1],
          workers: res[2],
          mills: res[3],
        });
      })
      .catch(() => {});
  };
  useEffect(() => getData(), []);
  const { jobs, jobApplications, mills, workers } = data;
  console.log(jobs, jobApplications, mills, workers);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="px-20 pt-20">
        <h1 className="text-h1 text-mainDashboard font-semibold leading-6 pb-2">
          Hi mukesh!
        </h1>
        <p className="text-md font-bold leading-4 text-mainDashboardText2">
          Welcome to aamdhane
        </p>
        <div className="pt-24 flex flex-row justify-evenly">
          <Card title="Total Job posts" text={jobs?.totalJobs} />
          <Card
            title="Pending Applications"
            text={jobApplications?.pendingApplications}
          />
          <Card
            title="Accepted Applications"
            text={jobApplications?.acceptedApplications}
          />
          <Card title="Total Job posts" text={12} />
        </div>
      </div>
      <div className="h-16 shadow-lg mt-auto bg-white w-full flex flex-row justify-center  space-x-6">
        <h1 className="text-sm text-mainDashboard font-semibold leading-6 flex flex-row text-center ">
          Total workers on Aamdhane{" "}
          <p className="text-lg text-mainDashboard font-extraBold leading-6 px-4">
            {workers?.totalLabourers}
          </p>
        </h1>
        <h1 className="text-sm text-mainDashboard font-semibold leading-6 flex flex-row text-center ">
          Total workers on Aamdhane{" "}
          <p className="text-lg text-mainDashboard font-extraBold leading-6 px-4">
            {mills?.totalMills}
          </p>
        </h1>
      </div>
    </div>
  );
};

export default DashboardStats;
