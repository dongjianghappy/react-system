import React from "react";
import {
  Space,
  Card,
  Table,
  Checkbox,
  Button,
  Input,
  Form,
  Radio,
  message,
} from "antd";
import {
  Status,
  R_button,
  WeDrawer,
  WeCheckbox,
  Dialog,
  R_form,
  Keyword,
  Editor,
} from "../../components/index.js";

import { connect } from "react-redux";
import dispatchToProps from "../../store/dispatch";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

class Single extends React.Component {
  form = React.createRef();

  state = {
    data: {},
  };

  async componentDidMount() {
    if (this.props.location.state && this.props.location.state.id) {
      const res = await this.props.fetch({
        api: "detail",
        data: {
          coding: "P0002",
          id: this.props.location.state.id,
        },
      });
      this.form.current.setFieldsValue(res.result);
      const tag = res.result.keyword.split(",");
      res.result.keyword = tag;
      this.setState({
        data: res.result,
      });
    }
  }

  onFinish = (values) => {
    if (this.props.location.state && this.props.location.state.id) {
      this.props
        .update({
          data: {
            coding: "P0002",
            id: this.props.location.state.id,
            keyword: this.state.data.keyword.join(),
            content: this.state.data.content,
            ...values,
          },
        })
        .then((res) => {
          message.info("编辑成功");
        });
    } else {
      this.props
        .insert({
          data: {
            coding: "P0002",
            keyword: this.state.data.keyword.join(),
            content: this.state.data.content,
            ...values,
          },
        })
        .then((res) => {
          message.info("新增成功");
        });
    }
  };

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
            <Form.Item label="名称" name="title">
              <Input className="input-sm input-250" />
            </Form.Item>
            <Form.Item label="页面标题" name="seotitle">
              <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="关键词">
              <Keyword
                field="keyword"
                value={this.state.data.keyword}
                change={this.setData}
                fetch={this.props.fetch}
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
            <Form.Item label="是否启用">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
              </Radio.Group>
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
            <Form.Item label="内容">
              <Editor
                field="content"
                value={this.state.data.content}
                change={this.setData}
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

const stateToProops = (state) => {
  return {
    module: state.navigation,
  };
};

export default connect(stateToProops, dispatchToProps)(Single);
