import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

export const HeaderElement = () => {
  const { Header } = Layout;

  const DropDownMenu = () => (
    <Menu>
      <Menu.Item key="1">User Profile</Menu.Item>
      <Menu.Item key="2">LogOut</Menu.Item>
    </Menu>
  );
  return (
    <Header
      style={{
        paddingLeft: "25px",
        backgroundColor: "#140035",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 className="text-white text-base m-0 font-bold">Dashboard</h1>
      <div className="flex">
        <Dropdown overlay={DropDownMenu} className="cursor-pointer">
          <div className="flex items-center">
            <h1 className="text-white text-base pr-3 m-0 font-bold">
              user.name
            </h1>

            <div className="">
              <UserOutlined
                style={{
                  backgroundColor: "#fff",
                  fontSize: 28,
                  borderRadius: 14,
                }}
              />
              <DownOutlined style={{ color: "#fff", paddingLeft: 8 }} />,
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};
