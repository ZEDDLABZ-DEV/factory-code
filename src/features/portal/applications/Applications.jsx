import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import call from "../../../utils/call";
import { DataTable } from "../components/table/Index";

const Applications = (props) => {
  const params = useParams();
  const [data, setData] = useState([]);

  const getData = () => {
    call({
      url: `/api/job/${params.id}/applications`,
      type: "GET",
    })
      .then((res) => setData(res))
      .catch(() => {});
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className=" pt-20 px-20 h-full flex flex-col">
      <h1 className="text-h1 text-mainDashboard font-extraBold leading-6 mb-4">
        Complaints
      </h1>
      <p className="text-sm text-mainText1 font-extraBold leading-6 pb-4">
        Here, you’ll see all the complaints you receive from agents or workers
      </p>
      {/* <DataTable columns={columns} dataSource={data} /> */}
    </div>
  );
};

export default Applications;
