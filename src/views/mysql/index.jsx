import React from "react";
import { Card, Space, Button, Tabs } from "antd";
import { connect, dispatchToProps, checkButtonAuth, authorized } from "@/utils";

import List from "./components/list";
import BackupManage from "./components/backup-manage";
const { TabPane } = Tabs;

class Mysql extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "mysql",
    });
  };

  getManage = () => {
    this.props.dispatch.select({
      api: "mysql",
      node: "manage",
    });
  };

  callback = (key) => {
    if (key === "1") {
      this.getData();
    } else if (key === "2") {
      this.getManage();
    }
  };

  render() {
    const { list, manage } = this.props.module;
    return (
      <Card>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="数据库列表" key="1">
            <List dataSource={list} {...this.props} />
          </TabPane>
          <TabPane tab="备份管理" key="2">
            <BackupManage dataSource={manage} {...this.props} />
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.mysql,
  }),
  dispatchToProps
)(Mysql);
