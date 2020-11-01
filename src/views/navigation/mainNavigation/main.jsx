import React from 'react';
import {Space, Card, Table, Checkbox, Button, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Status, R_button, R_drawer, R_checkbox, Dialog, Quick} from '../../../components/index.js'
import {
  ButtonGroup,
  Option,
} from '../../../common'
import NavigationDrawer from './components/navigationDrawer'
import Detail from './components/detail'
import { checkButtonAuth, getChannel } from '@/utils/auth'

import { connect } from 'react-redux'
import dispatchToProps from '../../../store/dispatch'

class Index extends React.Component{

    state = {
      option: [
        {
          name: "导航类型: ",
          field: 'channel',
          list: []
        }
      ]
    }


     
    async componentDidMount(){
    const res = await this.props.fetch({
        api: "static"          
    })
    

    this.setState(() => {
      return this.state.option[0].list = res.result
    })
    

     let module = window.location.pathname.split("/")[2]

      let channel = '0'
      if(module === 'tech'){
        channel = '1'
      }else if(module === 'article'){
        channel = '2'
      }else if(module === 'source'){
        channel = '3'
      }

      this.props.select({
        api: "navigation",
        data: {
          channel: channel
        },
        node: "main"            
      })
  }

  handleClick = (data) => {
    this.props[data.popup || data.global.data.fn](data)
  }     
  
    render(){
        const { main } = this.props.module
        return(

            <div>
                <div style={{marginBottom: 15}}>
                  <Option option={this.state.option} select={this.props.select} api="navigation" node="main" />
                </div>
            <Card title="导航列表" extra={
                <Space>
                  <R_drawer.drawerForm title="新增导航" coding="P0001" {...this.props} >
                    <Detail />
                  </R_drawer.drawerForm>
                  {/* <NavigationDrawer {...this.props} title="新增导航" /> */}
                </Space>
              }>




<div id="content">
    <table width="100%" className="table-striped col-left-34">
      <tr className="th">
        <td className="col-md-1">选择</td>
        <td className="col-md-1">顺序</td>
        <td className="col-md-4"><span className="icon-cate"></span>名称</td>
        <td className="col-md-3">连接</td> 
        <td className="col-md-1">状态</td>   
        <td className="col-md-2">操作</td>
      </tr>
      {
        main && main.map((item, index) => (
        <>
        <tr className="tr-list">
          <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
          <td>
            <Quick
              id={item.id}
              title={item.sort}
              field="sort"
              coding="P0001"
              changeData={this.props.changeData}
            />
          </td>
          <td><i class="iconfont iconslide icon-anonymous-iconfont"></i>
            <Quick
              id={item.id}
              title={item.name}
              field="name"
              coding="P0001"
              width="80%"
              changeData={this.props.changeData}
            />
          <img src={require('../../../static/image/spread.gif')} title="添加二级导航" />
          </td>
          <td>
          <Quick
              id={item.id}
              title={item.url}
              field="url"
              coding="P0001"
              changeData={this.props.changeData}
            />
          </td>
          <td><Status type="switch" coding="P0003" field="status" {...item} updateStatus={this.props.updateStatus} disabled={checkButtonAuth('b:navigation:main:status')} /></td>
          <td>
          <Space>
            {/* <NavigationDrawer id={item.id} {...this.props} title="编辑导航" /> */}
            <R_drawer.drawerForm title="编辑导航" id={item.id} coding="P0001" {...this.props} >
              <Detail />
            </R_drawer.drawerForm>
            <R_button.del click={this.handleClick} id={item.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" disabled={checkButtonAuth('b:navigation:main:delete')} />
          </Space>
          </td>
        </tr>
        {
          item.list ? 
          <tr className="tr-slide">
            <td colspan="8" className="p0">
              {
                item.list.map((ss, i) => (
                  <table width="100%" className="table-bordered table-condensed table-hover color-cate">
                        <tr className="tr-list">
                          <td className="col-md-1"><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={ss.id}></R_checkbox></td>
                          <td className="col-md-1">
                            <Quick
                              id={ss.id}
                              title={ss.sort}
                              field="sort"
                              coding="P0001"
                              changeData={this.props.changeData}
                            />
                          </td>
                          <td className="col-md-4">
                            <i class="cate-two"></i>
                            <i class="iconfont icon-jianhao iconslide"></i>
                            <Quick
                              id={ss.id}
                              title={ss.name}
                              field="name"
                              coding="P0001"
                              width="69%"
                              changeData={this.props.changeData}
                            />
                          </td>
                          <td className="col-md-3">
                          <Quick
                              id={ss.id}
                              title={ss.url}
                              field="url"
                              coding="P0001"
                              changeData={this.props.changeData}
                            />
                          </td>
                          <td className="col-md-1"><Status type="switch" coding="P0003" field="status" {...item} updateStatus={this.props.updateStatus} disabled={checkButtonAuth('b:navigation:main:status')} /></td>
                          <td className="col-md-2">
                          <Space>
                          <R_drawer.drawerForm title="编辑导航" id={ss.id} coding="P0001" {...this.props} >
                            <Detail />
                          </R_drawer.drawerForm>
                            <R_button.del click={this.handleClick} id={ss.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" disabled={checkButtonAuth('b:navigation:main:delete')} />
                          </Space>
                          </td>
                        </tr>
                  </table>
                ))
              }
            </td>
          </tr>
        : ""
        }
        </>
        ))
      }

    </table>
    </div>













                    {/* <Table
                        key="id"
                        columns={columns}
                        dataSource={main}
                        pagination={ false }
                    ></Table> */}

                <ButtonGroup node={ this.props.node } {...this.props} button={['all', 'delete', 'open', 'close']}></ButtonGroup>
                <input id="coding" type="hidden" value="P0001" />
                </Card>
            </div>
        )
    }
}

const stateToProops = ({navigation}) => {

  return {
      module: navigation
  }
}

export default connect(stateToProops, dispatchToProps)(Index)