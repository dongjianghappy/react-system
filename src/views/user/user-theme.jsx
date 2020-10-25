import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import {
  R_button,
} from '../../components/index.js'

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
        api: 'theme',
        node: 'theme'           
      })
    }


    render(){
      const {columns} = this.state

        const {theme} = this.props.module
        return(

          <>
            <div style={{marginBottom: 15}}>
              <ul className="navbar">
                <li>所有主题</li>
                <li>新增主题</li>
              </ul>
            </div>

            <Row>
            {
            theme.map((item, index) => (
              <Col span="4">
              <Card
                  style={{ margin: 10, padding: 10 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  {item.name}
                </Card>
                </Col>
              ))
            }
            </Row>
          </>
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
