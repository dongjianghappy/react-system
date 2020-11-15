import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button, Popover, Row, Col, Pagination} from 'antd';
import { connect } from 'react-redux'
import { Checked, Confirm, ButtonGroup, buttonGroupArticle, Operatinavbar, Condition, R_button, R_checkbox } from '../../components/index.js'
import dispatchToProps from '../../store/dispatch'
import coding from '../../static/constant/coding'

import Item from 'antd/lib/list/Item';

class Recycle extends React.Component{
    
    getData = () => {
        const module = window.location.pathname.split("/")[2]

        this.props.select({
            api: "articleList",
            data: {
              recycle: "true",
              page: 0,
              pagesize: 10,
              coding: React.$coding[module].art
            }            
        })
    }

    componentDidMount(){
        this.getData()
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
            <td className="col-md-3">文档名称</td>
            <td className="col-md-2">分类</td>
            <td className="col-md-2">发布时间</td>
            <td className="col-md-2">删除时间</td>
            <td className="col-md-2">操作</td>
	    </tr>
        {
            list && list.map((item, index) => (
            <tr class="tr-list">
                <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                <td>{item.title}</td>
                <td>{item.parent}</td>
                <td>{item.datetime}</td>
                <td>{item.datetime}</td>
                <td>
                <Space size="middle">
                <Confirm 
                    name="还原" 
                    type="text" 
                    config={React.$modalEnum.restore.article} 
                    coding={art} 
                    data={{id: item.id, operating: "restore"}}
                    fetch={this.props.fetch} 
                    api="removeAndRestore" 
                    renderList={this.getData}
                />
                <Confirm 
                    name="清除" 
                    type="text" 
                    config={React.$modalEnum.delete} 
                    coding={art} 
                    data={{id: item.id}}
                    fetch={this.props.fetch} 
                    api="deleteArticle" 
                    renderList={this.getData}
                />
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
