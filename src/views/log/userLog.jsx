import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";

import List from "./components/list";

const { TabPane } = Tabs;
const { user: coding } = codings.log;
class Log extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "userLog",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { userLog } = this.props.module;
    return (
      <Card>
        <div className="nav-title">用户登录日志</div>
        <table width="100%" className="table-striped table-hover col-left-23">
          <tr class="th">
            <td class="col-md-1">管理员名称</td>
            <td class="col-md-1">身份</td>
            <td class="col-md-1">浏览器类型</td>
            <td class="col-md-1">语言</td>
            <td class="col-md-1">操作系统</td>
            <td class="col-md-1">IP</td>
            <td class="col-md-1">地区</td>
            <td class="col-md-2">登录时间</td>
          </tr>
          {userLog &&
            userLog.map((item, index) => (
              <tr>
                <td>{item.username}</td>
                <td>{item.grade}</td>
                <td>{item.browser}</td>
                <td>{item.lang}</td>
                <td>{item.device}</td>
                <td>{item.ip}</td>
                <td>{item.area}</td>
                <td>{item.login_time}</td>
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