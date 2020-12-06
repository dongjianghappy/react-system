import React from "react";
import { Row, Col, Button } from "antd";
import { UploadModal, WeModal } from "@/components";
import Detail from "./detail";
const Position = (props) => {
  return (
    <>
      <div
        style={{
          background: " #fff",
          left: 0,
          top: 0,
          right: 0,
          padding: "6px 0",
          height: "45px",
          lineHeight: "25px !important",
        }}
        className="absolute"
      >
        <Row>
          <Col span={12} style={{ lineHeight: "35px" }}>
            当前目录：upload (共有16文件)
          </Col>
          <Col span={12} style={{ textAlign: "end" }}>
            <Button onClick={() => props.goback()}>返回</Button>
            {props.show === "space" ? (
              <>
                <WeModal.modalForm
                  {...props}
                  name="新增目录"
                  authorized={true}
                  data={{ dir: props.dir }}
                  api="createfile"
                >
                  <Detail />
                </WeModal.modalForm>
                <UploadModal />
              </>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Position;
