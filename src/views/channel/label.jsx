import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button, Popover, Row, Col, Pagination} from 'antd';
import { connect } from 'react-redux'
import { Checked, Dialog, ButtonGroup, buttonGroupArticle, Operatinavbar, Condition, R_button, R_checkbox, Quick } from '../../components/index.js'
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
              title: '顺序',
              dataIndex: 'id',
            },
            {
              title: '标签名称',
              dataIndex: 'remark',
            },
            {
                title: '标签值',
                dataIndex: 'value'
            },
            {
                title: 'tag',
                dataIndex: 'tag'
            },
            {
                title: 'icon标签',
                dataIndex: 'icon',
                render: text => <a>{text}<i className={`iconfont icon-${text}`}></i></a>,
            }
        ],
        data: [],
        total: 0,
        pages: 0,
        list: [],
        allChecked: true
    };

    componentDidMount(){
        this.props.select({
            api: 'getFlag',
            data: {
              coding: "O0002",
              channel_id: 3,
              type: 'art'
            }          
          })
    }

    render(){

        const path = this.props.match.path.split("/")[2]

        const { cate, art} = coding[path]

        const {columns} = this.state
        const { common } = this.props
        const { global } = common
        const {list, total, pages} = this.props

        return(

            <div>

            
                <div style={{marginBottom: 15}}>
                <ul className="navbar">
                <li>导航标签</li>
                <li>分类标签</li>
                <li>文档标签</li>
                <li>新增标签</li>
                </ul>
            </div>

                <Card>
         <table width="100%" className="table-striped table-hover artlist artlist">
            <tr class="th">
                <td className="col-md-1">选择</td>
                <td className="col-md-1">顺序</td>
                <td className="col-md-3">标签名称</td>
                <td className="col-md-3">标签值</td>
                <td className="col-md-1">tag</td>
                <td className="col-md-3">icon标签</td>
            </tr>
            {
            list && list.map((item, index) => (
            <tr class="tr-list">
                <td><R_checkbox onChange={this.props.checkBox} list={this.props.common.global.checkedList} data={item.id}></R_checkbox></td>
                <td><Quick id={item.id} title={item.sort} field="sort" coding="O0002" changeData={this.props.changeData}/></td>
                <td>{item.remark}</td>
                <td><Quick id={item.id} title={item.value} field="value" coding="O0002" changeData={this.props.changeData}/></td>
                <td><Quick id={item.id} title={item.tag} field="tag" coding="O0002" changeData={this.props.changeData}/></td>
                <td>
                    <Quick id={item.id} title={item.tag} field="tag" width="30%" coding="O0002" changeData={this.props.changeData}/>
                    <Quick id={item.id} title={item.color} field="color" width="50%" coding="O0002" changeData={this.props.changeData}/>
                </td>
            </tr>
            ))
        }
        </table>
            

        
                </Card>
                <input id="coding" type="hidden" value="O0002" />
                </div>
        )
    }
}

const stateToProops = (state) => {
    return {
        common: state.common,
        inputValue: state.inputValue,
        list: state.common.list
    }
  }

export default connect(stateToProops, dispatchToProps)(Recycle)
