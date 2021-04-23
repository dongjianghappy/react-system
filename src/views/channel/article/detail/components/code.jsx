import React from "react";
import { Tabs, Input, Form } from "antd";
const { TabPane } = Tabs;
const Code = (props) => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="HTML代码" key="1">
          <Form.Item name="htmlcode">
            <Input.TextArea
              placeholder="演示链接地址"
              className="input-sm"
              style={{ height: "200px" }}
            />
          </Form.Item>
        </TabPane>

        <TabPane tab="CSS样式" key="2">
          <Form.Item name="csscode">
            <Input.TextArea
              placeholder="演示链接地址"
              className="input-sm"
              style={{ height: "200px" }}
            />
          </Form.Item>
        </TabPane>

        <TabPane tab="JS代码" key="3">
          <Form.Item name="jscode">
            <Input.TextArea
              placeholder="演示链接地址"
              className="input-sm"
              style={{ height: "200px" }}
            />
          </Form.Item>
        </TabPane>
      </Tabs>
    </>
  );
};
export default Code;
