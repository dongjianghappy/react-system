import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd'
import { createStore } from 'redux'
import reducer from '../../reducers/counter'
import Info from './components/info'
import Logo from './components/logo'
import Custom from './components/custom'
import DividerForm from '@/components/form/dividerForm'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import Article from './components/addCustom'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  ModalForm,
  Condition,
  R_modal
} from '../../components/index.js'
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
class Basic extends React.Component{

    getData = () => {
      this.props.select({
        api: "basicInfo",
        data: {
          page: 0,
          pagesize: 10,
          coding: "P0000"
        }          
      })
    }

    componentDidMount(){
      this.getData()
    }
  
    handle = () => {
      this.props.InfoQuery()
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }       

    render(){
        const { list } = this.props.module
        const baisc = list.filter(route => route.isdelete === '1' && route.name !== 'logo')
        const logo = list.filter(route => route.isdelete === '1' && route.name === 'logo')
        const custom = list.filter(route => route.isdelete === '0')
        return(
           <>
           <Card>


             
           <Node node={ this.props.node } fn={ this.props.nodeMethod} />

           <div style={{marginBottom: 15}}>
            <Space>
              <Button type="primary">网站信息</Button>
              <R_modal.modalForm title="自定义字段" name="自定义字段" coding="P0000" renderList={this.getData} {...this.props} >
                  <Article />
              </R_modal.modalForm>
            </Space>
            </div>

            <DividerForm title="基本信息" dataSource={baisc} {...this.props} coding="P0000" handle={this.handle} ></DividerForm>
            <DividerForm title="网站LOGO" dataSource={logo} {...this.props} coding="P0000" handle={this.handle} ></DividerForm>
            <DividerForm title="自定义管理" dataSource={custom} {...this.props} coding="P0000" handle={this.handle} ></DividerForm>
            </Card>
            <input id="coding" type="hidden" value="P0000" />
           </>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.basic
  }
}

export default connect(stateToProops, dispatchToProps)(Basic)