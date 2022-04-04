import { Button, Modal, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import call from "../../../utils/call";
import LabourDetail from "./components/labourDetail";

const Workers = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [labourDetails, setLabouDetails] = useState({});

  const getData = () => {
    call({
      url: "https://apitest.aamdhane.com/api/getAll/labourers",
      type: "GET",
    })
      .then((res) => setData(res))
      .catch(() => {});
  };
  useEffect(() => getData(), []);
  const getLabourDetails = useCallback((id) => {
    call({
      url: `https://apitest.aamdhane.com/api/app-user?${id}`,
      type: "GET",
    })
      .then((res) => setLabouDetails(res))
      .catch(() => {});
  }, []);
  console.log(labourDetails)
  const columns = [
    {
      key: "",
      title: "Name",
      render: (data) => <p>{data?.id}</p>,
    },
    {
      key: "",
      title: "Age",
      render: (data) => <p>{data?.id}</p>,
    },
    {
      key: "",
      title: "Gender",
      render: (data) => <p>{data?.gender}</p>,
    },
    {
      key: "",
      title: "Job Title",
      render: (data) => <p>{data?.title}</p>,
    },
    {
      key: "",
      title: "Salary",
      render: (data) => <p>{data?.salary}</p>,
    },
    {
      key: "",
      title: "Experience",
      render: (data) => <p>{data?.labour?.expLevel}</p>,
    },
    {
      key: "",
      title: "phone number",
      render: (data) => <p>{data?.phone}</p>,
    },

    {
      key: "",
      title: "Actions",
      width: "auto",
      render: (data) => (
        <div className="felx-flex-row">
          <href
            onClick={() => {
              setModal(true);
              getLabourDetails(data?.id);
            }}
            className=" font-bold hover:underline text-primaryBtn"
          >
            View Details
          </href>
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

      <LabourDetail
        width="80%"
        onCancel={() => setModal(false)}
        visible={modal}
        data={labourDetails}
      />
    </div>
  );
};

export default Workers;
