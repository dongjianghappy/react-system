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
              title: '头像',
              dataIndex: 'phone',
            },
            {
                title: '用户名',
                dataIndex: 'nickname',
                render: text => <a>{text}</a>,
            },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <Button type="primary" size="small">推送</Button>
                      <Button type="primary" size="small">详情</Button>
                    </Space>
                  ),
              },
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
      this.props.select({
        api: 'userList',
        node: 'recommend'           
      })
    }


    render(){
      const {columns} = this.state

        const {recommend} = this.props.module
        return(

          <Card title="推荐关注" extra={
            <div>
            <Space>
            <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    注册时间 <RangePicker />
    <Button type="primary">搜索</Button>
    <Button type="default">重置</Button>
  
          </Space>
          </div>
      }>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={recommend}
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
