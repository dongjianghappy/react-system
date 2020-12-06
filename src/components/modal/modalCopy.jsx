import React, { useState } from "react";

import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Copy = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  function confirm() {
    Modal.confirm({
      title: props.title,
      width: 550,
      icon: <ExclamationCircleOutlined />,
      content: props.children,
      okText: props.ok(),
      cancelText: "取消",
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <>
      <span onClick={confirm}>
        {props.icon ? <i className={`iconfont icon-${props.icon}`} /> : ""}
        {props.name}
      </span>
    </>
  );
};

export default Copy;
