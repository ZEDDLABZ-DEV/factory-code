import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  DashboardOutlined,
  UnorderedListOutlined,
  QrcodeOutlined,
  FundProjectionScreenOutlined,
  FileOutlined,
  HistoryOutlined,
  FormOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/images/aamdhaneLogo.svg";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./styles/index.css";
import { HeaderElement } from "../components/layout/Header";

const { Content, Sider } = Layout;

export const Dashboard = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{ backgroundColor: "#0A6945" }}
      >
        <img
          src={Logo}
          alt=""
          className={`mx-auto w-44 my-1.5 ${collapsed ? "hidden" : "block"}`}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ backgroundColor: "#0A6945" }}
        >
          <Menu.Item
            key="1"
            icon={<DashboardOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/dashboard")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<UnorderedListOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/factory")}
          >
            Factory
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<QrcodeOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/jobPosts")}
          >
            Job Posts
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<FundProjectionScreenOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/workers")}
          >
            workers
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<FormOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/complaints")}
          >
            Complaints
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<FileOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/settings")}
          >
            Settings
          </Menu.Item>

          <Menu.Item
            key="7"
            icon={<HistoryOutlined style={{ fontSize: "18px" }} />}
            style={{ fontSize: "18px", display: "flex", color: "#fff" }}
            onClick={() => navigate("/portal/support")}
          >
            Support
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <HeaderElement />
        <Content style={{ backgroundColor: "#F5F5F5" }}>
          {/* For Managing Component Change within the Nested Routes Outlet is used*/}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
