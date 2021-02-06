import React, { useState } from "react";
import { Form, Modal, Button, Select } from "antd";

const { Option, OptGroup } = Select;

const SetRole = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
    setData(props.roleData);
  };

  const onFinish = (values) => {
    setVisible(false);
    props.update({
      coding: "U0001",
      id: props.id,
      ...values,
    });
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type={props.type || "primary"}
        size={props.size || "small"}
        onClick={showModal}
      >
        {props.name || "Open Modal"}
      </Button>
      <Modal
        title={props.title || "Basic Modal"}
        visible={visible}
        onCancel={handleCancel}
        footer={false}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="角色名称" name="role">
            <Select defaultValue={props.role}>
              {data &&
                data.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SetRole;
