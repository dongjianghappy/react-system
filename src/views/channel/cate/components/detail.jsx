import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, Tabs } from 'antd';
import BasicInfo from './basicInfo'
import PageInfo from './pageInfo'
import AdvancedSettings from './advancedSettings'

const { TabPane } = Tabs;

const Detail = (props) => {

  const [flagList, setFlagList] = useState([]);

 
  useEffect(() => {
    if(props.id){
      props.fetch({
        api: "getFlag",
        data: {
          channel_id: 0
        }          
      }).then((res) => {
        setFlagList([...res.result])
      })
    }
  }, [])

  return (
    <>
      <Tabs type="card">
        <TabPane tab="基本信息" key="1">
          <BasicInfo flags={flagList} />
        </TabPane>
        <TabPane tab="页面设置" key="2">
          <PageInfo />
        </TabPane>
        <TabPane tab="高级设置" key="3">
          <AdvancedSettings />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Detail
