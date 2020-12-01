import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Modal, Button } from "antd";
import "./style.less";
import { PictureOutlined } from "@ant-design/icons";
import ModalPicture from ".";
import MovePic from "./movePic";

const ModalPictureGrid = (props) => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const showModal = async () => {
    setVisible(true);
  };

  // 编辑和保存
  const handleOk = async () => {
    if (isEdit) {
      console.log("保存");
    }

    setIsEdit(!isEdit);
  };

  // 取消和关闭
  const handleCancel = (type) => {
    setData([]);
    setIsEdit(false);
    type === "close" && setVisible(false);
  };

  // 点击编辑后鼠标经过事件
  const MouseOver = (index) => {
    setCurrent(index);
  };

  // 移动回调方法
  const callback = (res) => {
    setData([...res]);
  };

  return (
    <>
      <div onClick={showModal} className="pointer">
        九宫格图片
      </div>

      <Modal
        title="image.png"
        width={750}
        visible={visible}
        centered
        onCancel={() => handleCancel("close")}
        footer={
          isEdit ? (
            <>
              <Button
                key="submit"
                type="primary"
                onClick={() => handleCancel("cancel")}
              >
                取消
              </Button>
              <Button key="submit" type="primary" onClick={handleOk}>
                保存
              </Button>
            </>
          ) : (
            <Button key="submit" type="primary" onClick={handleOk}>
              编辑
            </Button>
          )
        }
      >
        <div style={{ height: 462 }}>
          <Row>
            {((data.length > 0 && data) || props.data).map((item, index) => (
              <Col span={8} key={index} style={{ padding: 5 }}>
                {isEdit ? (
                  <>
                    <div
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 10000,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: current === index ? "block" : "none",
                      }}
                    >
                      <MovePic
                        data={{
                          source: (data.length > 0 && data) || props.data,
                          item,
                          index,
                        }}
                        callback={callback}
                      />
                    </div>

                    <img
                      src={item}
                      width="100%"
                      onMouseOver={() => MouseOver(index)}
                    />
                  </>
                ) : (
                  <ModalPicture src={item}>
                    <img src={item} width="100%" />
                  </ModalPicture>
                )}
              </Col>
            ))}
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default ModalPictureGrid;
