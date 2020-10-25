import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import CreatRole from './components/modal/createRole'

const { Search } = Input;
const { RangePicker } = DatePicker;

class UserList extends React.Component{

    constructor(props){
      super(props)
    }

    

    componentDidMount(){
      this.props.select({
        data: {
          coding: "U0016",
          page: 0,
          pagesize: 10,
        },
        node: 'user'           
      })
    }


    render(){
        const {user} = this.props.module
        return(

          <Card title="用户列表" extra={
            <div>
            <Space>
              <CreatRole name="创建角色" title="新增角色" {...this.props} coding="U0016" />
          </Space>
          </div>
      }>

            <table width="100%" className="table-striped table-hover col-left-1">
              <tr className="th">
                <td className="col-md-4">名称</td>
                <td className="col-md-4">个数</td>
                <td className="col-md-2">新增日期</td>
                <td className="col-md-2">操作</td>
              </tr>
              {
              user && user.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.num}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <Space>
                      <CreatRole size="small" name="编辑" title="编辑角色" action="edit" id={item.id} {...this.props} coding="U0016" />
                      <Link to={{pathname:'/admin/user/role/grade', state:{id: item.id}}}>查看</Link>
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
