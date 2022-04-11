import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import call from "../../../utils/call";
// import call from "../../../utils/call";

const JobPosts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    call({
      url: "https://apitest.aamdhane.com/api/job?size=100",
      type: "GET",
    })
      .then((res) => setData(res?.data))
      .catch(() => {});
  };
  useEffect(() => getData(), []);
  const navigate = useNavigate();
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
      <Button onClick={() => navigate("/portal/jobPosts/create")}>
        Create new Job Post
      </Button>
    </div>
  );
};

export default JobPosts;
