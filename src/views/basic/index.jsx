import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeModal, BasicInfo } from "@/components";
import Detail from "./components/detail";

const { add, del, edit } = authorized.basic;
const { basic: coding } = codings;

class Basic extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "basicInfo",
      data: {
        coding,
      },
    });
  };

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
      <Card>
        <div className="nav-title">
          基本信息
          <span className="right">
            {
              <WeModal.modalForm
                name="自定义字段"
                icon="add"
                type="default"
                data={{ coding: "P0000" }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeModal.modalForm>
            }
          </span>
        </div>
        <BasicInfo
          title="基本信息"
          dataSource={baisc}
          data={{ coding: "P0000" }}
          renderList={this.getData}
          {...this.props}
        ></BasicInfo>
        <BasicInfo
          title="网站LOGO"
          dataSource={logo}
          data={{ coding: "P0000" }}
          renderList={this.getData}
          {...this.props}
        ></BasicInfo>
        <BasicInfo
          title="自定义管理"
          dataSource={custom}
          data={{ coding: "P0000" }}
          renderList={this.getData}
          {...this.props}
        ></BasicInfo>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.basic,
  }),
  dispatchToProps
)(Basic);
