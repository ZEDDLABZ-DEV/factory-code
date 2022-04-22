import { Button, Modal } from "antd";
import React, { useState } from "react";
import { colors, fontWeight } from "../../../../theme";

export const Label = ({ text }) => (
  <p className="text-sm text-modalText font-medium leading-5">{text}</p>
);

const ViewComplaint = ({ onCancel, visible, data }) => {
  return (
    <Modal footer={null} width="50%" onCancel={onCancel} visible={visible}>
      <div
        style={{
          flexDirection: "column",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          minHeight: 400,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 12,
          paddingBottom: 12,
          width: "100%",
        }}
      >
        <h2
          style={{
            paddingVertical: 12,
            fontSize: 20,
            color: colors.mainText1,
            fontWeight: fontWeight.semiBold,
          }}
        >
          Complaint No. {data?.id}
        </h2>
        <div
          style={{
            backgroundColor: "#FAFAFA",
            height: "228px",
            marginTop: 12,
            marginBottom: 12,
            width: "100%",
            borderRadius: "8px",
          }}
        >
          <p style={{ padding: 12 }}>{data?.issue}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>Raised on: {data?.dateOfIssue}</p>
          <Button>Reslove</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewComplaint;
