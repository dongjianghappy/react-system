import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeDrawer, NavGroup } from "@/components";
import { Option, Operatinavbar } from "@/common";
import List from "./components/list";
import Detail from "./components/detail";

const { add, del, edit } = authorized.link;
const { link: coding } = codings;
const { TabPane } = Tabs;

class Index extends React.Component {
  state = {
    request: {
      method: 1,
      apply_checked: 1,
      ...this.props.common.global.initPage,
    },
  };

  option = this.props.module.option;

  componentDidMount() {
    this.option[0].list.push(...React.$enums.linkType);
    this.getData({
      method: 0,
      apply_checked: 1,
    });
  }

  getData = (data) => {
    this.props.dispatch.select({
      data: {
        coding,
        ...this.state.request,
        ...data,
      },
    });
  };

  callback = (key) => {
    this.props.dispatch.searchField({
      data: {
        ...this.props.common.global.initPage,
      },
      node: "request",
    });
    this.props.dispatch.searchField({
      data: true,
      node: "clear",
    });

    let param = {};
    switch (key) {
      case "2":
        param = {
          method: 1,
          apply_checked: 1,
        };
        break;
      case "3":
        param = {
          method: 0,
          apply_checked: 0,
        };
        break;
      default:
        param = {
          method: 0,
          apply_checked: 1,
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
    const { initialValues } = this.props.module;

    return (
      <div>
        <Card className="mb15">
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}
            tabBarExtraContent={
              checkButtonAuth("add") && (
                <WeDrawer.Form
                  name="新增友情链接"
                  data={{ coding }}
                  initialValues={initialValues}
                  renderList={this.getData}
                  authorized={checkButtonAuth("add")}
                  {...this.props}
                >
                  <Detail />
                </WeDrawer.Form>
              )
            }
          >
            <TabPane tab="出售友链" key="1">
              <div className="mb15">
                <Option
                  option={this.option}
                  data={{ coding }}
                  renderList={this.getData}
                  // search={{ show: true }}
                  {...this.props}
                />
              </div>

              <List
                listType="1"
                renderList={this.getData}
                authorized={this.authorized}
                {...this.props}
              />
            </TabPane>
            <TabPane tab="交换友链" key="2">
              <List
                listType="2"
                renderList={this.getData}
                authorized={this.authorized}
                {...this.props}
              />
            </TabPane>
            <TabPane tab="申请友链" key="3">
              <List
                listType="3"
                renderList={this.getData}
                authorized={this.authorized}
                {...this.props}
              />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.link,
    common: state.common,
  }),
  dispatchToProps
)(Index);
