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
              title: '会员账号',
              dataIndex: 'account',
            },{
                title: '用户名',
                dataIndex: 'nickname',
                render: text => <a>{text}</a>,
              },
              {
                title: '电子邮件',
                dataIndex: 'email',
              },
              {
                title: '注册日期',
                dataIndex: 'last_login_time',
              },{
                  title: '在线/天',
                  dataIndex: 'online',
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
      api.userList({
        level: 0
      }).then(res => {
        this.setState({
            data: res.result,
            total: res.result.total,
            pages: res.result.pages
        })
      })

      
    }


    render(){


        const {columns, data} = this.state
        return(

          <Card title="用户列表" extra={
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
                    dataSource={data}
                    pagination={false}
                />
            </Card>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
      inputValue: state.inputValue,
      list: state.channel.list
  }
}

export default connect(stateToProops, dispatchToProps)(UserList)
