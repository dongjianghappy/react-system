import React, { Fragment, useState, useEffect } from "react";
import { Button, Modal, message, Card, Row, Col } from "antd";
import "./style.less";

const ModalCate = (props) => {
  const { dispatch, data } = props;
  const { coding, catcoing } = data;
  debugger;
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState({});

  const showModal = async () => {
    dispatch
      .fetch({
        api: "cateList",
        data: {
          coding: catcoing,
        },
        storage: true,
      })
      .then((res) => {
        setList(res.result);
      });
    setVisible(true);
    setCurrent({});
  };

  const handleOk = async () => {
    dispatch
      .fetch({
        api: "moveAticle",
        data: {
          coding,
          id: data.id,
          fid: current.value,
        },
      })
      .then((res) => {
        props.renderList && props.renderList();
        message.info("新增成功");
      });
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handelSelect = (params) => {
    setCurrent(params);
  };
  return (
    <>
      <div onClick={showModal} className="pointer">
        {props.children}
      </div>

      <Modal
        title={props.title || "分类选择"}
        width={props.width ? props.width * 1 : "50%"}
        visible={visible}
        centered
        onCancel={handleCancel}
        footer={
          props.footerBtn !== null
            ? [
                <Button key="back" onClick={handleCancel}>
                  取消
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                  确定
                </Button>,
              ]
            : null
        }
      >
        <div style={{ padding: "10px" }}>当前：{current.name}</div>
        <div className="cate-wrap">
          {list.map((item) => (
            <div key={item.id}>
              <div style={{ padding: "10px 0" }}>
                <div style={{ padding: "10px 0", fontWeight: "bold" }}>
                  <span
                    style={{ padding: "6px 10px" }}
                    className={current.id === item.id ? "current" : ""}
                    onClick={() =>
                      handelSelect({
                        id: item.id,
                        name: item.name,
                        value: `|${item.id}|`,
                      })
                    }
                  >
                    {item.name}
                  </span>
                </div>

                {item.list.map((items) => (
                  <div
                    key={items.id}
                    style={{ position: "relative", paddingLeft: 60 }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        padding: "6px 0",
                      }}
                    >
                      <span
                        style={{ padding: "6px 10px" }}
                        className={current.id === items.id ? "current" : ""}
                        onClick={() =>
                          handelSelect({
                            id: items.id,
                            name: `${item.name} > ${items.name}`,
                            value: `|${item.id}|${items.id}|`,
                          })
                        }
                      >
                        {items.name}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {items.list.map((aaa) => (
                        <div
                          key={aaa.id}
                          style={{ padding: "6px 10px" }}
                          className={current.id === aaa.id ? "current" : ""}
                          onClick={() =>
                            handelSelect({
                              id: aaa.id,
                              name: `${item.name} > ${items.name} > ${aaa.name}`,
                              value: `|${item.id}|${items.id}|${aaa.id}|`,
                            })
                          }
                        >
                          {aaa.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ModalCate;
