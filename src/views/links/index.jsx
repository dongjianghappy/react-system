import React from 'react'
import { Card, Table, Space, Row, Col} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition,
  Quick
} from '../../components/index.js'
import {
  Node,
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
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

    // state ={
    //     columns: [
    //         {
    //           title: '选择',
    //           dataIndex: 'name',
    //           render: (text, record) => (
    //             <R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={record.id}></R_checkbox>
    //           ),
    //         },
    //         {
    //           title: '网站名称',
    //           dataIndex: 'name',
    //         },
    //         {
    //           title: '链接地址',
    //           dataIndex: 'url',
    //         },
    //         {
    //             title: '来源',
    //             dataIndex: 'source',
    //             render: text => React.$enums.linkType[text].name,
    //           },
    //         {
    //             title: '类型',
    //             dataIndex: 'type',
    //         render: text => (
    //         <a>{text}</a>
    //         ),
    //           },   
              
    //         {
    //             title: '价格(元/月)',
    //             dataIndex: 'price',
    //             render: text => <a>{text}</a>,
    //           },
    //         {
    //             title: '结束日期',
    //             dataIndex: 'datetime',
    //             render: text => <a>{text}</a>,
    //           },                
    //           {
    //             title: '状态',
    //             dataIndex: 'status',
    //             render:(text, record) => (
    //               <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
    //             )
    //           },
    //           {
    //             title: '操作',
    //             dataIndex: 'operating',
    //             render: (text, record) => (
    //               <div>
    //                 <Space>
    //                   <R_button.edit click={this.handleClick} id={record.id} action="edit" title="编辑友链" dispatch="popup" node="drawer" />
    //                   <R_button.del click={this.handleClick} id={record.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
    //                 </Space>
    //               </div>
    //             ),
    //           },
    //     ]
    // }

    componentDidMount(){
      this.props.select({
        data: {
          page: 0,
          pagesize: 10,
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
                  <ul className="navbar">
                    <li>出售站点</li>
                    <li>交换站点</li>
                    <li><R_button.link click={this.handleClick} action="add" name="新增友链" title="新增友链" dispatch="popup" node="drawer" /></li>
                    <li className="search"><Condition /></li>
                  </ul>
                  <Option option={this.option} select={this.props.select} coding="P0003" />
                </div>

          <Card>
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
                      <R_button.edit click={this.handleClick} id={item.id} action="edit" title="编辑友链" dispatch="popup" node="drawer" />
                      <R_button.del click={this.handleClick} id={item.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                    </Space>
                  </td>
                </tr>
            ))
            }
          </table>
                </Card>
                <ButtonGroup node={ this.props.node } {...this.props} button={['all', 'delete', 'open', 'close']}></ButtonGroup>
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
