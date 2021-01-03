import React, { useState, useEffect } from "react";
import { Drawer, Button, Form, Tabs } from "antd";
import BasicInfo from "./basicInfo";
import PageInfo from "./pageInfo";

const { TabPane } = Tabs;

const Detail = (props) => {
  const { params, dataSource, callback } = props;
  const [flagList, setFlagList] = useState([]);

  useEffect(() => {
    if (props.id) {
      props
        .fetch({
          api: "getFlag",
          data: {
            channel_id: 0,
          },
        })
        .then((res) => {
          setFlagList([...res.result]);
        });
    }
  }, []);

  return (
    <>
      <Tabs type="card">
        <TabPane tab="基本信息" key="1">
          <BasicInfo {...props} flags={flagList} />
        </TabPane>
        <TabPane tab="客户信息" key="2">
          <PageInfo />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Detail;
