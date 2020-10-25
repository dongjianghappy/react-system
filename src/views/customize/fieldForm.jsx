import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Tabs, Divider, Radio, Checkbox } from 'antd';
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
    const { formType } = React.$enums;
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

                <Form.Item label="注释">
                  <Input />
                </Form.Item>
                <Form.Item label="字段名">
                  <Input />
                </Form.Item>
                <Form.Item label="数据类型">
                  <Row>
                    <Col span={12}><Radio value={1}>文本保存HTML数据(TEXT)</Radio></Col>
                    <Col span={12}><Radio value={0}>字符串类型(VARCHAR)</Radio></Col>
                    <Col span={12}><Radio value={1}>整数类型(INT)</Radio></Col>
                    <Col span={12}><Radio value={0}>小数类型(Float)</Radio></Col>
                    <Col span={12}><Radio value={1}>时间类型(DATETIME)</Radio></Col>                    
                  </Row>
                </Form.Item>
                <Form.Item label="显示类型">
                  <SelectBox data={formType} />
                </Form.Item>
                <Form.Item label="长度">
                  <Input />
                </Form.Item>
                <Form.Item label="说明">
                  <Input.TextArea />
                </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  }
}