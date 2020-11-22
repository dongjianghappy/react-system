import React from "react";
import { Card, Row, Col, Space, Button, Form, Input, Tabs } from "antd";
import { connect } from "react-redux";
import dispatchToProps from "../../../store/dispatch";

import {
  Status,
  WeCheckbox,
  WeDrawer,
  R_button,
  ModalForm,
  Condition,
} from "../../../components/index.js";
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Keyword,
} from "../../../common";
import BasicInfo from "./components/basicInfo";
import PageInfo from "./components/pageInfo";

const { TabPane } = Tabs;
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 22 },
};

class Basic extends React.Component {
  state = {
    data: {},
    flagList: [],
  };

  formRef = React.createRef();

  componentDidMount() {
    if (this.props.location.state) {
      this.props
        .fetch({
          api: "detail",
          data: {
            coding: "P0001",
            id: this.props.location.state.id,
          },
        })
        .then((res) => {
          this.formRef.current.setFieldsValue(res.result);
        });
    }

    this.props
      .fetch({
        api: "getFlag",
        data: {
          channel_id: 0,
        },
      })
      .then((res) => {
        this.setState({
          flagList: res.result,
        });
      });
  }

  handle = () => {
    this.props.InfoQuery();
  };

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  onFinish = (values) => {
    if (!this.props.id) {
      this.props.insert({
        coding: "P0001",
        ...values,
      });
    } else {
      this.props.fetch({
        api: "update",
        data: {
          coding: "P0001",
          id: this.props.id,
          ...values,
        },
      });
    }
  };

  callback = (key) => {
    console.log(key);
  };

  render() {
    return (
      <>
        <Card>
          <Node node={this.props.node} fn={this.props.nodeMethod} />
          <div style={{ marginBottom: 15 }}>
            <h2 className="font18">新增导航</h2>
          </div>

          <div style={{ padding: 25 }}>
            <Form
              {...layout}
              ref={this.formRef}
              labelAlign="left"
              onFinish={this.onFinish}
            >
              <Tabs onChange={this.callback} type="card">
                <TabPane tab="导航信息" key="1">
                  <BasicInfo flags={this.state.flagList} />
                </TabPane>
                <TabPane tab="页面设置" key="2">
                  <PageInfo />
                </TabPane>
              </Tabs>
              ,
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </>
    );
  }
}

const stateToProops = (state) => {
  return {};
};

export default connect(stateToProops, dispatchToProps)(Basic);
