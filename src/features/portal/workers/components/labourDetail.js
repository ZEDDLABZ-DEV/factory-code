import { Modal } from "antd";
import React, { useState } from "react";

export const Label = ({ text }) => (
  <p className="text-sm text-modalText font-medium leading-5">{text}</p>
);

const LabourDetail = ({ onCancel, visible, data }) => {
  console.log(data);
  return (
    <Modal width="50%" onCancel={onCancel} visible={visible}>
      <div
        style={{
          flexDirection: "row",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          minHeight: 400,
          alignItems: "center",
        }}
      >
        <div style={{ width: "10%" }}>Image</div>
        <div style={{ flexDirection: "column", display: "flex", width: "60%" }}>
          <p
            style={{
              fontSize: 36,
              color: "black",
              fontWeight: 600,
              paddingBottom: 20,
            }}
          >
            {data?.name}
          </p>

          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <Label text="Age" />
            <Label text={data?.age} />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <Label text="Experience" />
            <Label text={data?.millOwner?.expLevel} />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <Label text="phone number" />
            <Label text={data?.phone} />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <Label text="State" />
            <Label text={data?.state} />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <Label text="Experience" />
            <Label text={data?.millOwner?.expLevel} />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <Label text="Skills" />
            <Label text={data?.skills} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LabourDetail;
