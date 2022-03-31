import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";

export const API_URL = "https://sqlapi.aamdhane.com/";
const UserToken = () => {
  const userDetails = useContext(UserContext);
  const { token } = userDetails;
  return token;
};

const call = ({ type, url, body, headers }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: url.includes("http") ? url : `${API_URL}${url}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${UserToken()}`,
        ...headers,
      },
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export default call;
