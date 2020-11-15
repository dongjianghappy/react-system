import React from 'react'
import { Card, Table, Space, Button} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  R_button,
  R_checkbox,
  Dialog,
  Condition,
  R_drawer,
  Quick
} from '../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../common'
import Article from './article'
import Buttons from './button'
import dispatchToProps from '../../store/dispatch'
// import dispatchToProps from '../../store/dispatch/fnction'

class menuRouter extends React.Component{

    getData = () => {
      this.props.select({
        api: "routerSelect",
        data: {
          page: 0,
          pagesize: 10,
          type: 0,
          coding: "P0015"
        }            
    })
    }

    componentDidMount(){
      this.getData()
    }



    handleClick = (data) => {
      debugger
      this.props[data.dispatch](data)
    }     

    tree = (data, level) => {
      switch(level){
        case 1 :
          return(
            <>
              <i class="cate-two"></i>
              <i class="iconfont icon-jianhao iconslide"></i>
              <Quick id={data.id} title={data.name} field="name" coding="P0015" width="69%" changeData={this.props.changeData} disabled={true} />
            </>
          )
        case 2 :
          return(
            <>
                                  <i class="cate-tree"></i>
                                  <i class="cate-two"></i>
                                  <i class="iconfont icon-jianhao iconslide"></i>
              <Quick id={data.id} title={data.name} field="name" coding="P0015" width="58%" changeData={this.props.changeData} disabled={true} />
            </>
          )
        case 3 :
          return(
            <>
                                  <i class="cate-tree"></i>
                                  <i class="cate-two"></i>
                                  <i class="cate-two"></i>
              <Quick id={data.id} title={data.name} field="name" coding="P0015" width="53%" changeData={this.props.changeData} disabled={true} />
            </>
          )
      }
    }
    
    renderList = (data, level) => (
      <>
      <input type="hidden" value={level++} />

        {
          data.list.map((ss, i) => (
<table width="100%" className="table-bordered table-condensed table-hover color-cate">
                        <tr className="tr-list">
                          <td className="col-md-4">
                            {
                              this.tree(ss, level)
                            }
                          </td>
                          <td className="col-md-3">
                       
                          <Quick
                              id={ss.id}
                              title={ss.path}
                              field="path"
                              coding="P0015"
                              changeData={this.props.changeData}
                              disabled={true}
                            />
                          </td>
                          <td className="col-md-1">
                          {ss.authority}
                            {
                            ss.component !== "" ?
                            <span style={{backgroundColor: "#52c41a", position: "relative", top: "-1px", display: "inline-block", width: "6px", height: "6px", verticalAlign: "middle", borderRadius: "50%"}}></span>
                            : 
                            <span style={{backgroundColor: "#d9d9d9", position: "relative", top: "-1px", display: "inline-block", width: "6px", height: "6px", verticalAlign: "middle", borderRadius: "50%"}}></span>
                            }
                          </td>
                          <td className="col-md-4">
                          <Space>
                            {/* <R_button.button click={this.handleClick} id={ss.id} title="按钮权限" dispatch="popup" component={Buttons} node="drawer" type="show" /> */}
                            
                            <R_drawer.DrawerRender title="按钮权限" name="按钮权限" data={{fid: ss.id, type: "1"}} coding="P0015" fetch={this.props.fetch} api="routerSelect" >
                              <Buttons />
                            </R_drawer.DrawerRender>                            
                            <R_drawer.drawerForm title="新增页面" name="新增页面" data={{fid: ss.id}} action="add" coding="P0015" renderList={this.getData} {...this.props} >
                              <Article />
                            </R_drawer.drawerForm>
                            <R_drawer.drawerForm title="页面编辑" name="编辑" id={ss.id} coding="P0015" renderList={this.getData} {...this.props} >
                              <Article />
                            </R_drawer.drawerForm>
                            <R_button.del click={this.handleClick} id={ss.id} title="删除伙伴" dispatch="popup" node="dialog" fn="getDelete" />
                          </Space>
                          </td>
                        </tr>
                        {
          ss.list ? 
          <tr className="tr-slide">
            <td colspan="8" className="p0">
            { 
                this.renderList(ss, level)
              }
            </td>
          </tr>
        : ""
        }
                  </table>
          ))
        }
      </>
    )
    
    render(){

      // const {columns} = this.state
      const {list, total, pages} = this.props
        return (
            <div>
                <ModalGroup {...this.props} coding="P0015" />

<Card>

<div style={{marginBottom: 15}}>
<Space>
  <Button type="primary">路由菜单</Button>
  <R_drawer.drawerForm title="新增路由" name="新增路由" coding="P0015" renderList={this.getData} {...this.props} >
    <Article />
  </R_drawer.drawerForm>
  {/* <R_button.button  click={this.handleClick} action="add" name="新增路由" title="新增路由" dispatch="popup" component={Article} node="drawer" type="form" /> */}
</Space>
</div>

<div id="content">
    <table width="100%" className="table-striped col-left-12">
      <tr className="th">
        <td className="col-md-4"><span className="icon-cate"></span>页面名称</td>
        <td className="col-md-3">路径</td>  
        <td className="col-md-1">组件</td>
        <td className="col-md-4">操作</td>
      </tr>
      {
        list && list.map((item, index) => (
        <>
        <tr className="tr-list">
          
          <td><i class="iconfont iconslide icon-anonymous-iconfont"></i>
            <Quick
              id={item.id}
              title={item.name}
              field="name"
              coding="P0015"
              width="80%"
              changeData={this.props.changeData}
              disabled={true}
            />
            </td>
          <td>
          <Quick
              id={item.id}
              title={item.path}
              field="path"
              coding="P0015"
              changeData={this.props.changeData}
              disabled={true}
            />
          </td>
          <td>
          {item.authority}
            {
              item.component !== "" ?
              <span style={{backgroundColor: "#52c41a", position: "relative", top: "-1px", display: "inline-block", width: "6px", height: "6px", verticalAlign: "middle", borderRadius: "50%"}}></span>
              : 
              <span style={{backgroundColor: "#d9d9d9", position: "relative", top: "-1px", display: "inline-block", width: "6px", height: "6px", verticalAlign: "middle", borderRadius: "50%"}}></span>
            }
          </td>
          <td>
          <Space>
              <R_button.button click={this.handleClick} id={item.id} title="按钮权限" dispatch="popup" component={Buttons} node="drawer" type="show" />
              <R_drawer.drawerForm title="新增页面" name="新增页面" coding="P0015" data={{fid: item.id}} action="add" renderList={this.getData} {...this.props} >
                <Article />
              </R_drawer.drawerForm>
              <R_drawer.drawerForm title="页面编辑" name="编辑" id={item.id} coding="P0015" renderList={this.getData} {...this.props} >
                <Article />
              </R_drawer.drawerForm>
              <R_button.del click={this.handleClick} id={item.id} title="删除伙伴" dispatch="popup" node="dialog" fn="getDelete" />
            </Space>
          </td>
        </tr>
        {
          item.list ? 
          <tr className="tr-slide">
            <td colspan="8" className="p0">
            {
                this.renderList(item, 0)
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





    </Card>

                <ButtonGroup {...this.props}></ButtonGroup>
                <input id="coding" type="hidden" value="P0015" />
            </div>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
    module: "menuRouter",
    state,
    common: state.common,
    global: state.common.global,
    list: state.menuRouter.list
  }
}

export default connect(stateToProops, dispatchToProps)(menuRouter)
