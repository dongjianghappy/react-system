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
    route = (path) => {
        this.props.history.push(path)
        window.location.reload()
    }

    render(){
        return(
            <div style={{ background: ' #fff', padding: '12px', height: '45px', lineHeight: '25px !important'}}>
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
                            <i className="iconfont icon-tags" style={{fontSize: 20}}></i>
                        </Col>
                        <Col span={2} onClick={() => this.route('/admin/user')}>
                        <i className="iconfont icon-user" style={{fontSize: 16}}></i>
                        </Col>
                        <Col span={2} onClick={() => this.route('/admin/appstore')}>微博</Col>
                        <Col span={2} onClick={() => this.route('/admin/appstore')}>空间</Col>
                        <Col span={2} onClick={() => this.route('/admin/appstore')}>客服</Col>
                        <Col span={2} onClick={() => this.route('/admin/appstore')}>设置</Col>
                        <Col span={2} onClick={() => this.route('/admin/link')}>运营</Col>
                        <Col span={2} ><ChannelList type="text" butName="频道" title="频道" /></Col>
                    </Row>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default withRouter(Position)
