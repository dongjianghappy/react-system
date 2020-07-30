import React from 'react';
import { Card, Row, Col } from 'antd'
import { createStore } from 'redux'
import reducer from '../../reducers/counter'
import Info from './components/info'
import Logo from './components/logo'
import Custom from './components/custom'

export default class basic extends React.Component{
     
    render(){
        return(
            <Row gutter={16}>
              <Col span={12}>
                <Card title="基本信息">
                <Info />

              </Card>
              </Col>
              <Col span={12}>
                <Logo />
                <Custom />

              </Col>
            </Row>
        )
    }
}