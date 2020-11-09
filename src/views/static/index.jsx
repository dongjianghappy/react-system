import React from 'react'
import { Card, Button, Row, Col, Avatar, Dropdown, Menu, Input, Popover } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import { Dialog } from '../../components'
import SlideshowFrom from './components/slideshowFrom'
import { Link } from 'react-router-dom';
import Item from './components/item'

const { Meta } = Card;

class Static extends React.Component{

    state = {
        channel: [],
        sorter: "desc"
    }

    sorter = [
        {
            name: "递减",
            value: "desc"
        },
        {
            name: "递增",
            value: "asc"
        }
    ]

    async componentDidMount(){
        const res = await this.props.fetch({
            api: "static"          
        })
        
        this.setState({
            data: res.result
        })
    }

    updatehandle = () => {
        this.props.getUpdateStatic({
            action: "index",
            model: "index"
        })
    }

    sss = (data) => {

        this.setState({
            sorter: data
        })

        alert(this.state.sorter)
    }

    render() {

        const { data } = this.state
        debugger
        return (
            <>  
            <Card title="静态生成">
                {/* <Row className="align_center h50" style={{background: "#f9f9f9", lineHeight: '50px'}}>
                    <Col span={3}>名称</Col>
                    <Col span={7}>首页</Col>
                    <Col span={7}>栏目页</Col>
                    <Col span={7}>详情页</Col>
                </Row> */}
                <table width="100%">

                
                {
                    data && data && data.map((item, i) => (
                        <tr>
                        <td className="col-md-1 align_center" style={{padding: 1}}>
                            <Card className="bold" style={{background: "#fafafa"}}>{item.name}</Card>
                        </td>
                        <td className="col-md-3" style={{padding: 1}}>
                        <Card style={{background: "#fafafa"}}>
                                    <Row>
                                        <Col span="12">状态</Col>
                                        <Col span="12"><i className="iconfont icon-play" style={{color: "#08d52b"}} /></Col>
                                    </Row>
                                </Card>
                        </td>
                        <td className="col-md-3" style={{padding: 1}}>
                        <Card style={{background: "#fafafa"}}>
                                    <Row>
                                        <Col span="12">状态</Col>
                                        <Col span="12"><i className="iconfont icon-play" /></Col>
                                    </Row>
                                </Card>
                        </td>
                        <td className="col-md-5" style={{padding: 1}}>
                        <Card style={{background: "#fafafa"}}>
                                    <Row justify="center">
                                        <Col span="6">状态</Col>
                                        <Col span="6">
                                            <Popover placement="bottom" content={
                                                <div>
                                                    {
                                                        this.sorter.map((item, index) => (
                                                            <p onClick={() => this.sss(item.value)}>{item.name}</p>
                                                        ))
                                                    }
                                                </div>
                                            }>
                                            <Button type="link" size="small">递减s</Button>
                                            </Popover>
                                        </Col>
                                        <Col span="6">
                                            <Popover placement="bottom" content={
                                                <div>
                                                    <Input value="1" className="input-sm input-50" />
                                                    <span className="pl15 pr15">至</span>
                                                    <Input value="100" className="input-sm input-50" />
                                                    <span className="pl15 pointer">确定</span>
                                                </div>
                                            }>
                                            <Button type="link" size="small">范围</Button>
                                            </Popover>
                                        </Col>
                                        <Col span="6"><i className="iconfont icon-play" /></Col>
                                    </Row>
                                </Card>
                        </td>
                    </tr>
                        // <Row className="align_center" >
                        //     <Col span={3} className="p5">
                        //         <Card style={{background: "#f5f5f5", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>{item.name}</Card>
                        //     </Col>
                        //     <Col span={7} className="p5">
                                // <Card style={{background: "#f0f0f0", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
                                //     <Row>
                                //         <Col span="12">状态</Col>
                                //         <Col span="12">更新</Col>
                                //     </Row>
                                // </Card>
                        //     </Col>
                        //     <Col span={7} className="p5">
                        //         <Card style={{background: "#d9d9d9", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
                        //             <Row>
                        //                 <Col span="12">状态</Col>
                        //                 <Col span="12">更新</Col>
                        //             </Row>
                        //         </Card>
                        //     </Col>
                        //     <Col span={7} className="p5">
                        //         <Card style={{background: "#bfbfbf", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
                        //             <Row>
                        //                 <Col span="6">状态</Col>
                        //                 <Col span="6">
                        //                     <Dropdown overlay={this.menu} placement="bottomCenter" arrow>
                        //                     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        //                         递减
                        //                     </a>
                        //                     </Dropdown>
                        //                 </Col>
                        //                 <Col span="6">
                        //                     <Dropdown overlay={this.range} placement="bottomCenter" arrow>
                        //                     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        //                         范围
                        //                     </a>
                        //                     </Dropdown>                                            
                        //                 </Col>
                        //                 <Col span="6">更新</Col>
                        //             </Row>
                        //         </Card>
                        //     </Col>
                        // </Row>
                    ))
                }
                </table>
                </Card>
            </>
        )
    }
}

const stateToProops = (state) => {
    return {
        module: state.navigation
    }
  }

export default connect(stateToProops, dispatchToProps)(Static)
