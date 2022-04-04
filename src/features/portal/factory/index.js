import React, { useContext } from "react";
import { UserContext } from "../../../App";

const Factory = () => {
  const userDetails = useContext(UserContext);
  return <div>Factory page</div>;
};

export default Factory;
