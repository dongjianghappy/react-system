import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button, Popover, Row, Col, Pagination} from 'antd';
import { connect } from 'react-redux'
import {
    Status,
    R_checkbox,
    R_drawer,
    R_button,
    Dialog,
    Condition,
    Quick,
    ModalCate
  } from '../../components/index.js'
  import {
    Navbar,
    ButtonGroup,
    Option,
    OptionSelect,
    ModalGroup
  } from '../../common'
import dispatchToProps from '../../store/dispatch'
import coding from '../../static/constant/coding'
import api from '../../api'
import Item from 'antd/lib/list/Item';
import Flags from './components/flags'


class List extends React.Component{

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

    componentDidMount(){
        this.props.select({
          api: "articleList",
          data: {
            coding: "K0000"
          }            
      })
        this.props.getFlagAction()
    }

    handleClick = (data) => {
        this.props[data.dispatch](data)
    }  

    render(){

        const path = this.props.match.path.split("/")[2]

        const { cate, art} = coding[path]
        const {list } = this.props.module
        debugger

        this.option[0].list = [
            {
                value: "",
                name: "全部"
              },
              ...this.props.flags
            ]


        return(
            <div>
                <ModalGroup {...this.props} article="" coding={art} />

                <div style={{marginBottom: 15}}>
                    <ul className="navbar">
                    <li>文档管理</li>
                    <li>正在审核</li>
                    <li>已退回</li>
                    <li><Button onClick={() => this.props.history.push('/admin/source/article/')}>新增文档</Button></li>
                    <li className="search"><Condition /></li>
                    </ul>
                    <Option option={this.option} getConditionAction={this.props.getConditionAction} />
                </div>
                <Card>
                  <table width="100%" className="table-striped table-hover artlist col-left-23">
                    <tr className="th">
                      <td className="col-md-1">选择</td>
                      <td className="col-md-1">id</td>
                      <td className="col-md-4">名称</td>
                      <td className="col-md-2">分类</td>
                      <td className="col-md-1">浏览 | 下载</td>
                      <td className="col-md-1">发布时间</td>
                      <td className="col-md-1">状态</td>
                      <td className="col-md-1">操作</td>
                    </tr>
                    {
                      list && list.map((item, index) => (
                      <tr class="tr-list">
                        <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                      <ModalCate {...this.props} id={item.id} artCoding={art} coding={cate}>{item.parent ? item.parent : "未分类"}</ModalCate>
                        </td>
                        <td>{item.visit}|{item.download}</td>
                        <td>{item.datetime}</td>
                        <td><Status type="switch" coding={art} field="checked" {...item} updateStatus={this.props.updateStatus} /></td>
                        <td>
                        <Space size="middle">
                          <Link to={{pathname:'/admin/source/article/', state:{id: item.id}}}>编辑</Link>
                          <R_button.del click={this.handleClick} id={item.id} title="删除当前数据" dispatch="popup" node="dialog" fn="removeAndRestore" />
                          <Popover placement="left" content={
                              <div>
                                  <p>编号：{item.id}</p>
                                  <p>标签: {item.label}</p>
                                  <p>作者: {item.id}</p>
                                  <p>来源: {item.source}</p>
                                  <p>更新时间: {item.datetime}</p>
                              </div>
                          }>
                          <Button type="link" size="small">更多</Button>
                          </Popover>
                          <a></a>
                      </Space>
                        </td>
                      </tr>
                      ))
                    }
                  </table>
                </Card>

                <Row style={{marginTop: 15}}>
                    <Col span={12}>
                    <ButtonGroup {...this.props} flags={Flags} button={['all', 'delete', 'open', 'close']} ></ButtonGroup>
                    </Col>   
                </Row>
                
                <input id="coding" type="hidden" value={art} />
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

export default connect(stateToProops, dispatchToProps)(List)
