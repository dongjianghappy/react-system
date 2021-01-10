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
  const [dataSource, setDataSource] = useState({});
  const [form] = Form.useForm();

  const getData = () => {
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
  };

  const showModal = () => {
    if (!props.authorized) {
      return warning();
    }

    if (action === "edit") {
      getData();
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
    // 如果是数组则没有选择，所以不需要进行更新
    if (Array.isArray(form.getFieldValue().image)) {
      if (form.getFieldValue().image[0].indexOf("http") === -1) {
        form.getFieldValue().image = `|${form
          .getFieldValue()
          .image.join("|")}|`;
      } else {
        delete form.getFieldValue().image;
      }
    }

    if (action === "add") {
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

  // 在其子他组件调用callback，设置字段值并以{name: value}的方式传回
  const callback = (params) => {
    Object.assign(dataSource, params);
    setDataSource({ ...dataSource });
    form.setFieldsValue({ ...params });
  };

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
          {props.children &&
            React.cloneElement(props.children, {
              callback, // 回到函数
              // form,
              dataSource, // 数据源
              params: props, // props属性
              renderDetail: getData, // 初始化接口
            })}
        </Form>
        {/* <Form {...layout} form={form} labelAlign="left">
          {props.children}
        </Form> */}
      </Modal>
    </>
  );
};

ModalForm.defaultProps = {
  action: "add",
  isText: false,
};

export default ModalForm;
