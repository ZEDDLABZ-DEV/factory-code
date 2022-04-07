import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import call from "../../../utils/call";
import ViewComplaint from "./components.js/modal";

const Complaints = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [complaintDetail, setComplaintDetail] = useState([]);

  const getData = () => {
    call({
      url: "https://apitest.aamdhane.com/api/complaint/millOwner",
      type: "GET",
    })
      .then((res) => setData(res))
      .catch(() => {});
  };
  useEffect(() => {
    getData();
  }, []);
  const getCompaintDetail = (id) => {
    call({
      url: `https://apitest.aamdhane.com/api/complaint/millOwner${id}`,
      type: "GET",
    })
      .then((res) => setComplaintDetail(res))
      .catch(() => {});
  };
  return (
    <div className=" pt-20 px-20 h-full flex flex-col">
      <h1 className="text-lg text-mainDashboard font-semibold leading-6 pb-2">
        Complaints
      </h1>
      <p className="text-sm text-mainText1 font-extraBold leading-6 pb-4">
        Here, you’ll see all the complaints you receive from agents or workers
      </p>
      <Table />
      <Button
        onClick={() => {
          getCompaintDetail();
          setOpen(true);
        }}
      >
        Press
      </Button>
      <ViewComplaint
        visible={open}
        onCancel={() => setOpen(false)}
        data={complaintDetail}
      />
    </div>
  );
};

export default Complaints;
