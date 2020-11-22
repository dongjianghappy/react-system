import React from "react";
import { Card, Row, Col, Space, Button } from "antd";
import { createStore } from "redux";
import reducer from "../../reducers/counter";
import Info from "./components/info";
import Logo from "./components/logo";
import Custom from "./components/custom";
import DividerForm from "@/components/form/dividerForm";
import { connect } from "react-redux";
import dispatchToProps from "../../store/dispatch";
import Article from "./components/addCustom";
import {
  Status,
  WeCheckbox,
  WeDrawer,
  R_button,
  ModalForm,
  Condition,
} from "../../components/index.js";
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
} from "../../common";
class Basic extends React.Component {
  componentDidMount() {
    this.props.select({
      api: "basicInfo",
      data: {
        page: 0,
        pagesize: 10,
        coding: "P0000",
      },
    });
  }

  handle = () => {
    this.props.InfoQuery();
  };

  handleClick = (data) => {
    this.props[data.dispatch](data);
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
      <>
        <Card>
          <Node node={this.props.node} fn={this.props.nodeMethod} />
          <div style={{ marginBottom: 15 }}>
            <ul className="navbar">
              <li>网站信息</li>
              <li>
                <ModalForm
                  action="add"
                  type="text"
                  {...this.props}
                  coding="P0000"
                  butName="自定义字段"
                >
                  <Article />
                </ModalForm>
              </li>
            </ul>
          </div>
        </Card>
      </>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: state.basic,
  };
};

export default connect(stateToProops, dispatchToProps)(Basic);
