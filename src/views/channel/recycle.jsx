import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button, Popover, Row, Col, Pagination} from 'antd';
import { connect } from 'react-redux'
import { Checked, Dialog, ButtonGroup, buttonGroupArticle, Operatinavbar, Condition, R_button, R_checkbox } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import coding from '../../static/constant/coding'

import Item from 'antd/lib/list/Item';

class Recycle extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: (text, record) => (
               
                // checked={
                //     this.props.common.global.checkedList.some((item, index) => item[index].id)
                // } 
                
                <R_checkbox onChange={this.props.checkBox} list={this.props.common.global.checkedList} data={record.id}></R_checkbox>
              ),
            },
            {
              title: '编号',
              dataIndex: 'id',
            },
            {
              title: '文档名称',
              dataIndex: 'title',
            },
            {
                title: '分类',
                dataIndex: 'parent'
            },
            {
                title: '发布时间',
                dataIndex: 'dowmload'
            },
            {
                title: '删除时间',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
            },
            {
            title: '操作',
            dataIndex: 'operating',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" size="small" onClick={() => `/sucai/article/edit/${record.id}`}>还原</Button>
                    <R_button.del click={this.handleClick} id={record.id} title="删除当前数据" dispatch="popup" node="dialog" fn="removeAndRestore" />
                </Space>
                ),
            },
        ],
        data: [],
        total: 0,
        pages: 0,
        list: [],
        allChecked: true
    };

    componentDidMount(){
        this.props.select({
            api: "articleList",
            data: {
              page: 0,
              pagesize: 10,
              coding: "K0000"
            }            
        })
    }

    render(){

        const path = this.props.match.path.split("/")[2]

        const { cate, art} = coding[path]

        const {list, total, pages} = this.props.module

        return(

            <div>

            
                <div style={{marginBottom: 15}}>
                <ul className="navbar">
                <li>回收站</li>
                <li className="search"><Condition /></li>
                </ul>
            </div>

            <Card>
      <table width="100%" className="table-striped table-hover artlist col-left-23">
	    <tr class="th">
            <td className="col-md-1">选择</td>
            <td className="col-md-1">编号</td>
            <td className="col-md-4">文档名称</td>
            <td className="col-md-2">分类</td>
            <td className="col-md-2">发布时间</td>
            <td className="col-md-2">删除时间</td>
            <td className="col-md-1">操作</td>
	    </tr>
        {
            list && list.map((item, index) => (
            <tr class="tr-list">
                <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.parent}</td>
                <td>{item.datetime}</td>
                <td>{item.datetime}</td>
                <td>
                <Space size="middle">
                    <Button type="primary" size="small" onClick={() => `/sucai/article/edit/${item.id}`}>还原</Button>
                    <R_button.del click={this.handleClick} id={item.id} title="删除当前数据" dispatch="popup" node="dialog" fn="removeAndRestore" />
                </Space>
                </td>
            </tr>
            ))
        }
	  </table>
            </Card>
                
                <input id="coding" type="hidden" value={art} />
                </div>
        )
    }
}

const stateToProops = (state) => {
    return {
        module: state.channel,
    }
  }

export default connect(stateToProops, dispatchToProps)(Recycle)
