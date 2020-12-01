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
    debugger;
    const { grade } = this.props.module;
    return (
      <>
        <NavGroup
          onChange={this.callback}
          extra={
            checkButtonAuth(add) ? (
              <WeModal.modalForm
                name="新增功能应用权限"
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
          <Nav name="所有主题" value="1">
            <List
              type="1"
              data={grade}
              {...this.props}
              renderList={() => this.getData(1)}
            />
          </Nav>
          <Nav name="所有主题" value="2">
            <List
              type="2"
              data={grade}
              {...this.props}
              renderList={() => this.getData(2)}
            />
          </Nav>
        </NavGroup>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserGrade);
