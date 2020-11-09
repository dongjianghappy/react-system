import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Tabs, Input, DatePicker} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition, R_modal } from '../../../components/index.js'
import dispatchToProps from '../../../store/dispatch'
import List from './components/list.jsx';
import Detail from './components/detail'
const { TabPane } = Tabs;


class UserGrade extends React.Component{

    getData = (type) =>{
      this.props.select({
        api: 'userGrade',
        data: {
          type: type-1
        },
        node: 'grade'           
      })
    }

    componentDidMount(){
      const type = this.props.location.state && this.props.location.state.type || 1
      this.getData(type)
    }

    callback = (key) => {
      this.getData(key)
    }


    render(){

        const type = this.props.location.state && this.props.location.state.type
        debugger
        const {grade} = this.props.module
        return(
          <>
          <Card>
   <Tabs 
      defaultActiveKey={type && type.toString() || "1"}  
      onChange={this.callback}
      tabBarExtraContent={
        <R_modal.modalForm title="新增功能" name="新增功能" coding="U0003" renderList={this.getData} {...this.props} >
            <Detail />
        </R_modal.modalForm>
      }
    >
    <TabPane tab="功能权限" key="1">
      <List type="1" data={grade} {...this.props} getData={() => this.getData(1)} />
    </TabPane>
    <TabPane tab="应用权限" key="2">
      <List type="2" data={grade} {...this.props} getData={() => this.getData(2)} />
    </TabPane>
  </Tabs>




            </Card>

          </>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
    global: state.common.global,
    state,
    module: state.user
  }
}

export default connect(stateToProops, dispatchToProps)(UserGrade)
