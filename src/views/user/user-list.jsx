import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import SetUser from './components/drawer/setUser'
 
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
      this.props.select({
        api: 'userList',
        node: 'user'           
      })
    }


    render(){
      const {columns} = this.state

        const {user} = this.props.module
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

            <table width="100%" className="table-striped table-hover col-left-23">
              <tr className="th">
                <td className="col-md-1">选择</td>
                <td className="col-md-1">头像</td>
                <td className="col-md-2">会员账号</td>
                <td className="col-md-2">用户名</td>
                <td className="col-md-2">电子邮箱</td>
                <td className="col-md-2">注册日期</td>
                <td className="col-md-1">在线/天</td>
                <td className="col-md-1">操作</td>
              </tr>
              {
              user && user.map((item, index) => (
                <tr>
                  <td></td>
                  <td>
                    <span className="relative">
                      <img src={item.photos} style={{borderRadius: '50%', width: '30px', height: '30px'}} />
                      <i className="iconfont  icon-female  absolute font12" style={{bottom: 0}}></i>
                    </span>
                  </td>
                  <td>
                    {item.account}
                    {
                      item.role !== '0' ?
                      <span style={{backgroundColor: "#52c41a", position: "relative", left: "9px", display: "inline-block", width: "6px", height: "6px", verticalAlign: "middle", borderRadius: "50%"}}></span>
                      : ""
                    }
                  </td>
                  <td>{item.nickname}</td>
                  <td>{item.email}</td>
                  <td>{item.last_login_time}</td>
                  <td>{item.online}</td>
                  <td>
                    <Space size="middle">
                      <Button type="primary" size="small">推送</Button>
                      <SetUser type="primary" size="small" name="设置" title="用户信息" {...this.props} id={item.id} {...item} />
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
