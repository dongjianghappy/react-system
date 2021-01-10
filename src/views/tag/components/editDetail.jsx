import React from "react";
import { Form, Radio } from "antd";

const Detail = (props) => {
  return (
    <>
      <Form.Item name="type">
        <Radio.Group>
          <Radio value="1" defaultChecked>
            核心词
          </Radio>
          <Radio value="2">目标词</Radio>
          <Radio value="0">长尾词</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default Detail;
