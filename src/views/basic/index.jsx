import React from "react";
import { Card, Space, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import Article from "./components/addCustom";
import { WeModal, BasicInfo } from "@/components";

const { add, del, edit } = authorized.basic;
const { basic: coding } = codings;

class Basic extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "basicInfo",
      data: {
        page: 0,
        pagesize: 10,
        coding,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { list } = this.props.module;
    const baisc = list.filter(
      (route) => route.isdelete === "1" && route.name !== "logo"
    );
    const logo = list.filter(
      (route) => route.isdelete === "1" && route.name === "logo"
    );
    const custom = list.filter((route) => route.isdelete === "0");
    return (
      <>
        <Card
          title="基本信息"
          extra={
            <WeModal.modalForm
              name="自定义字段"
              type="primary"
              action="add"
              dispatch={this.props.dispatch}
              data={{ coding: "P0000" }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
            >
              <Article />
            </WeModal.modalForm>
          }
        >
          <BasicInfo
            title="基本信息"
            dataSource={baisc}
            data={{ coding: "P0000" }}
            dispatch={this.props.dispatch}
            renderList={this.getData}
          ></BasicInfo>
          <BasicInfo
            title="网站LOGO"
            dataSource={logo}
            data={{ coding: "P0000" }}
            dispatch={this.props.dispatch}
            renderList={this.getData}
          ></BasicInfo>
          <BasicInfo
            title="自定义管理"
            dataSource={custom}
            data={{ coding: "P0000" }}
            dispatch={this.props.dispatch}
            renderList={this.getData}
          ></BasicInfo>
        </Card>
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.basic,
  }),
  dispatchToProps
)(Basic);
