import React, { useContext } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined, DownOutlined, BellOutlined } from "@ant-design/icons";
import { UserContext } from "../../../../App";

export const HeaderElement = () => {
  const { Header } = Layout;

  const userDetails = useContext(UserContext);

  const { store, dispatch } = userDetails;

  const DropDownMenu = () => (
    <Menu>
      <Menu.Item key="1" onClick={() => dispatch({ token: null })}>
        LogOut
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      style={{
        zIndex: 1,
        paddingLeft: "25px",
        backgroundColor: "#fff",
        boxShadow: "0px 3px 5px #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 className="text-mainDashboard text-base m-0 font-bold">Dashboard</h1>
      <div className="flex items-center">
        <BellOutlined
          style={{
            color: "#0A6945",
            backgroundColor: "#fff",
            fontSize: 28,
            borderRadius: 14,
            marginRight: 20,
          }}
        />

        <Dropdown overlay={DropDownMenu} className="cursor-pointer">
          <div className="flex items-center">
            <h1 className="text-mainDashboard text-base pr-3 m-0 font-bold">
              {store?.data?.millOwner?.millInfo?.millName}
            </h1>

            <div className="">
              <UserOutlined
                style={{
                  color: "#0A6945",
                  backgroundColor: "#fff",
                  fontSize: 28,
                  borderRadius: 14,
                }}
              />
              <DownOutlined style={{ color: "#0A6945", paddingLeft: 8 }} />,
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};
