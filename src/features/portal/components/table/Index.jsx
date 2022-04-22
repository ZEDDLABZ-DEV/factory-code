import { Table } from "antd";
import "./table.css";

export const DataTable = (props) =>{ return (
  <div>
    <Table columns={props.columns} dataSource={props.dataSource} />
  </div>
)
}