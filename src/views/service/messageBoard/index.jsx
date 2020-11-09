import React from 'react'
import { Card, Table, Button, Space } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dispatchToProps from '@/store/dispatch'
import Reply from './components/reply'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  R_modal
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
        api: "messageBoard",
        data: {
          page: 0,
          pagesize: 25,
          coding: "Q0004"
        },
        node: "messageBoard"            
    })
    }

    componentDidMount(){
      this.getData()
    }
    

    render() {

        const { messageBoard } = this.props.module
        return (
            <Card title="留言列表">
            <table width="100%" className="table-striped table-hover col-left-4">
              <tr className="th">
                <td className="col-md-1">选择</td>
                <td className="col-md-1">头像</td>
                <td className="col-md-1">用户名</td>
                <td className="col-md-5">留言内容</td>
                <td className="col-md-2">留言日期</td>
                <td className="col-md-1">状态</td>
                <td className="col-md-1">操作</td>
              </tr>
              {
              messageBoard && messageBoard.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td><img src={item.photos} style={{borderRadius: '50%', width: '30px', height: '30px'}} /></td>
                  <td>{item.nickname}</td>
                  <td>{item.content}</td>
                  <td>{item.datetime}</td>
                  <td><Status type="switch" coding="Q0004" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                  <td>
                  <R_modal.modalForm title="回复信息" type="text" name="回复" id={item.id} coding="P0010" renderList={this.getData} {...this.props} >
                      <Reply />
                  </R_modal.modalForm>
                  </td>
                  
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
