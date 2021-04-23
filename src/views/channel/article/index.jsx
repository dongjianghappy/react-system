import React from "react";
import { Card, Tabs, Button } from "antd";

import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
  channel,
} from "@/utils";

import { Operatinavbar } from "@/common";
import List from "./components/list";
import CheckedList from "./components/list_audit";
import ReturnList from "./components/list_return";

const { TabPane } = Tabs;
const mod = window.location.pathname.split("/")[2] || "";

const { add } = (authorized.channel[mod] && authorized.channel[mod].art) || {
  add: "",
};

class Index extends React.Component {
  state = {
    params: {},
    coding: {},
    request: {
      management_checked: 1,
      ...this.props.common.global.initPage,
    },
  };

  getData = (data) => {
    // this.state.params.fid && (params.fid = `|${this.state.params.fid}|`);

    this.props.dispatch.select({
      api: "articleList",
      data: {
        coding: this.state.coding.art,

        ...this.state.request,
        ...data,
      },
      node: `${this.props.channel.module}.list`,
    });
  };

  componentDidMount() {
    const mod = window.location.pathname.split("/")[2] || "";

    this.setState(
      {
        params: getQuery(),
        coding: codings[this.props.channel.module],
      },
      () => {
        this.getData();
        this.props.dispatch.select({
          api: "getFlag",
          data: {
            coding: this.state.coding.art,
            channel_id: this.props.channel.id,
            type: "art",
          },
          node: `${this.props.channel.module}.flags`,
        });
      }
    );
  }

  callback = (key) => {
    let param = {};
    switch (key) {
      case "2":
        param = {
          management_checked: 0,
        };
        break;
      case "3":
        param = {
          management_checked: -1,
        };
        break;
      default:
        param = {
          management_checked: 1,
        };
        break;
    }

    this.setState(
      {
        request: Object.assign(this.state.request, param),
      },
      () => {
        this.getData();
      }
    );
  };

  render() {
    const { module, channel } = this.props;
    return (
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          tabBarExtraContent={
            checkButtonAuth(add) && (
              <Button
                type="default"
                onClick={() =>
                  this.props.history.push(
                    `/admin/${channel.module}/list/detail`
                  )
                }
                authorized={checkButtonAuth(add)}
              >
                <i className="iconfont icon-add" />
                新增文档
              </Button>
            )
          }
        >
          <TabPane tab="文档管理" key="1">
            <List
              type="1"
              dataSource={module}
              codings={this.state.coding}
              renderList={this.getData}
              {...this.props}
            />
          </TabPane>

          <TabPane tab="正在审核" key="2">
            <CheckedList
              type="1"
              data={module.list}
              codings={this.state.coding}
              renderList={this.getData}
              {...this.props}
            />
          </TabPane>

          <TabPane tab="已退回" key="3">
            <ReturnList
              type="1"
              data={module.list}
              codings={this.state.coding}
              renderList={this.getData}
              {...this.props}
            />
          </TabPane>
        </Tabs>
        <Operatinavbar
          button={["all", "delete", "open", "close"]}
          data={{ list: module.checkedList, coding: this.state.coding.art }}
          renderList={this.getData}
          checkButtonAuth={checkButtonAuth}
          authorized={authorized}
          {...this.props}
        />
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    common: state.common,
    module: state.channel[channel().module],
    channel: channel(),
  }),
  dispatchToProps
)(Index);
