import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";

export const API_URL = "https://testapi.aamdhane.com/";
const UserToken = () => {
  const userDetails = useContext(UserContext);
  return userDetails;
};

const call = ({ type, url, body, headers }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: url?.includes("http") ? url : `${API_URL}${url}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.NA.uPbMfuJyLpfeecmvcNluf3UQ78VozLrQcdHGBYKrs6w`,
      },
    })
      .then((response) => {
        console.log("response", response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export default call;
