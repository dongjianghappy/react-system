import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'
import { Status, Dialog, Operatinavbar, Condition, R_checkbox } from '@/components/index.js'
const { Search } = Input;
const { RangePicker } = DatePicker;

class UserList extends React.Component{

    componentDidMount(){
      this.props.select({
        api: 'userList',
        node: 'banuser'           
      })
    }


    render(){
        const {banuser} = this.props.module
        return(

          <Card title="用户禁言" >
            <table width="100%" className="table-striped table-hover col-left-7">
              <tr class="th">
                  <td class="col-md-1">选择</td>
                  <td class="col-md-1">头像</td>
                  <td class="col-md-2">用户名</td>
                  <td class="col-md-1">禁言类型</td>
                  <td class="col-md-1">禁言天数</td>
                  <td class="col-md-4">禁言原因</td>
                  <td class="col-md-1">禁言时间</td>
                  <td class="col-md-1">解禁</td>
                </tr>
                {
                banuser && banuser.map((item, index) => (
                  <tr>
                    <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                    <td><img src={item.photos} style={{borderRadius: '50%', width: '30px', height: '30px'}} /></td>
                    <td>{item.nickname}</td>
                    <td>移除</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>解禁</td>
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
