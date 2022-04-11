import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

// Importing all the Components
import { Login } from "../main/auth/login/Index";
import { SignUp } from "../main/auth/signup/Index";
import Complaints from "../portal/complaints";
import { Dashboard } from "../portal/dashboard/Index";
import DashboardStats from "../portal/dashboardStats";
import Factory from "../portal/factory";
import CreateNewJobPosts from "../portal/jobPosts/createNewJobPosts";
import JobPosts from "../portal/jobPosts/Index";
import Workers from "../portal/workers";

export const Navigation = () => {
  const userDetails = useContext(UserContext);
  const navigate = useNavigate();

  const { store, dispatch } = userDetails;

  console.log(store?.token, store?.data);

  useEffect(() => {
    if (store?.token && store?.data) {
      navigate("/portal/dashboard");
    } else {
      const tokenLocal = JSON.parse(localStorage.getItem("jwt"));
      const userLocal = JSON.parse(localStorage.getItem("userDetails"));
      if (tokenLocal && userLocal) {
        dispatch({ data: userLocal, token: tokenLocal });
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Handling the Business User Routes */}

      {store?.token ? (
        <>
          <Route path="/portal" element={<Dashboard />}>
            <Route path="dashboard" element={<DashboardStats />} />
            <Route path="jobPosts" element={<JobPosts />} />
            <Route path="jobPosts/create" element={<CreateNewJobPosts />} />
            <Route path="factory" element={<Factory />} />
            <Route path="workers" element={<Workers />} />
            <Route path="complaints" element={<Complaints />} />
          </Route>
        </>
      ) : null}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
