import React, { Fragment, useState, useEffect } from "react";
import { Modal } from "antd";
import "./style.less";
import { PictureOutlined } from "@ant-design/icons";

const ModalPicture = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = async () => {
    setVisible(true);
  };

  const handleOk = async () => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <>
      <div onClick={showModal} className="pointer">
        {props.children || <PictureOutlined />}
      </div>

      <Modal
        title="image.png"
        visible={visible}
        centered
        onCancel={handleCancel}
        footer={false}
      >
        <div
          style={{
            height: 462,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={props.src}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalPicture;
