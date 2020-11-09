import React from 'react'
import { Card, Table, Button, Space } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dispatchToProps from '@/store/dispatch'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition
} from '../../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Operatinavbar
} from '../../../common'

class Index extends React.Component{

    getData = () => {
      this.props.select({
        api: "feedback",
        data: {
          page: 0,
          pagesize: 25,
          coding: "Q0003"
        },
        node: "feedback"            
    })
    }

    componentDidMount(){
      this.getData()
    }
    

    render() {

        const { feedback } = this.props.module
        return (
            <Card title="意见反馈列表">
            <table width="100%" className="table-striped table-hover col-left-4">
              <tr className="th">
                <td className="col-md-1">选择</td>
                <td className="col-md-1">头像</td>
                <td className="col-md-1">用户名</td>
                <td className="col-md-5">反馈内容</td>
                <td className="col-md-2">反馈日期</td>
                <td className="col-md-1">状态</td>
                <td className="col-md-1">操作</td>
              </tr>
              {
              feedback && feedback.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td><img src={item.photos} style={{borderRadius: '50%', width: '30px', height: '30px'}} /></td>
                  <td>{item.nickname}</td>
                  <td>{item.content}</td>
                  <td>{item.datetime}</td>
                  <td><Status type="switch" coding="Q0004" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                  <td>删除</td>
                </tr>
                ))
              }
            </table>

                <Operatinavbar 
                  node={ this.props.node }
                  button={['all', 'delete', 'open', 'close']}
                  data={this.props.module}
                  coding="P0003"
                  {...this.props}
                />
            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.service
  }
}

export default connect(stateToProops, dispatchToProps)(Index)
