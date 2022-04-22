import { Button, Modal } from "antd";
import { DataTable } from "../components/table/Index";
import React, { useCallback, useEffect, useState } from "react";
import call from "../../../utils/call";
import LabourDetail from "./components/labourDetail";

const Workers = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [labourDetails, setLabourDetails] = useState({});

  const getData = () => {
    call({
      url: "/api/getAll/labourers",
      type: "GET",
    })
      .then((res) => setData(res))
      .catch(() => {});
  };

  const getLabourDetails = useCallback((id) => {
    call({
      url: `https://apitest.aamdhane.com/api/app-user?${id}`,
      type: "GET",
    })
      .then((res) => setLabourDetails(res))
      .catch(() => {});
  }, []);


  console.log(data)

  useEffect(() => getData(), []);

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
    <div className="px-12 pt-10 flex flex-col h-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-h1 text-mainDashboard font-extraBold leading-6">
          {" "}
          Manage workers{" "}
        </h1>
        <div className="bg-white flex flex-row w-80 justify-between text-md py-1 px-4 border-2 rounded">
          <p>
            Total
            <br /> Workers
          </p>
          <p className="font-bold text-h1">20</p>
        </div>
      </div>
      <div className="my-8">
        <DataTable columns={columns} dataSource={data} />
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
