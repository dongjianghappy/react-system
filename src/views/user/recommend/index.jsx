import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'
import { Status, Dialog, Operatinavbar, Condition, R_checkbox } from '@/components/index.js'


class UserList extends React.Component{

    componentDidMount(){
      this.props.select({
        api: 'userList',
        node: 'recommend'           
      })
    }


    render(){

        const {recommend} = this.props.module
        return(

          <Card title="推荐关注" >

            <table width="100%" className="table-striped table-hover col-left-23">
              <tr class="th">
                <td class="col-md-1">选择</td>
                <td class="col-md-2">头像</td>
                <td class="col-md-7">用户名</td>
                <td class="col-md-2">操作</td>
              </tr>
              {
              recommend && recommend.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td><img src={item.photos} style={{borderRadius: '50%', width: '30px', height: '30px'}} /></td>
                  <td>{item.nickname}</td>
                  <td>移除</td>
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
