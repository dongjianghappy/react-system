import React from "react";
import { Card, Row, Col, Space, Button } from "antd";
import { createStore } from "redux";
import reducer from "../../reducers/counter";
import DividerForm from "@/components/form/dividerForm";
import { connect } from "react-redux";
import dispatchToProps from "../../store/dispatch";
import Custom from "./components/custom";
import { WeModal, NavGroup } from "@/components";

const { Nav } = NavGroup;
class Basic extends React.Component {
  componentDidMount() {
    this.props.select({
      api: "basicInfo",
      data: {
        coding: "Q0002",
      },
      node: "list",
    });
  }

  handle = () => {
    this.props.select({
      api: "basicInfo",
      data: {
        page: 0,
        pagesize: 10,
        coding: "P0003",
      },
    });
  };

  handleClick = (data) => {
    debugger;
    this.props[data.dispatch](data);
  };

  render() {
    const { list } = this.props;

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
              data={{ coding: "P0000" }}
              renderList={this.getData}
            >
              <Custom />
            </WeModal.modalForm>
          }
        >
          <Nav name="服务信息" icon="111" value="1">
            <Card>
              <DividerForm
                title="基本信息"
                dataSource={baisc}
                {...this.props}
                coding="Q0002"
                handle={this.handle}
              ></DividerForm>
              <DividerForm
                title="自定义"
                dataSource={custom}
                {...this.props}
                coding="Q0002"
                handle={this.handle}
              ></DividerForm>
            </Card>
          </Nav>
        </NavGroup>
      </>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: "service",
    state,
    common: state.common,
    global: state.common.global,
    list: state.service.list,
  };
};

export default connect(stateToProops, dispatchToProps)(Basic);
