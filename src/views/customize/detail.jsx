import React from 'react'
import { Card, Form, Input, InputNumber, Button, Radio, Row, Col, Select } from 'antd';
import { SelectBox } from '../../components'

const { Option } = Select

export default class Forms extends React.Component{


    render(){
        const { formType } = React.$enums;
        return (
            <>
                <Form.Item label="注释" name="remark">
                  <Input />
                </Form.Item>
                <Form.Item label="字段名" name="fields">
                  <Input />
                </Form.Item>
                <Form.Item label="数据类型" name="dtype">
                  <Radio.Group>
                  <Row>
                    <Col span={12}><Radio value="TEXT">文本保存HTML数据(TEXT)</Radio></Col>
                    <Col span={12}><Radio value="VARCHAR" defaultChecked>字符串类型(VARCHAR)</Radio></Col>
                    <Col span={12}><Radio value="int">整数类型(INT)</Radio></Col>
                    <Col span={12}><Radio value="float">小数类型(Float)</Radio></Col>
                    <Col span={12}><Radio value="datetime">时间类型(DATETIME)</Radio></Col>                    
                  </Row>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="显示类型" name="text_type">
                  <Select className="w150">
                  {
                  React.$enums.formType.map(item => (
                      <Option value={item.value}>{item.name}</Option>
                  )) 
                  }
                  </Select>
                </Form.Item>
                <Form.Item label="长度" name="max_length">
                  <Input />
                </Form.Item>
                <Form.Item label="说明" name="explanation">
                  <Input.TextArea />
                </Form.Item>
            </>
        )
    }
}
