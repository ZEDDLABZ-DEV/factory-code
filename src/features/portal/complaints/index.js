import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import call from "../../../utils/call";
import { DataTable } from "../components/table/Index";
import ViewComplaint from "./components/modal";

const Complaints = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [complaintDetail, setComplaintDetail] = useState([]);

  const getData = () => {
    call({
      url: "/api/complaint/millOwner",
      type: "GET",
    })
      .then((res) => setData(res))
      .catch(() => {});
  };
  useEffect(() => {
    getData();
  }, []);


  const columns = [
      {
        key: "complaintNo",
        title: "Complaint No.",
        render: (data) => <p>{data?.id}</p>,
      },
      {
        key: "issue",
        title: "Issue",
        render: (data) => <p className="w-80">{data?.issue}</p>,
      },
      {
        key: "raisedOn",
        title: "Raised On",
        render: (data) => <p>{data?.dateOfIssue}</p>,
      },
      {
        key: "action",
        title: "Action",
        render: (data) => <Button
        onClick={() => {
          setComplaintDetail(data)
          setOpen(true);
        }}
      >
        Review
      </Button>,
      },
  ]


  return (
    <div className=" pt-20 px-20 h-full flex flex-col">
      <h1 className="text-h1 text-mainDashboard font-extraBold leading-6 mb-4">
        Complaints
      </h1>
      <p className="text-sm text-mainText1 font-extraBold leading-6 pb-4">
        Here, you’ll see all the complaints you receive from agents or workers
      </p>
      <DataTable columns={columns} dataSource={data} />
      <ViewComplaint
        visible={open}
        onCancel={() => setOpen(false)}
        data={complaintDetail}
      />
    </div>
  );
};

export default Complaints;
