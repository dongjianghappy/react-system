import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";
import { NavGroup } from "@/components";
// import List from "./components/list";

const { Nav } = NavGroup;
const { operating: coding } = codings.log;
class Log extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "operating",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { operating } = this.props.module;
    return (
      <Card title="操作日志">
        <table width="100%" className="table-striped table-hover col-left-34">
          <tr class="th">
            <td class="col-md-1">id</td>
            <td class="col-md-1">用户</td>
            <td class="col-md-2">操作类型</td>
            <td class="col-md-4">JSON报文</td>
            <td class="col-md-2">IP</td>
            <td class="col-md-1">地区</td>
            <td class="col-md-2">操作时间</td>
          </tr>
          {operating.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.uid}</td>
              <td>{item.type}</td>
              <td style={{ whiteSpace: "nowrap" }}>{item.json}</td>
              <td>{item.ip}</td>
              <td>{item.area}</td>
              <td>{item.datetime}</td>
            </tr>
          ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.log,
  }),
  dispatchToProps
)(Log);
