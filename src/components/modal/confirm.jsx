import React from "react";
import { Modal, message, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import warning from "../modal/warning";

const Confirm = (props) => {
  const { dispatch, config } = props;
  const information =
    (config && config.message && config.message[config.operating]) || {};

  const showConfirm = () => {
    if (props.render && props.render()) {
      return;
    }

    Modal.confirm({
      title: information.title,
      icon: <ExclamationCircleOutlined />,
      content: props.config.content,
      onOk() {
        debugger;
        dispatch
          .fetch({
            api: props.api,
            data: {
              coding: props.coding,
              ...props.data,
              ...props.params,
            },
          })
          .then(() => {
            message.info(information.info);
            debugger;
            props.renderList && props.renderList();
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const Text = () => (
    <>
      <span onClick={props.authorized ? showConfirm : warning}>
        {props.icon ? <i className={`iconfont icon-${props.icon}`} /> : ""}
        {props.name}
      </span>
    </>
  );

  const Buttons = () => (
    <>
      <Button onClick={props.authorized ? showConfirm : warning}>
        {props.icon ? <i className={`iconfont icon-${props.icon}`} /> : ""}
        {props.name}
      </Button>
    </>
  );

  return <>{props.isText === true ? <Text /> : <Buttons />}</>;
};

Confirm.defaultProps = {
  isText: true,
};

export default Confirm;
