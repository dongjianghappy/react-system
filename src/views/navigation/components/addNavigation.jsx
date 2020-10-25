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
          <Form.Item name={['user', 'name']} label="导航名称" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="导航连接" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="所属导航" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="顺序">
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="启用">
                        <Radio value={1}>首页</Radio>
                        <Radio value={0}>全站</Radio>
                    </Form.Item>

                    <Form.Item name={['user', 'name']} label="类型" rules={[{ required: true }]}>
                        <SelectBox data={linkType} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="集合标签" rules={[{ type: 'email' }]}>
                        <Radio value={1}>交换</Radio>
                        <Radio value={0}>出售</Radio>
                    </Form.Item>
                    <Divider orientation="left">页面设置</Divider>
                    <Form.Item name={['user', 'website']} label="SEO标题">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="关键字">
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'website']} label="描述">
                        <Input.TextArea />
                    </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  }
}