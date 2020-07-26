import React from 'react';
import { Layout, Menu, Row, Col, Breadcrumb } from 'antd';
import {
    MoreOutlined,
    SettingOutlined,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Position extends React.Component{
    render(){
        return(
            <div style={{ background: ' #fff', padding: '12px', height: '45px', lineHeight: '25px !important'}}>
                <Row>
                    <Col span={12}>当前位置</Col>
                    <Col span={12}>
                    <Row justify="end">
                        <Col span={2}>用户</Col>
                        <Col span={2}>微博</Col>
                        <Col span={2}>空间</Col>
                        <Col span={2}>客服</Col>
                        <Col span={2}><SettingOutlined /></Col>
                        <Col span={2}><MoreOutlined /></Col>
                    </Row>
                    </Col>
                </Row>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}

            </div>
            
        )
    }
}