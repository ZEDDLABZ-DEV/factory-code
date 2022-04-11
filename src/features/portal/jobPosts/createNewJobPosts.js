import {
  Button,
  Carousel,
  Divider,
  Input,
  Modal,
  Radio,
  Select,
  Table,
} from "antd";
import React, { useEffect, useReducer, useState } from "react";
import {
  experience,
  gender,
  hours,
  jobsTitle,
  skills,
} from "./utils/tableData";

const CreateNewJobPosts = () => {
  const [data, setData] = useReducer(
    (value, diff) => ({
      ...value,
      ...diff,
    }),
    // Object.values(jobsTitle)
    []
  );
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(0);
  const { Option } = Select;

  const rowSelection = {
    onChange: (key, value) => {
      setData([...value]);
    },
  };
  const contentStyle = {
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  console.log(Object.values(data));
  return (
    <div>
      <Table
        rowSelection={{ ...rowSelection }}
        rowKey="id"
        columns={[
          {
            key: "job_title",
            title: "Job Title",
            width: "200px",
            render: (data, record, index) => <p>{jobsTitle?.[index]?.name}</p>,
          },
          {
            key: "experience",
            title: "Experience",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value) =>
                  setData({
                    [index]: {
                      ...data[index],
                      experience: value,
                    },
                  })
                }
                value={data[index]?.experience}
                className="w-24"
              >
                {experience.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },
          {
            key: "skills",
            title: "Skills Required",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value) =>
                  setData({
                    [index]: {
                      ...data[index],
                      skills: value,
                    },
                  })
                }
                value={data[index]?.skills}
                className="w-24"
              >
                {skills.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },
          {
            key: "gender",
            title: "Gender",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value) =>
                  setData({
                    [index]: {
                      ...data[index],
                      gender: value,
                    },
                  })
                }
                value={data[index]?.gender}
                className="w-24"
              >
                {gender.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },
          {
            key: "no_of_openings",
            title: "Number of openings",
            width: "130px",
            render: (value, record, index) => (
              <Input
                onChange={(e) =>
                  setData({
                    [index]: {
                      ...data[index],
                      openings: e.target.value,
                    },
                  })
                }
                value={data[index]?.openings}
              />
            ),
          },
          {
            key: "salary_type",
            title: "Salary Type",
            width: "130px",
          },
          {
            key: "shift",
            title: "Shifts",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value) =>
                  setData({
                    [index]: {
                      ...data[index],
                      shifts: value,
                    },
                  })
                }
                value={data[index]?.shifts}
                className="w-24"
              >
                {hours.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },
        ]}
        dataSource={jobsTitle}
      />
      <Button onClick={() => setModal(true)}>Review Jobs</Button>
      <Modal visible={modal} footer={null} onCancel={() => setModal(false)}>
        <Carousel afterChange={(value) => setView(value)}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
        </Carousel>
      </Modal>
    </div>
  );
};

export default CreateNewJobPosts;
