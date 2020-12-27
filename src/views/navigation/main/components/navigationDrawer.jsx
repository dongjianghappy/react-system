import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, Tabs } from 'antd';
import BasicInfo from './basicInfo'
import PageInfo from './pageInfo'

const { TabPane } = Tabs;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 22 },
};

const NavigationDrawer = (props) => {
  const [visible, setVisible] = useState(false);
  const [flagList, setFlagList] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    if(props.id){
      props.fetch({
        api: "detail",
        data: {
          coding: "P0001",
          id: props.id
        }          
      }).then((res) => {
        form.setFieldsValue(res.result);
      })
    }
    
    props.fetch({
      api: "getFlag",
      data: {
        channel_id: 0
      }          
    }).then((res) => {
      setFlagList([...res.result])
    })
  }, [])

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = () => {
    if(!props.id){
      props.insert({
            coding: "P0001",
            ...form.getFieldsValue(),
        }).then(() => {
          setVisible(false);
        })
    }else{
      props.update({
            coding: "P0001",
            id: props.id,
            ...form.getFieldsValue(),
        }).then(() => {
          setVisible(false);
        })
    }
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title={props.title}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={600}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onFinish} type="primary">
              Submit
            </Button>
          </div>
        }
      >
              <Form
                {...layout}
                form={form}
                labelAlign="left"
              >
                  <Tabs type="card">
                    <TabPane tab="导航信息" key="1">
                      <BasicInfo flags={flagList} />
                    </TabPane>
                    <TabPane tab="页面设置" key="2">
                      <PageInfo />
                    </TabPane>
                  </Tabs>
              </Form>
      </Drawer>
    </>
  );
};

export default NavigationDrawer
