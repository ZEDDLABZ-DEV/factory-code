import React, { useContext, useEffect, useReducer } from "react";
import Card from "./components/card";
import call from "../../../utils/call";
import { UserContext } from "../../../App";
import axios from "axios";
import JobPostCard from "./components/JobPostCard";

const DashboardStats = () => {
  const [data, setData] = useReducer(
    (state, diff) => ({ ...state, ...diff }),
    {}
  );

  const userDetails = useContext(UserContext);
  console.log(userDetails, "Hello");

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

  return (
    <div className="flex flex-col w-full h-full bg-[#F5F5F5] ">
      <div className="px-10 pt-10">
        <h1 className="text-h1 text-mainDashboard font-semibold leading-6 pb-4">
          Hi {userDetails?.store?.data?.name}
        </h1>
        <p className="text-md font-bold leading-4 text-mainDashboardText2">
          Welcome to aamdhane
        </p>
        <div className="pt-8 flex flex-row justify-between">
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
      <div className="px-10 pt-10 pb-14">
        <h1 className="text-h1 text-mainDashboard font-semibold leading-6 pb-4">
          Live Job Posts
        </h1>
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="h-16 drop-shadow-lg mt-auto bg-white w-full flex flex-row justify-evenly items-center space-x-6">
          <h1 className="text-sm text-mainDashboard font-semibold leading-6 flex flex-row text-center ">
            Total workers on Aamdhane{" "}
            <p className="text-2xl text-mainDashboard font-extraBold leading-6 px-4">
              {workers?.totalLabourers}
            </p>
          </h1>
          <h1 className="text-sm text-mainDashboard font-semibold leading-6 flex flex-row text-center">
            Total Factories on Aamdhane{" "}
            <p className="text-2xl text-mainDashboard font-extraBold leading-6 px-4">
              {mills?.totalMills}
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
