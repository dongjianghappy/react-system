import React from "react";
import { Input, Form } from "antd";

const Form1 = (props) => {
  return (
    <>
      <Form.Item label="频道模板" name="channel_templates">
        <Input
          defaultValue="index_article.htm"
          className="input-sm input-150"
        />
      </Form.Item>
      <Form.Item label="列表模板" name="list_templates">
        <Input defaultValue="list_article.htm" className="input-sm input-150" />
      </Form.Item>
      <Form.Item label="内页模板" name="arcticle_templates">
        <Input
          defaultValue="article_article.htm"
          className="input-sm input-150"
        />
      </Form.Item>
    </>
  );
};

export default Form1;
