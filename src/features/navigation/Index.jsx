import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../App";

// Importing all the Components
import { Login } from "../main/auth/login/Index";
import { SignUp } from "../main/auth/signup/Index";
import { Dashboard } from "../portal/dashboard/Index";
import DashboardStats from "../portal/dashboardStats";
import Factory from "../portal/factory";
import JobPosts from "../portal/jobPosts/Index";
import Workers from "../portal/workers";


export const Navigation = () => {
const userDetails = useContext(UserContext)
const {store} = userDetails
console.log(store)
const user = true
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Handling the Business User Routes */}

      {user ? (
        <>
          <Route path="/portal" element={<Dashboard />}>
            <Route path="dashboard" element={<DashboardStats />} />
            <Route path="jobPosts" element={<JobPosts />} />
            <Route path="factory" element={<Factory />} />
            <Route path="workers" element={<Workers />} />
          </Route>
        </>
      ) : null}
      {/* <Route path="*" element={<Login />} /> */}
    </Routes>
  );
};
