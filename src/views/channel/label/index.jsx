import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  channel,
} from "@/utils";
import List from "./components/list";
import Detail from "./components/detail";

import { WeCheckbox, Quick, NavGroup, WeDrawer } from "@/components";
const { TabPane } = Tabs;
const { Nav } = NavGroup;
const { add, del, edit } = authorized.partner;
const { label: coding } = codings;

class Label extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "getFlag",
      data: {
        coding,
        channel_id: this.props.channel.id,
        type: "art",
      },
      node: `${this.props.channel.module}.label`,
    });
  };

  callback(key) {
    console.log(key);
  }

  render() {
    const { label } = this.props.module;

    return (
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          tabBarExtraContent={
            checkButtonAuth("add") && (
              <WeDrawer.Form
                name="新增标签"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth("add")}
                {...this.props}
              >
                <Detail />
              </WeDrawer.Form>
            )
          }
        >
          <TabPane tab="导航标签" key="1">
            <List dataSource={label} {...this.props} />
          </TabPane>
          <TabPane tab="分类标签" key="2">
            <List dataSource={label} {...this.props} />
          </TabPane>
          <TabPane tab="文档标签" key="3">
            <List dataSource={label} {...this.props} />
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel[channel().module],
    channel: channel(),
  }),
  dispatchToProps
)(Label);
