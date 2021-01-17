import React from "react";
import { Switch, Row, Col } from "antd";
import ButtonGroup from "./buttonGroup";
import Pagination from "../components/pagination";

const Operatinavbar = (props) => {
  debugger;
  return (
    <Row>
      <Col span={8}>
        <ButtonGroup {...props}></ButtonGroup>
      </Col>
      <Col span={16} style={{ textAlign: "right" }}>
        <Pagination {...props} />
      </Col>
    </Row>
  );
};

export default Operatinavbar;
