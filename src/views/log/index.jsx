import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";

import List from "./components/list";

const { TabPane } = Tabs;
const { manager: coding1, user: coding2 } = codings.log;
class Log extends React.Component {
  getData = (coding) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
    });
  };

  componentDidMount() {
    this.getData(coding1);
  }

  callback = (key) => {
    this.getData(key === "1" ? coding1 : coding2);
  };

  render() {
    const { list } = this.props.module;
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="管理员登录日志" key="1">
          <Card>
            <List type="1" dataSource={list} {...this.props} />
          </Card>
        </TabPane>
        <TabPane tab="用户登录日志" key="2">
          <Card>
            <List type="1" dataSource={list} {...this.props} />
          </Card>
        </TabPane>
      </Tabs>
    );
  }
}

export default connect(
  (state) => ({
    module: state.log,
  }),
  dispatchToProps
)(Log);
