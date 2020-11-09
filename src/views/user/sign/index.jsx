import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker, Tabs} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, R_modal } from '@/components/index.js'
import dispatchToProps from '@/store/dispatch'
import List from './components/list'
import Detail from './components/detail'

const { TabPane } = Tabs;

class UserList extends React.Component{

    getData = () => {
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "U0011"
        },
        node: 'sign'           
      })
    }

    componentDidMount(){
      this.getData()
    }


    render(){
        const {sign} = this.props.module
        return(

          <Card>

            <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
                tabBarExtraContent={
                  <Space>
                    <R_modal.modalForm title="添加选项" name="添加选项" coding="U0011" renderList={this.getData} {...this.props} >
                        <Detail />
                    </R_modal.modalForm>
                </Space>
                }
              >
              <TabPane tab="积分设置" key="1">
                <List type="1" data={sign} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="积分兑换" key="2">
                {/* <EmailList type="1" data={audit} {...this.props} getData={() => this.getData(1)} /> */}
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
