import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Tabs, Divider, Radio, Checkbox } from 'antd';
import { PlusOutlined, EditOutlined  } from '@ant-design/icons';
import { SelectBox } from '@/components'

const { Option } = Select;
const { TabPane } = Tabs;
 export default class CateForm extends React.Component {
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

    const { butName, title, type } = this.props
    const { channelType } = React.$enums;
    return (
      <>
        <Button type="primary" onClick={this.showDrawer} size="small" >
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
            <Tabs defaultActiveKey="1">
              <TabPane tab="基本信息" key="1">
                <Form.Item label="分类名称">
                  <Input />
                </Form.Item>
                <Form.Item label="所属分类">
                  <Input />
                </Form.Item>
                <Form.Item label="类型">
                  <SelectBox data={channelType} />
                </Form.Item>
                <Form.Item label="标签调用">
                  <Input />
                </Form.Item>
                <Form.Item label="顺序">
                  <Input />
                </Form.Item>
                <Form.Item label="显示">
                  <Radio value={1}>是</Radio>
                  <Radio value={0}>否</Radio>
                </Form.Item>
                <Form.Item label="保存目录">
                  <Input />
                </Form.Item>
                <Form.Item label="默认名称">
                  <Input />
                </Form.Item>
                <Form.Item label="分类名称">
                  <Input />
                </Form.Item>
                <Form.Item label="聚合标签">
                  <Checkbox>最新(zx)</Checkbox>
                  <Checkbox>热门(rm)</Checkbox>
                  <Checkbox>推荐(tj)</Checkbox>
                </Form.Item>
              </TabPane>
              <TabPane tab="页面设置" key="2">
                <Form.Item label="标题">
                    <Input />
                  </Form.Item>
                  <Form.Item label="关键字">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item label="描述">
                    <Input.TextArea />
                  </Form.Item>
              </TabPane>
              <TabPane tab="高级设置" key="3">
                <Form.Item label="预览图">
                    <Input />
                  </Form.Item>
                  <Form.Item label="每页显示">
                    <Input />
                  </Form.Item>
                  <Form.Item label="最大显示">
                    <Input />
                  </Form.Item>
                  <Form.Item label="频道模板">
                    <Input  defaultValue="index_article.htm" />
                  </Form.Item>
                  <Form.Item label="列表模板">
                    <Input  defaultValue="list_article.htm" />
                  </Form.Item>
                  <Form.Item label="内页模板">
                    <Input  defaultValue="article_article.htm" />
                  </Form.Item>
              </TabPane>
            </Tabs>
          </Form>
        </Drawer>
      </>
    );
  }
}