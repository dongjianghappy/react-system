import React from 'react'
import { Card, Table, Button, Space } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition,
  Quick,
  R_pagination
} from '@/components/index.js'
import Detail from './components/detail'


class Resume extends React.Component{

  getData = () => {
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "Q0013"
      },
      node: "resume"            
    })
  }

  componentDidMount(){
    this.getData()
  }

    render() {

        const { resume } = this.props.module

        return (
            <Card
            title="职位管理"
            >
                <table width="100%" class="table-striped artlist col-left-7">
                  <tr class="th">
                    <td class="col-md-1">选择</td>
                    <td class="col-md-1">编号</td>
                    <td class="col-md-1">姓名</td>
                    <td class="col-md-1">性别</td>
                    <td class="col-md-2">年龄</td>
                    <td class="col-md-1">学历</td>
                    <td class="col-md-2">专业</td>
                    <td class="col-md-2">申请时间</td>
                    <td class="col-md-1">操作</td>
                  </tr>
                  {
                          resume && resume.map((item, index) => (
                              <tr className="tr-list">
                                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                                  <td>{item.id}</td>
                                  <td>{item.username}</td>
                                  <td>{item.sex}</td>
                                  <td>{item.birthday}</td>
                                  <td>{item.educational}</td>
                                  <td>{item.specialty}</td>
                                  <td>{item.datetime}</td>
                                  <td>删除</td>
                              </tr>
                          ))
                      }
                </table>
            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
    module: state.service
  }
}

export default connect(stateToProops, dispatchToProps)(Resume)