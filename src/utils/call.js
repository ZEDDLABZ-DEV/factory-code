import axios from "axios";

export const API_URL = "https://testapi.aamdhane.com/";

const token = JSON.parse(localStorage.getItem("jwt"));
const call = ({ type, url, body, headers }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: url?.includes("http") ? url : `${API_URL}${url}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export default call;
