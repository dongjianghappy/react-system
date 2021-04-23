import React from "react";
import { Card, Button, Form, Tabs, message } from "antd";
import {
  connect,
  dispatchToProps,
  codings,
  Link,
  getQuery,
  channel,
} from "@/utils";
import { WeAlert } from "@/components";
import BasicInfo from "./components/basicInfo";
import CustomField from "./components/customField";

const mod = window.location.pathname.split("/")[2] || "";
const { art: coding, cate: catcoing } = codings[mod];

const { TabPane } = Tabs;

class Index extends React.Component {
  formRef = React.createRef();

  state = {
    params: {},
    coding: {},
    dataSource: {},
    flagList: [],
  };

  onFinish = (values) => {
    if (document.getElementsByTagName("iframe") != 0) {
      values.content = document.getElementsByTagName(
        "iframe"
      )[0].contentWindow.window.document.body.innerHTML;
    }

    if (
      this.formRef.current.getFieldValue().image &&
      this.formRef.current.getFieldValue().image.length > 0 &&
      Array.isArray(this.formRef.current.getFieldValue().image)
    ) {
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

    if (this.state.params.id) {
      this.props.dispatch
        .fetch({
          api: "updateArticle",
          data: {
            coding: this.state.coding.art,
            id: this.state.params.id,
            ...values,
          },
        })
        .then((res) => {
          message.info("编辑成功");
        });
    } else {
      this.state.params.fid && (values.fid = `|${this.state.params.fid}|`);
      this.props.dispatch
        .fetch({
          api: "insertArticle",
          data: {
            coding: this.state.coding.art,
            ...values,
          },
        })
        .then((res) => {
          message.info("新增成功");
        });
    }
  };

  async componentDidMount() {
    this.setState(
      {
        params: getQuery(),
        coding: codings[this.props.channel.module],
      },
      () => {
        if (this.state.params.id) {
          this.props.dispatch
            .fetch({
              api: "articleDetail",
              data: {
                coding: this.state.coding.art,
                id: this.state.params.id,
              },
            })
            .then((res) => {
              this.formRef.current.setFieldsValue(res.result);
              this.setState({
                dataSource: res.result,
              });
            });
        }

        // this.props.dispatch
        //   .fetch({
        //     api: "getFlag",
        //     data: {
        //       channel_id: this.props.channel.id,
        //     },
        //   })
        //   .then((res) => {
        //     this.setState({
        //       flagList: res.result,
        //     });
        //   });
      }
    );
  }

  callback = (params) => {
    Object.assign(this.state.dataSource, params);
    this.setState({
      dataSource: this.state.dataSource,
    });
    this.formRef.current.setFieldsValue({ ...params });
  };

  render() {
    const { channel } = this.props;
    debugger;
    return (
      <Card>
        <Form
          ref={this.formRef}
          layout={{
            labelCol: { span: 2 },
            wrapperCol: { span: 22 },
          }}
          labelAlign="left"
          onFinish={this.onFinish}
        >
          <Tabs type="card">
            <TabPane tab="基本信息" key="1">
              <BasicInfo
                coding={{
                  art: this.state.coding.art,
                  cate: this.state.coding.cate,
                }}
                action={this.state.params.id ? "edit" : "add"}
                data={this.state.data}
                dataSource={this.state.dataSource}
                callback={this.callback}
                flags={this.state.flagList}
                {...this.props}
              />
            </TabPane>
            <TabPane tab="自定义变量" key="2">
              <WeAlert
                description={
                  <span
                    onClick={() =>
                      this.props.history.push(`/admin/customize/list?id=2`)
                    }
                  >
                    点击前往自定义字段关联
                  </span>
                }
              ></WeAlert>
              <CustomField {...this.props} channel={channel.id} />
            </TabPane>
          </Tabs>
          <Form.Item label=" " style={{ padding: "10px 25px" }}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel[channel().module],
    channel: channel(),
  }),
  dispatchToProps
)(Index);
