import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button, Popover, Row, Col, Form, Input, Tabs} from 'antd';
import { connect } from 'react-redux'
import moment from 'moment'
import {
    Status,
    R_checkbox,
    R_drawer,
    R_button,
    Confirm,
    Condition,
    Quick,
    ModalCate,
    Search,
    Sorter
  } from '@/components/index.js'
  import {
    Navbar,
    ButtonGroup,
    Option,
    OptionSelect,
    ModalGroup,
    Operatinavbar
  } from '@/common'
import dispatchToProps from '@/store/dispatch'
import coding from '@/static/constant/coding'
import Flags from '../components/flags'
import Statistics from './components/statistics'
import List from './components/list'

const { TabPane } = Tabs;

class Index extends React.Component{

    option = [
        {
          name: "属性",
          field: 'flags',
          list: []
        },
        {
          name: "状态",
          field: 'checked',
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

    getData = (params = {}) => {
      const module = window.location.pathname.split("/")[2]

      this.props.select({
        api: "articleList",
        data: {
          coding: React.$coding[module].art,
          page: 0,
          pagesize: 15,
          ...params
        }            
    })
    }

    componentDidMount(){
      this.getData()
      this.props.getFlagAction()
    }

    handleClick = (data) => {
        this.props[data.dispatch](data)
    }  

    render(){

        const path = this.props.match.path.split("/")[2]

        const { cate, art} = coding[path]
        const {list } = this.props.module

        this.option[0].list = [
            {
                value: "",
                name: "全部"
              },
              ...this.props.flags
            ]


        return(
            <div>

                <div style={{marginBottom: 15}}>
                    <Option 
                      api="articleList"
                      option={this.option} 
                      select={this.props.select} 
                      search={{
                        show: true,
                        params: this.props.common.global.search,
                        searchField: this.props.searchField,
                        render: () => (
                          <>
                            <Form.Item name="title">
                                <Input placeholder="关键词查找" prefix={<i className="iconfont icon-search" />} className="input-250 input-sm mr10" />
                            </Form.Item>
                          </>
                        )
                      }}
                      coding={art}
                    />
                </div>
                
                
                <Statistics />
                

                <Card>



                <Tabs 
                    defaultActiveKey="1"  
                    onChange={this.callback}
                    tabBarExtraContent={
                      <Link to={{pathname:'/admin/article/detail', state:{coding: art, channel_id: 3}}}>新增文档</Link>
                    }
                  >
                  <TabPane tab="文档管理" key="1">
                    <List type="1" data={list} {...this.props} />
                  </TabPane>
                  <TabPane tab="正在审核" key="2">
                    {/* <List type="1" data={list} {...this.props} getData={() => this.getData(1)} /> */}
                  </TabPane>
                  <TabPane tab="已退回" key="3">
                    {/* <ApplyList type="1" data={list} {...this.props} getData={() => this.getData(1)} /> */}
                  </TabPane>
                </Tabs>
                </Card>
                </div>
        )
    }
}

const stateToProops = (state) => {
    return {
        module: "channel",
        state,
        common: state.common,
        global: state.common.global,
        module: state.channel,
        flags: state.channel.flags
    }
  }

export default connect(stateToProops, dispatchToProps)(Index)
