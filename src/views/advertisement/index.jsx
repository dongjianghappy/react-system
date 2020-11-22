import React from "react";
import { Card, Space, Tabs } from "antd";

import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeDrawer } from "@/components";

import Detail from "./components/detail";

import Statistics from "./components/statistics";
import List from "./components/list";
const { TabPane } = Tabs;

const { add, del, edit } = authorized.advertisement;
const { advertisement: coding } = codings;

class Advertisement extends React.Component {
  option = [
    {
      name: "来源",
      field: "source",
      list: [
        {
          value: "",
          name: "全部",
        },
        ...React.$enums.adSource,
      ],
    },
    {
      name: "显示",
      field: "display",
      list: [
        {
          value: "",
          name: "全部",
        },
        ...React.$enums.adDisplay,
      ],
    },
    {
      name: "类型",
      field: "type",
      list: [
        {
          value: "",
          name: "全部",
        },
        ...React.$enums.adType,
      ],
    },
    {
      name: "状态",
      field: "status",
      list: [
        {
          val: "",
          name: "全部",
        },
        {
          value: "1",
          name: "开启",
        },
        {
          value: "0",
          name: "关闭",
        },
      ],
    },
  ];

  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  render() {
    const { list } = this.props.module;

    return (
      <div>
        <Statistics />
        <Card>
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}
            tabBarExtraContent={
              <Space>
                {checkButtonAuth(add) ? (
                  <WeDrawer.Form
                    name="新增广告"
                    icon="add"
                    data={{ coding }}
                    renderList={this.getData}
                    authorized={checkButtonAuth(add)}
                    {...this.props}
                  >
                    <Detail />
                  </WeDrawer.Form>
                ) : (
                  ""
                )}
              </Space>
            }
          >
            <TabPane tab="广告管理" key="1">
              <List
                type="1"
                data={list}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="广告申请" key="2">
              {/* <List type="1" data={list} {...this.props} getData={() => this.getData(1)} /> */}
            </TabPane>
            <TabPane tab="订单列表" key="3">
              {/* <ApplyList type="1" data={list} {...this.props} getData={() => this.getData(1)} /> */}
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.advertisement,
  }),
  dispatchToProps
)(Advertisement);
