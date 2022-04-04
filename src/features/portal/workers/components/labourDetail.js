import { Modal } from "antd";
import React, { useState } from "react";

export const Label = ({ text }) => (
  <p className="text-md text-mainDashboard font-medium leading-5">{text}</p>
);

const LabourDetail = ({ onCancel, visible }) => {


  return (
    <Modal width="80%" onCancel={onCancel} visible={visible}>
      <div className="h-full w-full flex flex-row justify-between space-y-4">
        <div>{/* Image comes here */}</div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row w">
            <Label text="Name" />
            <Label text="Name" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row w">
            <Label text="Name" />
            <Label text="Name" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LabourDetail;
