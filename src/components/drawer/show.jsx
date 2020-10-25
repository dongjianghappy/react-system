import React from 'react'

import { Drawer, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'
import { SelectBox } from '..'

// 这种常量可以定义在组件外，官网是这么定义的
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};


export default class Drawers extends React.Component {

  formRef = React.createRef();
  state = { visible: false };

  componentDidMount(){

    // 当状态抽屉状态为true时则更新状态值
    if(this.props.global.drawer.status){
      this.setState({
        visible: true,
      });
    }
}

  onClose = () => {
    this.setState({
      visible: false,
    });

    // 延时更改状态，修复抽屉滑动隐藏
    setTimeout(() => {
      this.props.popup({
          node: "drawer"
      })
    }, 300)
  };

  render() {
    const { title } = this.props.global.drawer
    const modules = window.location.pathname.split("/")[2]
    const detail = this.props.state[modules].detail
    this.formRef.current && this.formRef.current.setFieldsValue(detail);

    return (
      <>
        <Drawer
          title={title}
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
            </div>
          }
        >
          {this.props.children}
          
        </Drawer>
      </>
    );
  }
}
