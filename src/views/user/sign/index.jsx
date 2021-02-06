import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeModal } from "@/components";

import List from "./components/list";
import Detail from "./components/detail";

const { add } = authorized.user.sign;
const { sign: coding } = codings.user;

class UserSign extends React.Component {
  componentDidMount() {
    this.getData();
  }

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

  render() {
    const { sign } = this.props.module;
    return (
      <Card>
        <div className="nav-title">
          积分设置
          <span className="right">
            {checkButtonAuth(add) && (
              <WeModal.modalForm
                name="新增选项"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeModal.modalForm>
            )}
          </span>
        </div>
        <List
          type="1"
          data={sign}
          {...this.props}
          renderList={() => this.getData(1)}
        />
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
