import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, InputNumber, Select, DatePicker, Tabs, Divider, Radio, Checkbox } from 'antd';
import { PlusOutlined, EditOutlined  } from '@ant-design/icons';
import { SelectBox } from '@/components'

const { Option } = Select;
const { TabPane } = Tabs;
 export default class FieldForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {

    const { butName, title, type, size } = this.props
    const { linkType } = React.$enums;
    
    return (
      <>
        <Button type="primary" onClick={this.showDrawer} size={size || "small"} >
        { 
        type === 'edit' ?  <EditOutlined  /> : <PlusOutlined /> 
        }
        {butName}

        </Button>
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
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
          <Form.Item name={['user', 'name']} label="网站名称" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="url地址" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="顺序" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="显示">
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="显示页面">
                        <Radio value={1}>首页</Radio>
                        <Radio value={0}>全站</Radio>
                    </Form.Item>

                    <Form.Item name={['user', 'name']} label="来源" rules={[{ required: true }]}>
                        <SelectBox data={linkType} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="方式" rules={[{ type: 'email' }]}>
                        <Radio value={1}>交换</Radio>
                        <Radio value={0}>出售</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="出售状态" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <Radio value={1}>正常</Radio>
                        <Radio value={0}>过期</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="出售次数">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="价格">
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'website']} label="站点简介">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="上架时间">
                        <DatePicker /> 到 <DatePicker />
                    </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  }
}