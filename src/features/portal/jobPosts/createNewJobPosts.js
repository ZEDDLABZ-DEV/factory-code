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
import { isEmpty } from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import call from "../../../utils/call";
import {
  experience,
  gender,
  hours,
  jobsTitle,
  salaryType,
  skills,
} from "./utils/tableData";

const CreateNewJobPosts = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(0);
  const [industry, setIndustry] = useState([]);
  const [dummy, setDummy] = useState([]);
  const { Option } = Select;

  const contentStyle = {
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const getTableData = () => {
    call({
      url: "/api/admin-tasks/dropdown/industryType",
      type: "GET",
    })
      .then((res) => setIndustry(res))
      .catch(() => {});
  };
  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div className="px-12 pt-10 flex flex-col h-full">
      <Table
        rowSelection={{
          onChange: (key, value) => {
            setData(value?.map((item) => ({ name: item.label, id: item.id })));
          },
        }}
        rowKey="id"
        columns={[
          {
            key: "job_title",
            title: "Job Title",
            width: "200px",
            render: (data, record, index) => <p>{industry[index]?.label}</p>,
          },
          {
            key: "experience",
            title: "Experience",
            width: "130px",
            render: (value, record, index) => {
              return (
                <Select
                  onChange={(value, option) =>
                    setData([
                      ...data.slice(0, index),
                      {
                        ...data[index],
                        experience: option,
                      },
                      ...data.slice(index + 1),
                    ])
                  }
                  value={data[index]?.experience}
                  className="w-24"
                  disabled={
                    isEmpty(data) ||
                    isEmpty(data.find((item) => item.id === record.id))
                  }
                >
                  {experience.map((item) => (
                    <Option key={item?.id}>{item?.name}</Option>
                  ))}
                </Select>
              );
            },
          },
          {
            key: "skills",
            title: "Skills Required",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value, option) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      skills: option,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.skills}
                className="w-28"
                disabled={
                  isEmpty(data) ||
                  isEmpty(data.find((item) => item.id === record.id))
                }
              >
                {industry[index]?.skill?.map((item) => (
                  <Option key={item?.id}>{item?.label}</Option>
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
                onChange={(value, option) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      gender: option,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.gender}
                className="w-24"
                disabled={
                  isEmpty(data) ||
                  isEmpty(data.find((item) => item.id === record.id))
                }
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
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      openings: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.openings}
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              />
            ),
          },
          {
            key: "salary_type",
            title: "Salary Type",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value, option) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      salaryType: option,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.salaryType}
                className="w-24"
                disabled={
                  isEmpty(data) ||
                  isEmpty(data.find((item) => item.id === record.id))
                }
              >
                {salaryType.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },

          {
            key: "shift",
            title: "Shifts",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value, option) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      shifts: option,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.shifts}
                className="w-24"
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              >
                {hours.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },
          {
            key: "salary",
            title: "Salary in rupee",
            width: "130px",
            render: (value, record, index) => (
              <Input
                onChange={(e) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      salary: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.salary}
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              />
            ),
          },

          {
            key: "shift_in_hours",
            title: "Shifts in hours",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value, option) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      overtimeHours: option,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.overtimeHours}
                className="w-24"
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              >
                {hours.map((item) => (
                  <Option key={item?.id}>{item?.name}</Option>
                ))}
              </Select>
            ),
          },
          {
            key: "overtime",
            title: "overtime salary in rupee",
            width: "130px",
            render: (value, record, index) => (
              <Input
                onChange={(e) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      overtimeSalary: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.overtimeSalary}
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              />
            ),
          },
          {
            key: "pf",
            title: "PF",
            width: "130px",
            render: (value, record, index) => (
              <Input
                onChange={(e) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      pf: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.pf}
                className="w-9"
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              />
            ),
          },
          {
            key: "esi",
            title: "ESI",
            width: "130px",
            render: (value, record, index) => (
              <Input
                onChange={(e) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      esi: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.esi}
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              />
            ),
          },
          {
            key: "additonal_details",
            title: "Additional Details",
            width: "130px",
            render: (value, record, index) => (
              <Input
                onChange={(e) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      additionalHours: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.additionalHours}
                disabled={
                  isEmpty(data) ||
                  Object.values(data).find((item) =>
                    item?.id !== record?.id ? true : false
                  )
                }
              />
            ),
          },
        ]}
        dataSource={industry}
        scroll={{ x: true }}
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
