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
<Form.Item name="name" label="导航名称" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="url" label="导航连接" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="所属导航" >
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

                    <Form.Item name={['user', 'name']} label="类型" >
                        <SelectBox data={linkType} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="集合标签" >
                        <Radio value={1}>交换</Radio>
                        <Radio value={0}>出售</Radio>
                    </Form.Item>
                    <Divider orientation="left">页面设置</Divider>
                    <Form.Item name="seotitle" label="SEO标题">
                        <Input />
                    </Form.Item>
                    <Form.Item name="keyword" label="关键字">
                        <Input />
                    </Form.Item>

                    <Form.Item name="description" label="描述">
                        <Input.TextArea />
                    </Form.Item>
      </>
    );
  }
}