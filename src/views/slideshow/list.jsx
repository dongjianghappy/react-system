import React from 'react'
import { Card, Row, Col, Input, Button } from 'antd'
import { Status, Dialog, ModalSpace, ButtonGroup, OperatingGroup, Operatinavbar, Condition } from '../../components'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import AddFrom from './components/addFrom'

class SlideshowList extends React.Component{

    componentDidMount(){
        this.props.select({
            api: "slideshowList",
            data: {
                fid: this.props.match.params.fid
            },
            node: "imgList"            
        })
    }

    render() {
        const {imgList} = this.props.module
        return (
            <Card
                title="轮播图设置"
                extra={
                    <div>
                        {/* <Dialog type="text" butName="添加轮播图" title="添加轮播图">
                            <AddFrom />
                        </Dialog> */}
                    </div>
                }
            >
                {
                    imgList && imgList.map((item, i) => (
                        <Row style={{marginTop: 15}}>
                        <Col span={6}>
                            <ModalSpace>
                                <img src={item.image} width="250" height="100" alt="" />
                            </ModalSpace>
                        </Col>
                        <Col span={14}>
                            <div>图片地址：<Input placeholder="图片地址" style={{width: 350}} value={item.title} /></div>
                            <div style={{marginTop: 5}}>连接地址：<Input placeholder="链接地址" style={{width: 350}} value={item.url} /></div>
                            <div style={{marginTop: 5}}>文字说明：<Input placeholder="文字说明" style={{width: 350}} value={item.description} /></div>
                        </Col>
                        <Col span={2}>
                            <Status type="switch" coding="P0003" field="status" updateStatus={this.props.updateStatus} />
                        </Col>
                        <Col span={2}>fd</Col>
                    </Row>
                    ))
                }
                <Button style={{marginTop: 25}}>保存</Button>
            </Card>
        )
    }
}

const stateToProops = (state) => {
    return {
        module: state.slideshow
    }
  }

export default connect(stateToProops, dispatchToProps)(SlideshowList)