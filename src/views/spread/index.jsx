import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch, Pagination, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Status,
  Dialog,
  R_checkbox,
  R_button,
  Condition,
  R_drawer,
  Quick
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Operatinavbar
} from '../../common'
import Article from './article'
import dispatchToProps from '../../store/dispatch'


class Spread extends React.Component{
    
  getData = () => {
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "P0006"
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
                <ModalGroup {...this.props} article={Article} coding="P0006" />

                <Card
                  title="推广管理"
                  extra={
                    <R_drawer.drawerForm title="新增推广" name="新增推广" coding="P0006" renderList={this.getData} {...this.props} >
                      <Article />
                    </R_drawer.drawerForm>
                  }
                >
                <table width="100%" class="table-striped table-hover col-left-34">
                  <tr>
                    <td className="col-md-1">选择</td>
                    <td className="col-md-1">顺序</td>
                    <td className="col-md-2">推广名称</td>
                    <td className="col-md-3">推广链接</td>
                    <td className="col-md-1">价格(元/每月)</td>
                    <td className="col-md-2">时间</td>
                    <td className="col-md-1">状态</td>
                    <td className="col-md-1">操作</td>
                  </tr>
                  {
                    list && list.map((item, index) => (
                    <tr class="tr-list">
                      <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                      <td><Quick id={item.id} title={item.sort} field="sort" coding="P0006" changeData={this.props.changeData}/></td>
                      <td><Quick id={item.id} title={item.name} field="name" coding="P0006" changeData={this.props.changeData}/></td>
                      <td><Quick id={item.id} title={item.url} field="url" coding="P0006" changeData={this.props.changeData}/></td>
                      <td>{item.price}</td>
                      <td>{item.datetime}</td>
                      <td><Status type="switch" coding="P0006" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                      <td>
                      <Space>
                      <R_drawer.drawerForm title="编辑推广内容" name="编辑" id={item.id} coding="P0006" renderList={this.getData} {...this.props} >
                        <Article />
                      </R_drawer.drawerForm>
                  <R_button.del click={this.handleClick} id={item.id} title="删除推广" dispatch="popup" node="dialog" fn="getDelete" />
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
                  coding="P0006"
                  {...this.props}
                />
                <input id="coding" type="hidden" value="P0006" />
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
    module: state.spread
  }
}

export default connect(stateToProops, dispatchToProps)(Spread)
