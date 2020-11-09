import React from 'react'
import { Card, Tabs } from 'antd'

import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import List from './components/list'
const { TabPane } = Tabs;

class Manager extends React.Component{

    getData = (coding) => {
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding
        }            
    })
    }

    componentDidMount(){
      this.getData("U0006")
    }

    callback = (key) => {
      
      if(key === "1") {
        this.getData("U0006")
      }else if(key === "2") {
        this.getData("U0005")
      }
    }


    render() {
        const { list } = this.props.module
        return (
            <Card>
   <Tabs 
      defaultActiveKey="1"  
      onChange={this.callback}
    >
    <TabPane tab="管理员登录日志" key="1">
      <List type="1" data={list} {...this.props} getData={() => this.getData(1)} coding="U0006" />
    </TabPane>
    <TabPane tab="用户登录日志" key="2">
      <List type="1" data={list} {...this.props} getData={() => this.getData(1)} coding="U0005" />
    </TabPane>
  </Tabs>

            </Card>
        )
    }
}

const stateToProops = (state) => {
  return {
      module: state.log
  }
}

export default connect(stateToProops, dispatchToProps)(Manager)