import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';
import { connect } from 'react-redux'
import { SelectBox } from '../../components'
import dispatchToProps from '../../store/dispatch'

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
            alert("add")
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
                <Form.Item name="name" label="网站名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="url" label="url地址">
                    <Input />
                </Form.Item>
                <Form.Item name="sort" label="顺序">
                    <InputNumber />
                </Form.Item>
                <Form.Item name="status" label="显示">
                    <Radio.Group>
                    <Radio value="1" defaultChecked >是</Radio>
                    <Radio value="0">否</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="page" label="显示页面">
                    <Radio.Group>
                    <Radio value="1">首页</Radio>
                    <Radio value="0">全站</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="source" label="来源">
                    <SelectBox data={linkType} />
                </Form.Item>
                <Form.Item name="method" label="方式">
                    <Radio.Group>
                    <Radio value="1">交换</Radio>
                    <Radio value="0">出售</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="sell" label="出售状态">
                    <Radio.Group>
                    <Radio value="1">正常</Radio>
                    <Radio value="0">过期</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="sell_time" label="出售次数">
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="价格">
                    <Input />
                </Form.Item>

                <Form.Item name="content" label="站点简介">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="上架时间">
                    <DatePicker /> 到 <DatePicker />
                </Form.Item>

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