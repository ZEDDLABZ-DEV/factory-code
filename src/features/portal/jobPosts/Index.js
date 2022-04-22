import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import call from "../../../utils/call";
import JobPostCard from "./components/JobPostCard";


const JobPosts = () => {
  const [jobPostsData, setJobPostsData] = useState([]);

  const getData = () => {
    call({
      url: "/api/job?size=100",
      type: "GET",
    })
      .then((res) => setJobPostsData(res))
      .catch(() => {});
  };
  useEffect(() => getData(), []);

  console.log(jobPostsData)

  return (
    <div className="px-12 pt-10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
      <h1 className="text-h1 text-mainDashboard font-extraBold leading-6 ">
        Live Job Posts
      </h1>
      <Button>Create New</Button>
      </div>
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
  );
};

export default JobPosts;
