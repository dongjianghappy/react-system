import React, { useEffect } from "react";
import { Card, Form, Input, Button, message } from "antd";

const EditFile = (props) => {
  const {
    dataSource: { content, file },
    dispatch,
  } = props;

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ content: content });
  }, [content]);

  const onFinish = (value) => {
    dispatch
      .update({
        api: "saveFile",
        data: {
          file: file,
          ...value,
        },
      })
      .then(() => {
        message.info("保存成功");
      });
  };

  return (
    <Card>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="content">
          <Input.TextArea className="editor-content" />
        </Form.Item>
        <Form.Item name="content">
          <Button type="primary" htmlType="submit" size="large">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EditFile;
