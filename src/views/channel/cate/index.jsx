import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch} from 'antd';
import { DeleteOutlined , UnorderedListOutlined, PlusOutlined} from '@ant-design/icons';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Status,
  R_checkbox,
  R_drawer,
  R_button,
  Dialog,
  Condition,
  Quick
} from '../../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../../common'
import dispatchToProps from '@/store/dispatch'
import coding from '@/static/constant/coding'
import Detail from './components/detail';

class Channel extends React.Component{

    getData = () => {
      const module = window.location.pathname.split("/")[2]
      this.props.select({
        api: "cateList",
        data: {
          coding: React.$coding[module].cate
        },
        node: "cateList"            
      })
    }

    componentDidMount(){
      this.getData()
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    } 

    render(){
        const path = this.props.location.pathname.split("/")[2]
        const { cate, article} = coding[path]

        const { cateList } = this.props.module
        return(
          <>
                <ModalGroup {...this.props} article="" coding={cate} />
          <Card
              title="分类管理"
              extra={
                <Space>
                  <R_drawer.drawerForm title="新增导航" coding={cate} renderList={this.getData} {...this.props} >
                    <Detail />
                  </R_drawer.drawerForm>
                {/* <CateForm size="defualt" butName="新增分类" title="新增分类" /> */}
                <Button>批量添加</Button>
                </Space>
              }
          >

                <table width="100%" className="table-striped table-condensed table-hover category  col-left-3">
        <tr class="th">
          <td className="col-md-1">选择</td>
          <td className="col-md-1">顺序</td>
          <td className="col-md-6">分类名称</td>  
          <td className="col-md-1">属性</td>  
          <td className="col-md-1">状态</td>
          <td className="col-md-2">操作</td>
        </tr>
         {
        cateList && cateList.map((item, index) => (  
          <>     
        <tr class="slide-nav tr-list">
          <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
          <td><Quick id={item.id} title={item.sort} field="sort" coding={cate} changeData={this.props.changeData}/></td>
          <td>
            <i class="iconfont icon-jianhao iconslide"></i>
            <Quick id={item.id} title={item.name} field="name" coding={cate} width="50%" changeData={this.props.changeData}/>
          </td>
          <td></td>
          <td><Status coding={cate}  field="status" {...item} updateStatus={this.props.updateStatus} /></td>
          <td>
            <Space>
              <R_drawer.drawerForm title="编辑分类" id={item.id} renderList={this.getData} coding={cate} {...this.props} >
                <Detail />
              </R_drawer.drawerForm>
              <R_button.del delete={this.handleClick} id={item.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
            </Space>
          </td>
        </tr>
        <tr className="slide-nav-list">
          <td colspan="8" className="p0">
          {
        item.list && item.list.map((sss, i) => (  
            <table width="100%" className="table-bordered table-condensed table-hover category color-cate">
                  <tr class="tr-list">
                    <td className="col-md-1"><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={sss.id}></R_checkbox></td>
                    <td className="col-md-1"><Quick id={sss.id} title={sss.sort} field="sort" coding={cate} changeData={this.props.changeData}/></td>
                    <td className="col-md-6">
                    <i class="cate-two"></i>
                      <i class="iconfont icon-jianhao iconslide"></i>
                      <Quick id={sss.id} title={sss.name} width="42%" field="name" coding={cate} changeData={this.props.changeData}/>
                    </td>
                    <td class="col-md-1"></td>
                    <td class="col-md-1"><Status coding={cate}  field="status" {...sss} updateStatus={this.props.updateStatus} /></td>
                    <td class="col-md-2">
                      <Space>
                        <R_drawer.drawerForm title="编辑分类" id={sss.id} renderList={this.getData} coding={cate} {...this.props} >
                          <Detail />
                        </R_drawer.drawerForm>
                        <R_button.del delete={this.handleClick} id={sss.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                      </Space>
                    </td>
                  </tr>
                    <tr className="slide-nav-list">
                      <td colspan="8" className="p0">
                      {
        sss.list && sss.list.map((ddd, i) => (  
                        <table width="100%" className="table-bordered table-condensed table-hover category  color-cate">
                              <tr className="tr-list">
                                <td className="col-md-1"><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={ddd.id}></R_checkbox></td>
                                <td className="col-md-1"><Quick id={ddd.id} title={ddd.sort} field="sort" coding={cate} changeData={this.props.changeData}/></td>
                                <td className="col-md-6">
                                  <i class="cate-tree"></i>
                                  <i class="cate-two"></i>
                                  <Quick id={ddd.id} title={ddd.name} width="50%" field="name" coding={cate} changeData={this.props.changeData}/>
                                </td>
                                <td className="col-md-1"></td>
                                <td className="col-md-1"><Status coding={cate} field="status" {...ddd} updateStatus={this.props.updateStatus} /></td>
                                <td className="col-md-2">
                                  <Space>
                                    <R_drawer.drawerForm title="编辑分类" id={ddd.id} renderList={this.getData} coding={cate} {...this.props} >
                                      <Detail />
                                    </R_drawer.drawerForm>
                                    <R_button.del delete={this.handleClick} id={ddd.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                                  </Space>
                                </td>
                              </tr>
                        </table>
        ))
      }
                      </td>
                    </tr>
            </table>
        ))
      }
          </td>
        </tr>
        </>
        ))
      }
    </table>


                <ButtonGroup {...this.props} button={['all', 'delete', 'open', 'close']} ></ButtonGroup>
                <input id="coding" type="hidden" value={cate} />
            </Card>
            </>
        )
    }
}

const stateToProops = (state) => {
  return {
    state,
    common: state.common,
    global: state.common.global,
    module: state.channel
  }
}

export default withRouter(connect(stateToProops, dispatchToProps)(Channel))
