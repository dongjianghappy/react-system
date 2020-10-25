import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import coding from '../../static/constant/coding'
import api from '../../api';

const { Search } = Input;
const { RangePicker } = DatePicker;

class UserList extends React.Component{

    constructor(props){
      super(props)
    }

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '会员账号',
              dataIndex: 'phone',
            },
            {
              title: '用户名',
              dataIndex: 'account',
            },{
                title: '电子邮箱',
                dataIndex: 'nickname',
                render: text => <a>{text}</a>,
              },
              {
                title: '注册原因',
                dataIndex: 'email',
              },
              {
                title: '注册日期',
                dataIndex: 'last_login_time',
              }
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
      this.props.select({
        api: 'userList',
        node: 'audit'           
      })
    }


    render(){
      const {columns} = this.state

        const {audit} = this.props.module
        return(

          <Card title="用户列表" >

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={audit}
                    pagination={false}
                />
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
