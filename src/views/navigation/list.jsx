import React from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form } from 'antd'
import { Link } from 'react-router-dom'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick} from '../../components/index.js'
import {
  ButtonGroup
} from '../../common'
import Article from './article'

import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'

class Single extends React.Component{
     
    componentDidMount(){
      this.props.select({
        api: "singleNav",
        data: {
          channel: this.props.match.params.channel_id
        },
        node: "single"            
      })
  }

  onFinish = values => {
    console.log('Success:', values);
  }


  handleClick = (data) => {
    this.props[data.popup || data.global.data.fn](data)
  }   

    render(){
        const { single } = this.props.module
        
        return(

            <div>
              
              
            <Card title="单页列表" extra={
                <Space>
                <Button onClick={() => this.props.history.push('/admin/navigation/single/article')}>新增单页</Button>
                <Button onClick={() => this.props.history.push('/admin/navigation')} {...this.props}>返回</Button>
                </Space>
              }>

              <table width="100%" className="table-striped col-left-345">
                <tr className="th">
                  <td className="col-md-1">选择</td>
                  <td className="col-md-1">顺序</td>
                  <td className="col-md-2">名称</td>
                  <td className="col-md-2">路径</td>
                  <td className="col-md-2">文件</td>
                  <td className="col-md-1">标识</td>
                  <td className="col-md-1">状态</td>
                  <td className="col-md-2">操作</td>
                </tr>
                {
                  single && single.map((item, index) => (
                    <tr className="tr-list" key={item.id}>
                        <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                        <td>
                        <Quick
                          id={item.id}
                          title={item.sort}
                          field="sort"
                          coding="P0002"
                          changeData={this.props.changeData}
                        />
                        </td>
                        <td>
                        <Quick
                          id={item.id}
                          title={item.title}
                          field="title"
                          coding="P0002"
                          changeData={this.props.changeData}
                        />
                        </td>
                        <td>
                        <Quick
                          id={item.id}
                          title={item.dir_file}
                          field="dir_file"
                          coding="P0002"
                          changeData={this.props.changeData}
                        />
                        </td>
                        <td>{item.html}</td>
                        <td>
                        <Quick
                          id={item.id}
                          title={item.source}
                          field="source"
                          coding="P0002"
                          changeData={this.props.changeData}
                        />
                        </td>
                        <td><Status type="switch" coding="P0002" field="status" updateStatus={this.props.updateStatus} /></td>
                        <td>
                          <Space>
                          <Link to={{pathname:'/admin/navigation/single/article', state:{id: item.id}}}>编辑</Link>
                            <R_button.del click={this.handleClick} id={item.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                          </Space>
                        </td>
                    </tr>
                  ))
                }
              </table>
                </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
      module: state.navigation,
  }
}

export default connect(stateToProops, dispatchToProps)(Single)
