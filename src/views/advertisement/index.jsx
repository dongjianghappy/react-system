import React from 'react'
import { Card, Table, Space, Checkbox, Tabs} from 'antd';
import {
  Status,
  Dialog,
  Condition,
  R_button,
  R_checkbox,
  R_drawer,
  Quick
} from '../../components/index.js'
import {
  ButtonGroup,
  Option,
  ModalGroup,
  Operatinavbar
} from '../../common'
import { connect } from 'react-redux'
import Detail from './components/detail'
import dispatchToProps from '../../store/dispatch'
import Statistics from './components/statistics'
import List from './components/list'
const { TabPane } = Tabs;

class Advertisement extends React.Component{
    
  option = [
    {
      name: "来源",
      field: 'source',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.adSource
      ]
    },
    {
      name: "显示",
      field: 'display',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.adDisplay
      ]
    },
    {
      name: "类型",
      field: 'type',
      list: [
        {
          value: "",
          name: "全部"
        },
        ...React.$enums.adType
      ]
    },
    {
      name: "状态",
      field: 'status',
      list: [
        {
          val: "",
          name: "全部"
        },
        {
          value: "1",
          name: "开启"
        },
        {
          value: "0",
          name: "关闭"
        }
      ]
    },
  ]

  getData = () => {
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "P0008"
      }            
  })
  }

    componentDidMount(){
      this.getData()
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }    

    render(){
        const {list, total, pages} = this.props.module

        return (
            <div>

                <Statistics />
                <Card>

                <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
                tabBarExtraContent={
                  <Space>
                  <R_drawer.drawerForm title="新增广告" name="新增广告" action="add" coding="P0008" renderList={this.getData} {...this.props} >
                    <Detail />
                  </R_drawer.drawerForm>
                </Space>
                }
              >
              <TabPane tab="广告管理" key="1">
                <List type="1" data={list} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="广告申请" key="2">
                {/* <List type="1" data={list} {...this.props} getData={() => this.getData(1)} /> */}
              </TabPane>
              <TabPane tab="订单列表" key="3">
                {/* <ApplyList type="1" data={list} {...this.props} getData={() => this.getData(1)} /> */}
              </TabPane>
            </Tabs>
                </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
    global: state.common.global,
    state,
    module: state.advertisement
  }
}

export default connect(stateToProops, dispatchToProps)(Advertisement)