import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, Tabs } from 'antd';
import BasicInfo from './basicInfo'
import PageInfo from './pageInfo'

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
        <TabPane tab="导航信息" key="1">
          <BasicInfo flags={flagList} />
        </TabPane>
        <TabPane tab="页面设置" key="2">
          <PageInfo />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Detail
