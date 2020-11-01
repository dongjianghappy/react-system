import React from 'react'
import { Card, Button, Row, Col, Avatar, Dropdown, Menu, Input } from 'antd'
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
        channel: []
    }

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

    menu = (
        <Menu>
          <Menu.Item key="0" className="p25">
            <a>
              递减
            </a>
          </Menu.Item>
          <Menu.Item key="1" className="p25">
            <a>
              递增
            </a>
          </Menu.Item>
        </Menu>
      );

    range = (
        <Menu>
          <Menu.Item key="0" className="p25">
            <Input value="1" className="input-sm input-50" />
            <span className="pl15 pr15">至</span>
            <Input value="100" className="input-sm input-50" />
            <span className="pl15">确定</span>
          </Menu.Item>
        </Menu>
      );
      

    render() {

        const { data } = this.state
        debugger
        return (
            <>  
            <Card>
                <Row className="align_center h50" style={{background: "#f9f9f9", lineHeight: '50px'}}>
                    <Col span={3}>名称</Col>
                    <Col span={7}>首页</Col>
                    <Col span={7}>栏目页</Col>
                    <Col span={7}>详情页</Col>
                </Row>
                {
                    data && data && data.map((item, i) => (
                        <Row className="align_center" >
                            <Col span={3} className="p5">
                                <Card style={{background: "#f5f5f5", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>{item.name}</Card>
                            </Col>
                            <Col span={7} className="p5">
                                <Card style={{background: "#f0f0f0", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
                                    <Row>
                                        <Col span="12">状态</Col>
                                        <Col span="12">更新</Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={7} className="p5">
                                <Card style={{background: "#d9d9d9", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
                                    <Row>
                                        <Col span="12">状态</Col>
                                        <Col span="12">更新</Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={7} className="p5">
                                <Card style={{background: "#bfbfbf", boxShadow: 'rgba(0, 21, 41, 0.08) 0px 1px 4px'}}>
                                    <Row>
                                        <Col span="6">状态</Col>
                                        <Col span="6">
                                            <Dropdown overlay={this.menu} placement="bottomCenter" arrow>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                递减
                                            </a>
                                            </Dropdown>
                                        </Col>
                                        <Col span="6">
                                            <Dropdown overlay={this.range} placement="bottomCenter" arrow>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                范围
                                            </a>
                                            </Dropdown>                                            
                                        </Col>
                                        <Col span="6">更新</Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    ))
                }
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
