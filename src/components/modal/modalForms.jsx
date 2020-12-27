import React, { useState } from "react";
import { Modal, Button, Form, message } from "antd";
import warning from "./warning";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ModalForm = (props) => {
  const { dispatch, action } = props;
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    if (!props.authorized) {
      return warning();
    }

    if (action === "edit") {
      dispatch
        .fetch({
          api: "detail",
          data: {
            ...props.data,
          },
        })
        .then((res) => {
          form.setFieldsValue(res.result);
        });
    }

    if (props.render) {
      props.render();
    }

    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onFinish = () => {
    debugger;
    if (action === "add") {
      debugger;
      dispatch
        .insert({
          api: props.api,
          data: {
            ...props.data,
            ...form.getFieldsValue(),
          },
        })
        .then(() => {
          message.info("新增成功");
          setVisible(false);
          props.renderList && props.renderList();
        });
    } else {
      debugger;
      dispatch
        .update({
          api: props.api,
          data: {
            ...props.data,
            ...form.getFieldsValue(),
          },
        })
        .then(() => {
          message.info("编辑成功");
          setVisible(false);
          props.renderList && props.renderList();
        });
    }
  };

  const Text = () => (
    <>
      <span onClick={showModal}>
        {props.icon ? <i className={`iconfont icon-${props.icon}`} /> : ""}
        {props.name}
      </span>
    </>
  );

  const Buttons = () => (
    <>
      <Button onClick={showModal} type={props.type ? props.type : "default"}>
        {props.icon ? <i className={`iconfont icon-${props.icon}`} /> : ""}
        {props.name ? props.name : "Open"}
      </Button>
    </>
  );

  return (
    <>
      {props.isText === true ? <Text /> : <Buttons />}
      <Modal
        title={props.title || props.name}
        visible={visible}
        onOk={onFinish}
        onCancel={handleCancel}
        width={props.width}
      >
        <Form {...layout} form={form} labelAlign="left">
          {props.children}
        </Form>
      </Modal>
    </>
  );
};

ModalForm.defaultProps = {
  action: "add",
  isText: false,
};

export default ModalForm;
