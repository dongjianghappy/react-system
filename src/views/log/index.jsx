import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps, codings } from "@/utils";
import { NavGroup } from "@/components";
import List from "./components/list";

const { Nav } = NavGroup;
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
      <NavGroup onChange={this.callback}>
        <Nav name="管理员登录日志" value="1">
          <Card>
            <List
              type="1"
              data={{ list, coding: coding1 }}
              {...this.props}
              getData={() => this.getData(1)}
              coding={coding1}
            />
          </Card>
        </Nav>
        <Nav name="用户登录日志" value="2">
          <Card>
            <List
              type="1"
              data={list}
              {...this.props}
              getData={() => this.getData(2)}
              coding={{ list, coding: coding2 }}
            />
          </Card>
        </Nav>
      </NavGroup>
    );
  }
}

export default connect(
  (state) => ({
    module: state.log,
  }),
  dispatchToProps
)(Log);
