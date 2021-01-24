import React from "react";
import { Card, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  datetime,
} from "@/utils";

import { Status, WeCheckbox } from "@/components";
import { Operatinavbar } from "@/common";

const { reply, del, edit } = authorized.messageBoard;
const { messageBoard: coding } = codings;

class Index extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "messageBoard",
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "messageBoard",
    });
  };

  render() {
    const { messageBoard } = this.props.module;
    return (
      <Card title="模板文件">
        <span
          onClick={() =>
            this.props.history.push(`/admin/template/detail?file=123`)
          }
        >
          模板文件
        </span>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.service,
  }),
  dispatchToProps
)(Index);
