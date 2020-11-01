import React from 'react'
import { Card, Table, Space, Row, Col, Button} from 'antd';
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
import Article from './article'
import dispatchToProps from '../../store/dispatch'

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


    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "P0003"
        }            
    })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    render(){
      debugger
      const {list} = this.props.module
        return (
            <div>
              <ModalGroup {...this.props} article={Article} coding="P0003" />
              
                <div style={{marginBottom: 15}}>
                  <div className="mb15">
                    <Space>
                  <Button>站点管理</Button>
                  <Button>站点管理</Button>
                  <R_drawer.drawerForm title="新增导航" name="新增友情链接" coding="P0003" {...this.props} >
                    <Article />
                  </R_drawer.drawerForm>
                    </Space>
                  </div>
                  <Option option={this.option} select={this.props.select} coding="P0003" />
                </div>

          <Card title="列表管理">
          <table width="100%" className="table-striped table-hover col-left-23">
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-2">网站名称</td>
              <td className="col-md-2">链接地址</td>
              <td className="col-md-1">来源</td>
              <td className="col-md-1">类型</td>
              <td className="col-md-1">价格(元/月)</td>
              <td className="col-md-1">结束日期</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {
            list && list.map((item, index) => (
                <tr>
                  <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                  <td>
                  <Quick
                    id={item.id}
                    title={item.name}
                    field="name"
                    coding="P0003"
                    changeData={this.props.changeData}
                  />
                  </td>
                  <td>
                  <Quick
                    id={item.id}
                    title={item.url}
                    field="url"
                    coding="P0003"
                    changeData={this.props.changeData}
                  />
                  </td>
                  <td>{React.$enums.linkType[item.source].name}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.datetime}</td>
                  <td><Status type="switch" coding="P0003" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                  <td>
                    <Space>
                      <R_drawer.drawerForm title="编辑友链" name="编辑" id={item.id} coding="P0003" {...this.props} >
                        <Article />
                      </R_drawer.drawerForm>
                      {/* <R_button.edit click={this.handleClick} id={item.id} action="edit" title="编辑友链" dispatch="popup" node="drawer" /> */}
                      <R_button.del click={this.handleClick} id={item.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                    </Space>
                  </td>
                </tr>
            ))
            }
          </table>
                <Operatinavbar 
                  node={ this.props.node }
                  button={['all', 'delete', 'open', 'close']}
                  data={this.props.module}
                  coding="P0003"
                  {...this.props}
                />
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
