import React from "react";
import { Card, Row, Col, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import Custom from "./components/custom";
import { WeModal, NavGroup, BasicInfo } from "@/components";

const { Nav } = NavGroup;
class Basic extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "basicInfo",
      data: {
        coding: "Q0002",
      },
      node: "list",
    });
  };

  componentDidMount() {
    this.getData();
  }

  handle = () => {
    this.props.select({
      api: "basicInfo",
      data: {
        page: 0,
        pagesize: 10,
        coding: "Q0002",
      },
    });
  };

  handleClick = (data) => {
    debugger;
    this.props[data.dispatch](data);
  };

  render() {
    const { list } = this.props.module;

    const baisc = list.filter((route) => route.isdelete === "1");
    const custom = list.filter((route) => route.isdelete === "0");
    debugger;
    return (
      <>
        <NavGroup
          extra={
            <WeModal.modalForm
              name="自定义字段"
              action="add"
              dispatch={this.props.dispatch}
              data={{ coding: "Q0002" }}
              renderList={this.getData}
              authorized={true}
            >
              <Custom />
            </WeModal.modalForm>
          }
        >
          <Nav name="服务信息" icon="111" value="1">
            <Card>
              <BasicInfo
                title="基本信息"
                dataSource={baisc}
                data={{ coding: "Q0002" }}
                dispatch={this.props.dispatch}
                renderList={this.getData}
              ></BasicInfo>
              <BasicInfo
                title="自定义管理"
                dataSource={custom}
                data={{ coding: "Q0002" }}
                dispatch={this.props.dispatch}
                renderList={this.getData}
              ></BasicInfo>
            </Card>
          </Nav>
        </NavGroup>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.service,
  }),
  dispatchToProps
)(Basic);
