import React from "react";
import { Card, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";

import { WeCheckbox } from "@/components";

const { add, del, edit } = authorized.partner;
const { message: coding } = codings.service;

class ServiceMessage extends React.Component {
  state = {
    dataSource: {},
  };

  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "messageDetail",
        data: {
          id: getQuery().id,
          coding,
        },
      })
      .then((res) => {
        this.setState({ dataSource: res.result });
        this.props.dispatch.getDetail({
          api: "systemMessage",
          node: "system",
        });
      });
  }

  render() {
    const { message } = this.props.module;
    const { dataSource } = this.state;
    return (
      <Card>
        <h3>{dataSource.title}</h3>
        <h3>{dataSource.content}</h3>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.service,
  }),
  dispatchToProps
)(ServiceMessage);
