import React from 'react'
import { Card, Button, Row, Col, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import { Dialog } from '../../components'
import Detail from './components/detail'
import { Link } from 'react-router-dom';
import {
    R_drawer
  } from '../../components/index.js'

const { Meta } = Card;

class Slideshow extends React.Component{

    componentDidMount(){
        this.props.select({
            api: "slideshow"          
        })
    }

    render() {

        const {list} = this.props.module

        return (
            <Card 
                title="幻灯片管理"
                extra={
                <R_drawer.drawerForm title="新增幻灯片" name="新增幻灯片" coding="P0003" {...this.props} >
                    <Detail />
                </R_drawer.drawerForm>
                }
            >

                <Row>
                   
                    {
                        list && list.map((item, i) => (
                            <Col span={6}>
                            <Card
                                style={{ width: 300, marginBottom: 25 }}
                                cover={
                                    <Link to={{pathname:'/admin/slideshow/list', state:{fid: item.id}}}>
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                                    </Link>
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={item.name}
                                />
                            </Card>
                            </Col>
                        ))
                    }
                   
                </Row>
            </Card>
        )
    }
}

const stateToProops = (state) => {
    return {
        module: state.slideshow
    }
  }

export default connect(stateToProops, dispatchToProps)(Slideshow)
