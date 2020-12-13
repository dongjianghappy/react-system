import React from "react";
import { Card, Button, Form, Tabs, message, Input } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  Link,
} from "@/utils";
import { WeAlert } from "@/components";
import CustomField from "./components/customField";
import BasicInfo from "./components/basicInfo";

const mod = window.location.pathname.split("/")[2] || "";
const { art: coding, cate: catcoing } = codings[mod];

const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

class Single extends React.Component {
  formRef = React.createRef();

  state = {
    dataSource: {},
  };

  onFinish = (values) => {
    if (
      this.formRef.current.getFieldValue().image &&
      this.formRef.current.getFieldValue().image.length > 0 &&
      Array.isArray(this.formRef.current.getFieldValue().image)
    ) {
      debugger;
      if (
        this.formRef.current.getFieldValue().image[0].indexOf("http") === -1
      ) {
        values.image = `|${this.formRef.current
          .getFieldValue()
          .image.join("|")}|`;
      } else {
        delete values.image;
      }
    }

    if (values.tag) {
      values.tag = `|${values.tag.replace(/,/g, "|")}|`;
    }

    if (this.props.location.state && this.props.location.state.id) {
      this.props.dispatch
        .fetch({
          api: "updateArticle",
          data: {
            coding: coding,
            id: this.props.location.state.id,
            ...values,
          },
        })
        .then((res) => {
          message.info("编辑成功");
        });
    } else {
      this.props.dispatch
        .fetch({
          api: "insertArticle",
          data: {
            coding: coding,
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
      const res = await this.props.dispatch.fetch({
        api: "articleDetail",
        data: {
          coding: coding,
          id: this.props.location.state.id,
        },
      });
      this.formRef.current.setFieldsValue(res.result);
      this.setState({
        dataSource: res.result,
      });
    }
  }

  callback = (params) => {
    Object.assign(this.state.dataSource, params);
    this.setState({
      dataSource: this.state.dataSource,
    });
    this.formRef.current.setFieldsValue({ ...params });
  };

  render() {
    return (
      <div>
        <Card>
          <Form
            ref={this.formRef}
            {...layout}
            labelAlign="left"
            onFinish={this.onFinish}
          >
            <Tabs type="card">
              <TabPane tab="基本信息" key="1">
                <BasicInfo
                  data={this.state.data}
                  dataSource={this.state.dataSource}
                  callback={this.callback}
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
