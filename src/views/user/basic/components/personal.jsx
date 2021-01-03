import React from "react";
import { Card, Row, Col, Form, Input, Radio, Select, Button } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox, NavGroup } from "@/components";

const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const Personal = (props) => {
  return (
    <>
      <Row>
        <Col span={18}>
          <Form {...layout} labelAlign="left">
            <Form.Item label="昵称：">
              <Input />
            </Form.Item>

            <Form.Item label="介绍：">
              <Input.TextArea />
            </Form.Item>

            <Form.Item label="性别：">
              <Radio.Group>
                <Radio value="2" defaultChecked>
                  保密
                </Radio>
                <Radio value="1">男</Radio>
                <Radio value="0">女</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="生日：">
              <Select className="w150">
                <Option value="1">12313</Option>
              </Select>
            </Form.Item>
            <Form.Item label="省市：">
              <Select className="w150">
                <Option value="1">上海市</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">保存</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={6}>
          <img src="http://127.0.0.1/user/110506372/photos/110506372.png" />
        </Col>
      </Row>
    </>
  );
};

export default Personal;
