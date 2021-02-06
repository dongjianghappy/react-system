import React from "react";
import { Card, Button, Form, Input, Radio, message } from "antd";
import { connect, dispatchToProps, channel } from "@/utils";

import { Preview, Keyword } from "@/components";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 22 },
};

const mod = window.location.pathname.split("/")[2] || "";
const aaa = JSON.parse(sessionStorage.getItem("channel"));

// const bbb = aaa && aaa.filter((item) => item.module === mod);

class Basic extends React.Component {
  state = {
    dataSource: {},
  };

  formRef = React.createRef();

  componentDidMount() {
    this.props.dispatch
      .fetch({
        api: "detail",
        data: {
          coding: "O0000",
          id: this.props.channel.id,
        },
      })
      .then((res) => {
        this.formRef.current.setFieldsValue(res.result);
        this.setState({
          dataSource: res.result,
        });
      });
  }

  onFinish = (values) => {
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

    if (values.keyword) {
      values.keyword = `|${values.keyword.replace(/,/g, "|")}|`;
    }

    this.props.dispatch
      .update({
        data: {
          coding: "O0000",
          id: this.props.channel.id,
          ...values,
        },
      })
      .then(() => {
        message.info("编辑成功");
      });
  };

  // 在其他组件调用callback，设置字段值并以{name: value}的方式传回
  callback = (params) => {
    Object.assign(this.state.dataSource, params);
    this.setState({
      dataSource: this.state.dataSource,
    });
    this.formRef.current.setFieldsValue({ ...params });
  };

  render() {
    return (
      <>
        <Card title="频道信息" bordered={false}>
          <Form
            {...layout}
            ref={this.formRef}
            labelAlign="left"
            onFinish={this.onFinish}
          >
            <Form.Item label="频道名称" name="name">
              <Input
                className="input-mid input-350"
                placeholder="请输入频道名称"
              />
            </Form.Item>
            <Form.Item label="顺序" name="sort">
              <Input className="input-mid input-150" placeholder="请输入顺序" />
            </Form.Item>
            <Form.Item name="status" label="是否显示">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="预览图" name="image">
              <div style={{ width: 530 }}>
                <Preview
                  authorized={true}
                  value={this.state.dataSource.image}
                  callback={this.callback}
                  params={this.props}
                />
              </div>
            </Form.Item>
            <Form.Item label="页面标题">
              <Input.Group compact>
                <Form.Item name="seotitle" className="mr5">
                  <Input
                    className="input-mid input-350"
                    placeholder="请输入频道页面标题"
                  />
                </Form.Item>
                <Form.Item name="behind_title">
                  <Input
                    className="input-mid input-250"
                    placeholder="请输入频道名称标题后缀"
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item label="关键字" name="keyword">
              <Keyword
                value={this.state.dataSource.keyword}
                callback={this.callback}
                {...this.props}
              />
            </Form.Item>
            <Form.Item label="描述">
              <Input.Group compact>
                <Form.Item name="description" className="mr5">
                  <Input.TextArea
                    className="w500 h120"
                    placeholder="请输入频道页面描述"
                  />
                </Form.Item>
                <Form.Item name="behind_description">
                  <Input.TextArea
                    className="w350 h120"
                    placeholder="描述后缀"
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </>
    );
  }
}

export default connect((state) => {
  return { channel: channel() };
}, dispatchToProps)(Basic);
