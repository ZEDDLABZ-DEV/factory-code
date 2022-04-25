import {
  Button,
  Carousel,
  Input,
  Modal,
  Select,
  Table,
  Row,
  Col,
  message,
} from "antd";
import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { experience, gender, hours, salaryType } from "./utils/tableData";
import { PreviewCard } from "./components/PreviewCard";
import { UserContext } from "../../../App";
import call from "../../../utils/call";

SwiperCore.use([Pagination, Navigation]);

const CreateNewJobPosts = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(0);
  const [jobTItle, setJobTitle] = useState([]);
  const [skillTitle, setSkillTitle] = useState([]);
  const [currentJobs, setCurrentJobs] = useState([]);
  const [previewModal, setPreviewModal] = useState(false);

  const [jobFormCount, setJobFormCount] = useState(1);

  const [currentSlide, setCurrentSlide] = useState(1);
  const { Option } = Select;

  const userContext = useContext(UserContext);
  console.log(userContext?.store?.data?.millOwner?.millInfo?.id);

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
      .then((res) =>
        res.map((data) => {
          console.log(data);
          console.log(
            userContext?.store?.data?.millOwner?.millInfo?.industryType
          );
          if (
            data?.label ===
            userContext?.store?.data?.millOwner?.millInfo?.industryType
          ) {
            setJobTitle(data.jobTitle);
            setSkillTitle(data.skill);
          }
        })
      )
      .catch(() => {});
  };
  useEffect(() => {
    getTableData();
  }, []);

  const previewJobs = (data) => {
    setPreviewModal(true);
    const jobs = [...data];
    const newData = { jobs };
    setCurrentJobs(jobs);
  };

  const createJob = (data) => {
    console.log(data);
    const jobs = [...data];
    const newData = { jobs };

    call({
      url: `/api/job/bulk-insert/${userContext?.store?.data?.millOwner?.millInfo?.id}`,
      type: "POST",
      body: newData,
    })
      .then((res) => console.log(res, "Hello 1"))
      .catch((err) => console.log(err, "Hello 2"));
  };

  return (
    <div className="px-12 pt-10 flex flex-col h-full">
      <Table
        pagination={false}
        rowSelection={{
          onChange: (key, value) => {
            setData(
              value?.map((item) => ({
                jobTitle: item.label,
                id: item.id,
                accommodation: "false",
                duringTraining: "1200",
                messFacility: "false",
                transportation: "false",
                medicalFacility: "false",
                delisted: "false",
                meal1: "Morning",
                meal2: "AfterNoon",
                meal3: "Night",
                mealType: "Morning/AfterNoon/Night",
              }))
            );
          },
        }}
        rowKey="id"
        columns={[
          {
            key: "jobTitle",
            title: "Job Title",
            width: "200px",
            render: (data, record, index) => <p>{jobTItle[index]?.label}</p>,
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
                        expReq: parseInt(option?.value),
                      },
                      ...data.slice(index + 1),
                    ])
                  }
                  value={data[index]?.expReq}
                  className="w-24 bg-slate-700"
                  disabled={
                    isEmpty(data) ||
                    isEmpty(data.find((item) => item.id === record.id))
                  }
                >
                  {experience.map((item) => (
                    <Option key={item?.id} value={item?.name}>
                      {item?.name}
                    </Option>
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
                      skillReq: option?.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.skill}
                className="w-28"
                disabled={
                  isEmpty(data) ||
                  isEmpty(data.find((item) => item.id === record.id))
                }
              >
                <Option value="unskilled">Unskilled</Option>
                {skillTitle?.map((item) => (
                  <Option key={item?.id} value={item?.label}>
                    {item?.label}
                  </Option>
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
                      genderPreference: option?.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.genderPreference}
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
                      peopleReq: e.target.value,
                    },
                    ...data.slice(index + 1),
                  ])
                }
                value={data[index]?.peopleReq}
                className="w-24"
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
            title: "Shifts In Hours",
            width: "130px",
            render: (value, record, index) => (
              <Select
                onChange={(value, option) =>
                  setData([
                    ...data.slice(0, index),
                    {
                      ...data[index],
                      workingHours: parseInt(option?.value),
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
              <div className="w-40 flex">
                <Input
                  onChange={(e) =>
                    setData([
                      ...data.slice(0, index),
                      {
                        ...data[index],
                        salaryPerShift: e.target.value,
                      },
                      ...data.slice(index + 1),
                    ])
                  }
                  value={data[index]?.salaryPerShift}
                  disabled={
                    isEmpty(data) ||
                    Object.values(data).find((item) =>
                      item?.id !== record?.id ? true : false
                    )
                  }
                />{" "}
                <h1 className="w-12 ml-2">
                  {data[index]?.salaryType?.children}
                </h1>
              </div>
            ),
          },

          {
            key: "overtime_in_hours",
            title: "Overtime in hours",
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
                className="w-24"
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
                className="w-24"
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
                className="w-24"
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
                className="w-60"
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
        dataSource={jobTItle}
        scroll={{ x: true }}
      />
      <Button onClick={() => previewJobs(data)}>Review Jobs</Button>
      <Modal
        visible={previewModal}
        className="jobs-preview-modal"
        onCancel={() => setPreviewModal(false)}
        title={
          <Row className="preview-modal-title">
            <Col>
              <h3>All Previews</h3>
            </Col>
            <Col>
              ({currentSlide}/{currentJobs.length})
            </Col>
          </Row>
        }
        footer={
          <Row className="preview-modal-footer">
            <Col>
              <h3 style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                Total Job Posts Created : {currentJobs.length}
              </h3>
            </Col>
            <Col>
              <Button
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                type="text"
                onClick={() => setPreviewModal(false)}
              >
                Cancel
              </Button>
              <Button className="add-job-btn" onClick={() => createJob()}>
                Post
              </Button>
            </Col>
          </Row>
        }
      >
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          navigation
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ padding: 5 }}
        >
          {currentJobs.map((cJob) => (
            <SwiperSlide>
              <PreviewCard jobData={cJob} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </div>
  );
};

export default CreateNewJobPosts;
