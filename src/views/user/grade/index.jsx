import React from "react";
import { Card, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeModal, NavGroup } from "@/components";
import List from "./components/list.jsx";
import Detail from "./components/detail";

const { Nav } = NavGroup;
const { add } = authorized.user.grade;
const { grade: coding } = codings.user;

const { TabPane } = Tabs;

class UserGrade extends React.Component {
  getData = (type) => {
    this.props.dispatch.select({
      api: "userGrade",
      data: {
        type: type - 1,
      },
      node: "grade",
    });
  };

  componentDidMount() {
    const type =
      (this.props.location.state && this.props.location.state.type) || 1;
    this.getData(type);
  }

  callback = (key) => {
    this.getData(key);
  };

  render() {
    const type = this.props.location.state && this.props.location.state.type;
    const { grade } = this.props.module;
    return (
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          tabBarExtraContent={
            checkButtonAuth(add) ? (
              <WeModal.modalForm
                name="新增权限"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeModal.modalForm>
            ) : (
              ""
            )
          }
        >
          <TabPane tab="功能权限" key="1">
            <List
              type="1"
              data={grade}
              {...this.props}
              renderList={() => this.getData(1)}
            />
          </TabPane>
          <TabPane tab="应用权限" key="2">
            <List
              type="2"
              data={grade}
              {...this.props}
              renderList={() => this.getData(2)}
            />
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
)(UserGrade);
