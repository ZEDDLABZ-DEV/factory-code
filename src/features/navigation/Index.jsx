import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing all the Components
import { Login } from "../main/auth/login/Index";
import { SignUp } from "../main/auth/signup/Index";
import { Dashboard } from "../portal/dashboard/Index";
import DashboardStats from "../portal/dashboardStats";
import JobPosts from "../portal/jobPosts/Index";


export const Navigation = () => {
  const user = true;

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
          </Route>
        </>
      ) : null}
      {/* <Route path="*" element={<Login />} /> */}
    </Routes>
  );
};
