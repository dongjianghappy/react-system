import React from "react";
import { Card, Button, Form, Tabs, message, Input } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  Link,
  getQuery,
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
    params: {},
    dataSource: {},
    flagList: [],
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

    if (this.state.params.id) {
      this.props.dispatch
        .fetch({
          api: "updateArticle",
          data: {
            coding: coding,
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

    this.setState(
      {
        params: getQuery(),
      },
      () => {
        if (this.state.params.id) {
          this.props.dispatch
            .fetch({
              api: "articleDetail",
              data: {
                coding: coding,
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

        this.props.dispatch
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
                  coding={{ art: coding, cate: catcoing }}
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
                  channel={this.state.params.channel}
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
