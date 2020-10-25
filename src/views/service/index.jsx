import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { createStore } from 'redux'
import reducer from '../../reducers/counter'
import DividerForm from '@/components/form/dividerForm'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import Custom from './components/custom'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  ModalForm,
  Condition
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
class Basic extends React.Component{

    componentDidMount(){
      this.props.select({
        api: "basicInfo",
        data: {
          coding: "Q0002"
        },
        node: "list"            
      })
    }
  
    handle = () => {
      this.props.select({
        api: "basicInfo",
        data: {
          page: 0,
          pagesize: 10,
          coding: "P0003"
        }          
      })
    }

    handleClick = (data) => {
      debugger
      this.props[data.dispatch](data)
    }       

    render(){
        const { list } = this.props

        const baisc = list.filter(route => route.isdelete === '1')
        const custom = list.filter(route => route.isdelete === '0')
        debugger
        return(
           <>
           <Card>
           <ModalGroup {...this.props} coding="P0003" />
            <div style={{marginBottom: 15}}>
              <ul className="navbar">
                <li>服务信息</li>
                <li>
                  <ModalForm action="add" type="text" {...this.props} coding="Q0002" butName="新增信息">
                   <Custom />
                  </ModalForm>  
                </li>
              </ul>
            </div>

            <DividerForm title="基本信息" dataSource={baisc} {...this.props} coding="Q0002" handle={this.handle} ></DividerForm>
            <DividerForm title="自定义" dataSource={custom} {...this.props} coding="Q0002" handle={this.handle} ></DividerForm>
            </Card>
             {/* <Row gutter={16}>
            <Col span={12}>
            <Card title="基本信息">
            <Info />

            </Card>
            </Col>
            <Col span={12}>
            <Logo />
            <Custom />

            </Col>
            </Row>  */}

            <input id="coding" type="hidden" value="Q0002" />
           </>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: "service",
    state,
    common: state.common,
    global: state.common.global,
    list: state.service.list
  }
}

export default connect(stateToProops, dispatchToProps)(Basic)