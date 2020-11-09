import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker, Tabs} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { R_checkbox } from '@/components/index.js'
import dispatchToProps from '@/store/dispatch'
import EmailList from './components/email-list'
import List from './components/list'

const { TabPane } = Tabs;

class UserList extends React.Component{

  getData = (data) => {
    this.props.select({
      api: 'userList',
      data: {
        ...data
      },
      node: 'audit'           
    })
  }

    componentDidMount(){
      this.getData({
        register_checked: 0
      })
    }

    callback = (key) => {
      
      if(key === "1") {
        this.getData({
          register_checked: 0
        })
      }else if(key === "2") {
        this.getData({
          email_checked : 1
        })
      }
    }

    render(){
        const {audit} = this.props.module
        return(

          <Card>


            <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
              >
              <TabPane tab="注册审核" key="1">
                <List type="1" data={audit} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="邮件审核" key="2">
                <EmailList type="1" data={audit} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
            </Tabs>

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
