import React from "react";
import { Card, Checkbox, Button, Input, Form, Radio, message } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";
import { Keyword, Editor, Preview } from "@/components";
import { CheckboxGroup } from "@/common";

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

  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
      },
      () => {
        if (this.state.params.id) {
          this.props.dispatch
            .fetch({
              api: "detail",
              data: {
                coding: "P0002",
                id: this.state.params.id,
              },
            })
            .then((res) => {
              this.formRef.current.setFieldsValue(res.result);
              const tag = res.result.keyword.split(",");
              res.result.keyword = tag;
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

    if (values.keyword) {
      values.keyword = `|${values.keyword.replace(/,/g, "|")}|`;
    }

    if (this.state.params.id) {
      this.props.dispatch
        .update({
          data: {
            coding: "P0002",
            id: this.state.params.id,
            keyword: this.state.dataSource.keyword.join(),
            content: this.state.dataSource.content,
            ...values,
          },
        })
        .then((res) => {
          message.info("编辑成功");
        });
    } else {
      debugger;
      this.props.dispatch
        .insert({
          data: {
            coding: "P0002",
            // keyword: this.state.dataSource.keyword.join(),
            // content: this.state.dataSource.content,
            channel_id: this.state.params.channel,
            ...values,
          },
        })
        .then((res) => {
          message.info("新增成功");
        });
    }
  };

  callback = (params) => {
    debugger;
    Object.assign(this.state.dataSource, params);
    this.setState({
      dataSource: this.state.dataSource,
    });
    this.formRef.current.setFieldsValue({ ...params });
  };

  render() {
    return (
      <div>
        <Card title={`${this.state.params.id ? "编辑" : "新增"}单页`}>
          <Form
            ref={this.formRef}
            {...layout}
            labelAlign="left"
            onFinish={this.onFinish}
          >
            <Form.Item label="名称" name="title">
              <Input className="input-sm input-250" />
            </Form.Item>
            <Form.Item label="页面标题" name="seotitle">
              <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="关键词" name="keyword">
              <Keyword
                field="keyword"
                value={this.state.dataSource.keyword}
                callback={this.callback}
                {...this.props}
              />
            </Form.Item>
            <Form.Item label="摘要" name="description">
              <Input.TextArea className="input-sm" />
            </Form.Item>
            <Form.Item label="顺序" name="sort">
              <Input className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="导航标识">
              <Input className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="启用" name="status">
              <Radio.Group>
                <Radio value="1" defaultChecked>
                  是
                </Radio>
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
            <Form.Item label="生成目录">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="设置">
              <Checkbox>跳转</Checkbox>
              <Checkbox>通用</Checkbox>
            </Form.Item>
            <Form.Item label="模板文件名" name="single_templates">
              <Input
                defaultValue="singlepage.htm"
                className="input-sm input-150"
              />
            </Form.Item>
            <Form.Item label="文件名" name="html">
              <Input className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="内容" name="content">
              <Editor
                value={this.state.dataSource.content}
                callback={this.callback}
              />
            </Form.Item>
            <Form.Item label="聚合标签" name="checkboxList">
              <CheckboxGroup
                dataSource={this.state.dataSource}
                flagList={this.state.flagList}
                callback={this.callback}
              />
            </Form.Item>
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

export default connect(
  (state) => ({
    module: state.navigation,
  }),
  dispatchToProps
)(Single);
