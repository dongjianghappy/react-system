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


class Job extends React.Component{

  getData = () => {
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "Q0012"
      },
      node: "job"            
    })
  }

  componentDidMount(){
    this.getData()
  }

    render() {

        const { job } = this.props.module

        return (
            <Card
            title="职位管理"
            extra={
              <Space>
              <R_drawer.drawerForm title="新增职位" name="新增职位" coding="Q0012" renderList={this.getData} {...this.props} >
                <Detail />
              </R_drawer.drawerForm>
            </Space>
              }
            >
                <table width="100%" class="table-striped artlist col-left-34">
                  <tr class="th">
                      <td class="col-md-1">选择</td>
                      <td class="col-md-1">编号</td>
                      <td class="col-md-3">职位名称</td>
                      <td class="col-md-1">部门</td>
                      <td class="col-md-1">人数</td>
                      <td class="col-md-2">发布时间</td>
                      <td class="col-md-1">状态</td>
                      <td class="col-md-2">操作</td>
                  </tr>
                  {
                          job && job.map((item, index) => (
                              <tr className="tr-list">
                                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.post}</td>
                                  <td>{item.number}</td>
                                  <td>{item.datetime}</td>
                                  <td>{item.status}</td>
                                  <td>
                                    <R_drawer.drawerForm title="编辑职位" name="编辑" id={item.id} coding="Q0012" renderList={this.getData} {...this.props} >
                                      <Detail />
                                    </R_drawer.drawerForm>
                                     | 删除</td>
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

export default connect(stateToProops, dispatchToProps)(Job)