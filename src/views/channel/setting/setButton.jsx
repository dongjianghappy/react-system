import React from "react";
import { Card, Form, Switch } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox, Quick, NavGroup, WeDrawer } from "@/components";

const { Nav } = NavGroup;
const { add, del, edit } = authorized.partner;
const { label: coding } = codings;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

class SetButton extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "getFlag",
      data: {
        coding,
        channel_id: 3,
        type: "art",
      },
      node: "label",
    });
  }

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  render() {
    const { label } = this.props.module;

    return (
      <Card title="频道设置" bordered={false}>
        <Form {...layout} labelAlign="left" colon={false}>
          <Form.Item label="开关1">
            <Switch defaultChecked onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="开关2">
            <Switch defaultChecked onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="开关3">
            <Switch defaultChecked onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="开关4">
            <Switch defaultChecked onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="开关5">
            <Switch defaultChecked onChange={this.onChange} />
          </Form.Item>
          <Form.Item label="开关6">
            <Switch defaultChecked onChange={this.onChange} />
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(SetButton);
