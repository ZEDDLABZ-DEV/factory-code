import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import call from "../../../utils/call";

const Workers = () => {
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
  console.log(data);
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
    <div className="px-20 pt-20 flex flex-col h-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg text-mainDashboard font-extraBold leading-6">
          {" "}
          Manage workers{" "}
        </h1>
        <div className="bg-white shadow-lg flex flex-row h-14 w-80 px-2 justify-between">
          <p>Total Workers</p>
          <p>20</p>
        </div>
      </div>
      <div className="my-8">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Workers;
