import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { connect } from 'react-redux'
import { SelectBox } from '../../components'
import dispatchToProps from '../../store/dispatch'
import Forms from './article';


// 这种常量可以定义在组件外，官网是这么定义的
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};

class AddArticle extends React.Component{

    formRef = React.createRef();

    componentDidMount(){
        this.props.getDetail({
            id: this.props.global.data.id
        })
    }

    onFinish = values => {
        if(this.props.global.data.action === "add"){
            this.props.insert({
                m: 'vue',
                coding: 'P0003',
                ...values
            })
        }else{
            this.props.update({
                m: 'vue',
                coding: 'P0003',
                id: this.props.global.data.id,
                ...values
            })
        }
    }
    render(){
        const { linkType } = React.$enums;
        this.formRef.current && this.formRef.current.setFieldsValue(this.props.common.detail);
        return (
            <>
                <Form
                {...layout}
                ref={this.formRef}
                onFinish={this.onFinish} 
                >
                    <Forms />
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
                
                </Form>
            </>
        )
    }
}

const stateToProops = (state) => {
    console.log(state);
    return {
      common: state.common,
      global: state.common.global,
      inputValue: state.inputValue,
      list: state.common.list
    }
  }

export default connect(stateToProops, dispatchToProps)(AddArticle)