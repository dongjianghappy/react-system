import React from 'react';
import { Card, Row, Col, Space, Button, Form, Input, Radio, Checkbox } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'

import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  ModalForm,
  Condition
} from '../../components/index.js'
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Keyword
} from '../../common'


const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 22 },
};


class Basic extends React.Component{

  state = {
    data: {}
  }

     formRef = React.createRef()

     async componentDidMount (){
      const res = await this.props.fetch({
        api: "detail",
        data: {
          coding: "O0000",
          id: 2
        }          
      })
      debugger
      this.formRef.current.setFieldsValue(res.result);
    }
  
    handle = () => {
      this.props.InfoQuery()
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }       

    onFinish = values => {
      this.props.update({
        coding: "O0000",
        id: 2,
        ...values
    })
  };


    render(){

        return(
           <>
           <Card>
           <Node node={ this.props.node } fn={ this.props.nodeMethod} />
            <div style={{marginBottom: 15}}>
              <h2 className="font18">频道信息</h2>
            </div>

            <div style={{ padding: 50}}>
              <Form
                {...layout}
                ref={this.formRef}
                labelAlign="left"
                onFinish={this.onFinish}
              >
                <Form.Item label="频道名称" name="name">
                  <Input className="input-mid input-350" placeholder="请输入频道名称" />
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
                <Form.Item label="预览图">
                  图片
                </Form.Item>
                <Form.Item label="页面标题">

                  <Input.Group compact>
                    <Form.Item name="seotitle" className="mr5">
                      <Input className="input-mid input-350" placeholder="请输入频道页面标题" />
                    </Form.Item>
                    <Form.Item name="behind_title">
                      <Input className="input-mid input-250" placeholder="请输入频道名称标题后缀" />
                    </Form.Item>
                  </Input.Group>


                  
                </Form.Item>
                <Form.Item label="关键字">
                  <Keyword tag={['all', 'delete', 'open', 'close']} change={this.changeInput} />
                </Form.Item>
                <Form.Item label="描述">
                  <Input.Group compact>
                      <Form.Item name="description" className="mr5">
                        <Input.TextArea className="w500 h120" placeholder="请输入频道页面描述" />
                      </Form.Item>
                      <Form.Item name="behind_description">
                        <Input.TextArea className="w350 h120" placeholder="描述后缀" />
                      </Form.Item>
                    </Input.Group>
                  
                </Form.Item>
                <Form.Item
                  {...tailLayout}
                >
                  <Button type="primary" htmlType="submit">
                  提交
                  </Button>
                </Form.Item>
              </Form>
            </div>
            
            </Card>
           </>
        )
    }
}

const stateToProops = (state) => {
  return {}
}

export default connect(stateToProops, dispatchToProps)(Basic)