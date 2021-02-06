import React, { Fragment } from "react";
import { Button, Modal, message, Form } from "antd";

// 这种常量可以定义在组件外，官网是这么定义的
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

export default class Dialog extends React.Component {
  formRef = React.createRef();
  state = { visible: false };

  showModal = () => {
    // 是否勾选
    //if(this.props.checked !== undefined && this.props.checked === false){
    if (this.props.dataSource && this.props.dataSource.length === 0) {
      message.info(this.props.messageTitle);
    } else {
      this.setState({
        visible: true,
      });
    }
  };

  handleOk = (e) => {
    console.log("sss");
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onFinish = (values) => {
    if (this.props.action === "add") {
      this.props.insert({
        m: "vue",
        coding: this.props.coding,
        ...values,
      });
    } else {
      this.props.update({
        m: "vue",
        coding: this.props.coding,
        id: this.props.global.data.id,
        ...values,
      });
    }
  };

  render() {
    const { visible } = this.state;
    const { butName, title, type, size, width, className } = this.props;

    return (
      <Fragment>
        {this.props.type === "text" ? (
          <span className={className} onClick={this.showModal}>
            {butName}
          </span>
        ) : (
          <Button
            className={className}
            type={type || "default"}
            size={size || "small"}
            onClick={this.showModal}
          >
            {butName}
          </Button>
        )}

        <Modal
          title={title || "提示信息"}
          width={width ? width * 1 : 500}
          visible={visible}
          onCancel={this.handleCancel}
          footer={false}
        >
          <Form {...layout} ref={this.formRef} onFinish={this.onFinish}>
            {this.props.children}
            <Form.Item>
              <Button htmlType="submit" type="primary">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}
