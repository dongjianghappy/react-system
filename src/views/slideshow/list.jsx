import React from 'react'
import { Card, Row, Col, Input, Button } from 'antd'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components'
import AddFrom from './components/addFrom'

export default class SlideshowList extends React.Component{

    render() {
        return (
            <Card
                title="轮播图设置"
                extra={
                    <div>
                        <Dialog type="text" butName="添加轮播图" title="添加轮播图">
                            <AddFrom />
                        </Dialog>
                        <Button>返回</Button>
                    </div>
                }
            >
                <Row>
                    <Col span={6}>
                        <img src="http://www.yunxi10.com/upload/banner/a65f634d353be02c774da09194ea5566.jpg" width="250" height="100" alt=""/>
                    </Col>
                    <Col span={14}>
                        <div>图片地址：<Input placeholder="图片地址" style={{width: 350}} /></div>
                        <div>连接地址：<Input placeholder="链接地址" style={{width: 350}} /></div>
                        <div>文字说明：<Input placeholder="文字说明" style={{width: 350}} /></div>
                    </Col>
                    <Col span={2}>
                        <Status type="switch" coding="P0003" field="status" updateStatus={this.props.updateStatus} />
                    </Col>
                    <Col span={2}>fd</Col>
                </Row>
                <Button style={{marginTop: 25}}>保存</Button>
            </Card>
        )
    }
}