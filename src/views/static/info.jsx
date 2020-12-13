import React from "react";
import { Modal, message, Button } from "antd";

const warning = (props) => {
  Modal.warning({
    title: props.title,
    content: props.content,
    // okText: "请稍等...",
    // onOk(close) {},
  });
};

export default warning;
