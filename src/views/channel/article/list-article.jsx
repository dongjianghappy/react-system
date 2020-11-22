import React from "react";
import { Card, Button, Form, Tabs, message, Input } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import dispatchToProps from "@/store/dispatch";
import { WeAlert } from "@/components";
import CustomField from "./components/customField";
import BasicInfo from "./components/basicInfo";

const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

class Single extends React.Component {
  form = React.createRef();

  state = {
    data: {},
  };

  onFinish = (values) => {
    if (this.props.location.state && this.props.location.state.id) {
      this.props
        .fetch({
          api: "updateArticle",
          data: {
            coding: this.props.location.state.coding,
            id: this.props.location.state.id,
            tag: this.state.data.tag.join(),
            content: this.state.data.content,
            ...values,
          },
        })
        .then((res) => {
          message.info("编辑成功");
        });
    } else {
      this.props
        .fetch({
          api: "insertArticle",
          data: {
            coding: this.props.location.state.coding,
            tag: this.state.data.tag.join(),
            content: this.state.data.content,
            ...values,
          },
        })
        .then((res) => {
          message.info("新增成功");
        });
    }
  };

  async componentDidMount() {
    // this.props.getFlagAction()

    if (this.props.location.state && this.props.location.state.id) {
      const res = await this.props.fetch({
        api: "articleDetail",
        data: {
          coding: this.props.location.state.coding,
          id: this.props.location.state.id,
        },
      });
      this.form.current.setFieldsValue(res.result);
      const tag = res.result.tag.split(",");
      res.result.tag = tag;
      this.setState({
        data: res.result,
      });
    }
  }

  setData = (type, value) => {
    const data = { ...this.state.data };
    data[type] = value;
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <div>
        <Card>
          <Form
            ref={this.form}
            {...layout}
            labelAlign="left"
            onFinish={this.onFinish}
          >
            <Tabs type="card">
              <TabPane tab="基本信息" key="1">
                <BasicInfo
                  data={this.state.data}
                  setData={this.setData}
                  {...this.props}
                />
              </TabPane>
              <TabPane tab="自定义变量" key="2">
                <WeAlert
                  description={
                    <Link
                      to={{
                        pathname: "/admin/customize/list",
                        state: { id: 3 },
                      }}
                    >
                      点击前往自定义字段关联
                    </Link>
                  }
                ></WeAlert>
                <CustomField
                  {...this.props}
                  channel_id={this.props.location.state.channel_id}
                />
              </TabPane>
            </Tabs>

            <Form.Item label=" " style={{ padding: "10px 25px" }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: state.channel,
  };
};

export default connect(stateToProops, dispatchToProps)(Single);
