import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing all the Components
import { Login } from "../main/auth/login/Index";
import { SignUp } from "../main/auth/signup/Index";
import { Dashboard } from "../portal/dashboard/Index";

export const Navigation = () => {
  const user = true;

  return (
    // <Routes>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />

    //   {/* Handling the Business User Routes */}

    //   {user ? (
    //     <>
    //       <Route path="/portal" element={<Dashboard />}>
    //         <Route path="dashboard" element={<div> Hello</div>} />
    //       </Route>
    //     </>
    //   ) : null}
    //   <Route path="*" element={<Login />} />
    // </Routes>
    <Login />
  );
};
