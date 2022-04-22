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

  const [jobPosts, setJobPosts] = useReducer(
    (state, diff) => ({ ...state, ...diff }),
    {}
  );

  const userDetails = useContext(UserContext);
  console.log(userDetails, "Hello");

  const getData = () => {
    Promise.all([
      call({
        url: "/api/count/jobs",
        type: "GET",
      }),
      call({
        url: "/api/count/applications",
        type: "GET",
      }),
      call({
        url: "/api/count/labourers",
        type: "GET",
      }),
      call({
        url: "/api/count/mills",
        type: "GET",
      }),
    ])

      .then((res) => {
        setData({
          jobs: res[0]?.totalJobs,
          totalApplication: res[1]?.totalApplications,
          acceptedApplication: res[1]?.acceptedApplications,
          inReviewApplication: res[1]?.inReviewApplications,
          pendingApplication: res[1]?.pendingApplications,
          rejectedApplication: res[1]?.rejectedApplications,
          workers: res[2],
          mills: res[3],
        });
      })
      .catch((err) => console.log(err));
  };

  const getJobs = () => {
    Promise.all([
      call({
        url: "/api/job?size=100",
        type: "GET",
      }),
    ])
      .then((res) => {
        setJobPosts({
          jobPostsData: res[0],
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    getJobs();
  }, []);

  const {
    jobs,
    totalApplication,
    acceptedApplication,
    inReviewApplication,
    pendingApplication,
    rejectedApplication,
    workers,
    mills,
  } = data;
  const { jobPostsData } = jobPosts;
  console.log(jobPostsData);

  return (
    <div className="flex flex-col w-full h-full bg-[#F5F5F5] overflow-y-scroll">
      <div className="px-10 pt-10">
        <h1 className="text-h1 text-mainDashboard font-semibold leading-6 pb-4">
          Hi {userDetails?.store?.data?.name}
        </h1>
        <p className="text-md font-bold leading-4 text-mainDashboardText2">
          Welcome to aamdhane
        </p>
        <div className="pt-8 flex flex-wrap gap-10">
          <Card title="Total Job posts" text={jobs} />
          <Card title="Total Applications" text={totalApplication} />
          <Card title="Accepted Applications" text={acceptedApplication} />
          <Card title="In-Review Application" text={inReviewApplication} />
          <Card title="Pending Application" text={pendingApplication} />
          <Card title="Rejected Application" text={rejectedApplication} />
        </div>
      </div>
      <div className="px-10 pt-10 pb-14">
        <h1 className="text-h1 text-mainDashboard font-semibold leading-6 pb-4">
          Live Job Posts
        </h1>
        {jobPostsData?.map((data) => (
          <JobPostCard
            key={data.id}
            jobTitle={data.jobTitle}
            skills={data.skillReq}
            shiftSalary={data.salaryPerShift}
            expReq={data.expReq}
            reqWorkers={data.peopleReq}
          />
        ))}
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="h-12 mt-auto bg-white w-full flex flex-row justify-evenly items-center space-x-6" style={{boxShadow:"0px -1px 4px #e1e1e1"}}>
          <h1 className="text-sm text-mainDashboard font-semibold leading-6 flex flex-row text-center ">
            Total workers on Aamdhane{" "}
            <p className="text-xl text-mainDashboard font-extraBold leading-6 px-4">
              {workers?.totalLabourers}
            </p>
          </h1>
          <h1 className="text-sm text-mainDashboard font-semibold leading-6 flex flex-row text-center">
            Total Factories on Aamdhane{" "}
            <p className="text-xl text-mainDashboard font-extraBold leading-6 px-4">
              {mills?.totalMills}
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
