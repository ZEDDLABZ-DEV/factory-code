import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import call from "../../../utils/call";

const JobPosts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://apitest.aamdhane.com/api/job?size=100", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.OA.K96AINFLP86PU7FCoLXlZQvUMPwFwduzx4Zc8cA911o`,
        },
      })
      .then((res) => setData(res?.data))
      .catch(() => {});
  };
  axios.get("https://apitest.aamdhane.com/api/job?size=100", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.OA.K96AINFLP86PU7FCoLXlZQvUMPwFwduzx4Zc8cA911o`,
    },
  });
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      key: "",
      title: "Heading 1",
      render: (data) => <p>{data?.id}</p>,
    },
    {
      key: "",
      title: "Heading 2",
      render: (data) => <p>{data?.id}</p>,
    },
    {
      key: "",
      title: "Heading 3",
    },
    {
      key: "",
      title: "Heading 4",
    },
    {
      key: "",
      title: "Heading 5",
    },
    {
      key: "",
      title: "ACtions",
      width: "auto",
      render: () => (
        <div className="felx-flex-row">
          <Button type="primary">Action1</Button>
          <Button type="primary">Action1</Button>
          <Button type="primary">Action1</Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      JobPosts
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default JobPosts;
