import React from "react";
import { Card, Space, Tabs } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeModal } from "@/components";

import List from "./components/list";
import Detail from "./components/detail";

const { TabPane } = Tabs;

const { add } = authorized.user.sign;
const { sign: coding } = codings.user;

class UserSign extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "sign",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { sign } = this.props.module;
    return (
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          tabBarExtraContent={
            <Space>
              {checkButtonAuth(add) ? (
                <WeModal.modalForm
                  name="新增选项"
                  data={{ coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth(add)}
                  {...this.props}
                >
                  <Detail />
                </WeModal.modalForm>
              ) : (
                ""
              )}
            </Space>
          }
        >
          <TabPane tab="积分设置" key="1">
            <List
              type="1"
              data={sign}
              {...this.props}
              renderList={() => this.getData(1)}
            />
          </TabPane>
          <TabPane tab="积分兑换" key="2">
            {/* <EmailList type="1" data={audit} {...this.props} getData={() => this.getData(1)} /> */}
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserSign);
