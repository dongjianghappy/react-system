import React from 'react'
import { Card, Row, Col, Skeleton, Switch, Avatar, Button, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import {
    R_drawer,
    R_modal
  } from '../../components/index.js'
import Detail from './components/detail'


const { Meta } = Card;
class Appstore extends React.Component{


    getData = () => {
        this.props.select({
          api: "appstore",
          data: {
            page: 0,
            pagesize: 25
          }            
      })
      }
  
      componentDidMount(){
        this.getData()
      }


    //   menu = (
    //     <Menu>
    //       <Menu.Item key="0" className="p25">
    //         编辑
    //       </Menu.Item>
    //       <Menu.Item key="1" className="p25">
    //         权限
    //       </Menu.Item>
    //     </Menu>
    //   );
      
    render() {
        const {list} = this.props.module
        debugger
        return (
            <>
                <Card title="应用中心"
                    extra={
                        <R_modal.modalForm title="新增应用" name="新增应用" coding="P0010" renderList={this.getData} {...this.props} >
                            <Detail />
                        </R_modal.modalForm>
                    }
                >
                <Row>
                    {
                        list && list.map((item, index) => (
                            <Col span="12">
                            <Card 
                                title={item.name}
                                extra={
                                    <>
                                        <a>状态</a> | 
                                        <Link to={{pathname:'/admin/user/grade', state:{type: 2}}}>权限设置</Link> | 
                                        <R_modal.modalForm title="编辑应用" name="编辑" id={item.id} coding="P0010" renderList={this.getData} {...this.props} >
                                            <Detail />
                                        </R_modal.modalForm>
                                            {/* <Dropdown overlay={this.menu} placement="bottomCenter" arrow>
                                            <a>
                                                设置
                                            </a>
                                            </Dropdown> */}
                                    </>
                                }
                                style={{margin: 10, background: "#f9f9f9"}}
                            >
                                <Row>
                                    <Col span="4">
                                        <img src={item.image} style={{width: '90%', height: 60}} />
                                    </Col>
                                    <Col span="20">
                                        <Row style={{paddingBottom: 10}}>
                                            <Col span="2">描述:</Col>
                                            <Col span="22">{item.description}</Col>
                                        </Row>
                                        <Row>
                                            <Col span="2">权限:</Col>
                                            <Col span="22">{item.grade}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                
                            </Card>
                        </Col>
                        ))
                    }

                </Row>
                </Card>
            </>
        )
    }
}

const stateToProops = (state) => {
    debugger
    return {
      global: state.common.global,
      state,
      module: state.appstore
    }
  }
  
  export default connect(stateToProops, dispatchToProps)(Appstore)