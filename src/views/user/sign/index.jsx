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

import { WeModal, NavGroup } from "@/components";

import List from "./components/list";
import Detail from "./components/detail";

const { Nav } = NavGroup;

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
      <NavGroup
        onChange={this.callback}
        extra={
          checkButtonAuth(add) ? (
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
          )
        }
      >
        <Nav name="积分设置" value="1">
          <Card>
            <List
              type="1"
              data={sign}
              {...this.props}
              renderList={() => this.getData(1)}
            />
          </Card>
        </Nav>

        <Nav name="积分兑换" value="2"></Nav>
      </NavGroup>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserSign);
