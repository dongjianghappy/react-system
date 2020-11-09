import React from 'react'
import { Card, Table, Space, Row, Col, Button, Tabs} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition,
  Quick,
  R_pagination
} from '../../components/index.js'
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Operatinavbar
} from '../../common'
import SellList from './components/sell_list'
import List from './components/list'
import ApplyList from './components/apply_list.jsx';
import Article from './components/article'
import dispatchToProps from '../../store/dispatch'

const { TabPane } = Tabs;

class Links extends React.Component{

    option = [
      {
        name: "来源",
        field: 'source',
        list: [
          {
            value: "",
            name: "全部"
          },
          ...React.$enums.linkType
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
          {
            value: "0",
            name: "首页"
          },
          {
            value: "1",
            name: "全站"
          }
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

    getData = (data) => {
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "P0003",
          ...data
        }            
    })
    }

    componentDidMount(){
      this.getData({
        method : 0,
        apply_checked : 1
      })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    callback = (key) => {
      
      if(key === "1") {
        this.getData({
          method : 0,
          apply_checked : 1
        })
      }else if(key === "2") {
        this.getData({
          method : 1,
          apply_checked : 1
        })
      }else if(key === "3") {
        this.getData({
          apply_checked : 0
        })
      }
    }

    render(){
      debugger
      const {list} = this.props.module
        return (
            <div>
              <ModalGroup {...this.props} article={Article} coding="P0003" />
              
                <div style={{marginBottom: 15}}>
                  <Option option={this.option} select={this.props.select} coding="P0003" />
                </div>

          <Card>
            <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
                tabBarExtraContent={
                  <Space>
                  <R_drawer.drawerForm title="新增导航" name="新增友情链接" coding="P0003" renderList={this.getData} {...this.props} >
                    <Article />
                  </R_drawer.drawerForm>
                </Space>
                }
              >
              <TabPane tab="出售友链" key="1">
                <SellList type="1" data={list} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="交换友链" key="2">
                <List type="1" data={list} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="申请友链" key="3">
                <ApplyList type="1" data={list} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
            </Tabs>




                </Card>
                <input id="coding" type="hidden" value="P0003" />
            </div>
        )
    }
}

const stateToProops = (state) => {
  debugger
  return {
    global: state.common.global,
    state,
    module: state.link
  }
}

export default connect(stateToProops, dispatchToProps)(Links)
