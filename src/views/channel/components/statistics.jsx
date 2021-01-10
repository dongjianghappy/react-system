import React from 'react'
import { Row, Col, Card, Statistic, Tabs  } from 'antd'
import Tongji from './statistics-row'

const { TabPane } = Tabs;

const Statistics = (props) => {



    return (
        <>
            <Card className="mb15">
   <Tabs defaultActiveKey="1">
    <TabPane tab="今日" key="1">
        <Tongji />
    </TabPane>
    <TabPane tab="本周" key="2">
        <Tongji />
    </TabPane>
    <TabPane tab="本月" key="3">
        <Tongji />
    </TabPane>
    <TabPane tab="今年" key="4">
        <Tongji />
    </TabPane>
    <TabPane tab="全部" key="5">
        <Tongji />
    </TabPane>
  </Tabs>




            </Card>
        </>
    )
}

export default Statistics