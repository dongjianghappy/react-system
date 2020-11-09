import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker, Tabs} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, R_modal } from '@/components/index.js'
import dispatchToProps from '@/store/dispatch'
import List from './components/list'
import Detail from './components/detail'

const { TabPane } = Tabs;

class UserList extends React.Component{

    getData = () => {
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "U0017"
        },
        node: 'group'           
      })
    }

    componentDidMount(){
      this.getData()
    }


    render(){
        const {group} = this.props.module
        return(

          <Card
            title="用户等级管理"
            extra={
              <Space>
                  <R_modal.modalForm title="新增等级" name="新增等级" coding="U0017" renderList={this.getData} {...this.props} >
                      <Detail />
                  </R_modal.modalForm>
              </Space>
            }
          >
            <table width="100%" class="table-striped table-hover col-left-4">
                <tr class="th">
                    <td class="col-md-1">等级</td>
                    <td class="col-md-2">等级图标</td>
                    <td class="col-md-1">登录天数</td>
                    <td class="col-md-7">描述</td>
                    <td class="col-md-1">操作</td>
                </tr>
                {
                    group && group.map((item, index) => (
                    <tr>
                        <td>{item.level}</td>
                        <td>{item.level_icon}</td>
                        <td>{item.	time}</td>
                        <td>{item.description}</td>
                        <td>
                        <Space size="middle">
                            <R_modal.modalForm title="编辑等级" name="编辑" id={item.id} coding="U0017" renderList={this.getData} {...this.props} >
                                <Detail />
                            </R_modal.modalForm>
                        </Space>
                        </td>
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
    global: state.common.global,
    state,
    module: state.user
  }
}

export default connect(stateToProops, dispatchToProps)(UserList)
