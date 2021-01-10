import React from "react";
import { Input, Form } from "antd";
import { Keyword } from "@/components";

const Pgae = (props) => {
  const { params, dataSource, callback } = props;

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

export default Pgae;
