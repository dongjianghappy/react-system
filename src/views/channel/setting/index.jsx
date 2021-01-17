import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeCheckbox, WeDrawer, AsideGroup } from "@/components";
import Channel from "./channel";
import SetButton from "./setButton";
import Label from "../label";

const { Nav } = AsideGroup;
const { add, del, edit } = authorized.partner;
const { partner: coding } = codings;
const { TabPane } = Tabs;

class Index extends React.Component {
  componentDidMount() {
    // this.getData({
    //   level: 0,
    // });
  }

  getData = (params) => {
    this.props.dispatch.select({
      api: "userList",
      data: {
        ...params,
      },
      node: "user",
    });
  };

  onChange = (key) => {
    switch (key) {
      case "2":
        this.getData({
          level: 0,
        });
        break;
      case "4":
        this.getData({
          level: 2,
        });
        break;
      default:
    }
  };

  render() {
    const { user } = this.props.module;
    return (
      <>
        <AsideGroup onChange={this.onChange}>
          <Nav name="频道信息" icon="111" value="1">
            <Channel />
          </Nav>

          <Nav name="频道设置" value="2">
            <SetButton />
          </Nav>
          <Nav name="聚合标签" value="3">
            <Label />
          </Nav>
        </AsideGroup>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(Index);
