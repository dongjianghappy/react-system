import React from "react";
import { Space, Card, Table, Checkbox, Button, Input, Form, Radio } from "antd";
import { Keyword } from "@/components";

const Form1 = (props) => {
  const { params, dataSource, callback } = props;

  debugger;
  return (
    <>
      <Form.Item label="SEO标题" name="seotitle">
        <Input className="input-sm input-350" />
      </Form.Item>
      <Form.Item label="关键词" name="keyword">
        <Keyword
          field="keyword"
          value={dataSource.keyword}
          callback={callback}
          {...params}
        />
      </Form.Item>
      <Form.Item label="描述" name="description">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default Form1;
