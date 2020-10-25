import React from 'react'
import { Modal, Button, Form, Input } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  };

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    onFinish = values => {
        debugger
        this.props.insert({
            coding: "P0015",
            fid: this.props.global.data.id,
            type: '1',
            ...values
        })
    }

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal} style={{position: 'absolute', bottom:30, right: 10}}>
          添加按钮
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          footer={false}
          onCancel={this.handleCancel}
        >
          <Form
          {...layout}
          ref={this.formRef}
          onFinish={this.onFinish} 
          >
                <Form.Item name="name" label="按钮">
                    <Input />
                </Form.Item>
                <Form.Item name="sort" label="顺序">
                    <Input />
                </Form.Item>
                <Form.Item name="authority" label="权限">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
          
          </Form>
        </Modal>
      </>
    );
  }
}

export default App