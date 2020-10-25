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
} from '../../../../components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup
} from '../../../../common'
import dispatchToProps from '@/store/dispatch'
import coding from '@/static/constant/coding'
import CateForm from '../../components/cateForm.jsx';

class Channel extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: (text, record) => (
                <R_checkbox onChange={this.props.checkBox} list={this.props.state.channel.checkedList} data={record.id}></R_checkbox>
              ),
            },
            {
              title: '顺序',
              dataIndex: 'sort',
            },
            {
              title: '分类名称',
              dataIndex: 'name',
            },{
                title: '属性',
                dataIndex: 'flag',
                render: text => <a>{text}</a>,
              },
              {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status coding="K0002" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    // <Space size="middle">
                    //   <Button type="default" size="small"><PlusOutlined />添加</Button>
                    //   <Button type="primary" size="small" onClick={()=>this.props.history.push(`/admin/source/list/${record.id}`)}>
                    //     <UnorderedListOutlined />
                    //     列表
                    //   </Button>

                    //   <CateForm type="edit" butName="编辑" title="编辑分类" />
                    //   <Delete delete={this.handleClick} id={record.id} title="删除友链" popup="getDialog" fn="getDelete" />
                    // </Space>
                    <Space>
                      <R_button.edit edit={this.handleClick} id={record.id} action="edit" title="编辑友链" popup="getDrawer" />
                      <R_button.del delete={this.handleClick} id={record.id} title="删除友链" dispatch="popup" node="dialog" fn="getDelete" />
                    </Space>
                  ),
              },
        ]
    }

    componentDidMount(){
      this.props.select({
        api: "cateList",
        data: {
          coding: "K0002"
        },
        node: "cateList"            
    })
    }

    handleClick = (data) => {
      this.props[data.dispatch](data)
    } 

    render(){
        const path = this.props.location.pathname.split("/")[2]
        const { cate, article} = coding[path]

        const {columns} = this.state
        debugger
        const { cateList } = this.props.module
        return(
          <>
                <ModalGroup {...this.props} article="" coding={cate} />
          <Card
              title="分类管理"
              extra={
                <Space>
                <CateForm size="defualt" butName="新增分类" title="新增分类" />
                <Button>批量添加</Button>
                </Space>
              }
          >
                <Card>

                  


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
              <R_button.edit edit={this.handleClick} id={item.id} action="edit" title="编辑友链" popup="getDrawer" />
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
                        <R_button.edit edit={this.handleClick} id={sss.id} action="edit" title="编辑友链" popup="getDrawer" />
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
                                    <R_button.edit edit={this.handleClick} id={ddd.id} action="edit" title="编辑友链" popup="getDrawer" />
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






                </Card>
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
