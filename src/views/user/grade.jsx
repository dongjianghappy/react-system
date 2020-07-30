import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/actions'
import AddGrade from './components/addGrade'
import coding from '../../static/constant/coding'
import api from '../../api';

const { Search } = Input;
const { RangePicker } = DatePicker;

class UserGrade extends React.Component{

    constructor(props){
      super(props)
    }

    state ={
        columns: [
            {
              title: '功能名称',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '描述',
              dataIndex: 'phone',
            },
            {
              title: '普通访客',
              dataIndex: 'account',
              render:(text, record) => (
                <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
              )
            },{
                title: '普通会员',
                dataIndex: 'nickname',
                render:(text, record) => (
                    <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
                  )
              },
              {
                title: '高级会员',
                dataIndex: 'email',
                render:(text, record) => (
                    <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
                  )
              },
              {
                title: 'VIP会员',
                dataIndex: 'last_login_time',
                render:(text, record) => (
                    <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
                  )
              },{
                  title: '超级VIP会员',
                  dataIndex: 'online',
                  render:(text, record) => (
                    <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
                  )
                },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <Button type="primary" size="small">编辑</Button>
                      <Button type="primary" size="small">删除</Button>
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
          <Card
          tabList={[
            {
              key: 'tab1',
              tab: '功能权限',
            },
            {
              key: 'tab2',
              tab: '应用权限',
            },
          ]}
          tabBarExtraContent={ 
            <Dialog type="text" butName="新增功能" title="新增功能">
                <AddGrade />
          </Dialog>
          }
          >
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

export default connect(stateToProops, dispatchToProps)(UserGrade)
