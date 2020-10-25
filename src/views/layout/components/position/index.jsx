import React from 'react';
import { Layout, Menu, Row, Col, Breadcrumb, Card } from 'antd';
import { withRouter, Link } from 'react-router-dom'
import Channel from '../../../../components/channel'
import { Status, Dialog, Operatinavbar } from '../../../../components'



import {
    MoreOutlined,
    SettingOutlined,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';
import ChannelList from '../../../channel/components/channelList';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;



class Position extends React.Component{

    // 模块页面跳转后需要刷新，主要时显示左侧菜单栏
    route = (path, q='') => {
        this.props.history.push(path)
        this.props.handle(q)
        //window.location.reload()
    }

    render(){
        return(
            <div style={{ background: ' #fff', padding: '12px', height: '45px', lineHeight: '25px !important', boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)", borderBottom: "1px solid #ddd"}}>
                <Row>
                    <Col span={12}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    </Col>
                    <Col span={12}>
                    <Row justify="end">
                        <Col span={2} onClick={() => this.route('/admin/tag')}>
                            标签
                        </Col>
                        {/* <Col span={2} onClick={() => this.route('/admin/order')}>
                            订单
                        </Col> */}
                        {/* <Col span={2} onClick={() => this.route('/admin/user', 'user')}>
                            用户
                        </Col> */}
                        {/* <Col span={2} onClick={() => this.route('/admin/member')}>微博</Col>
                        <Col span={2} onClick={() => this.route('/admin/space')}>空间</Col>
                        <Col span={2} onClick={() => this.route('/admin/service', 'service')}>服务</Col> */}
                        <Col span={2} onClick={() => this.route('/admin/appstore', 'setting')}>设置</Col>
                        <Col span={2} onClick={() => this.route('/admin/link', 'business')}>运营</Col>
                    </Row>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default withRouter(Position)
