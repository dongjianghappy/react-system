import React from 'react'
import { Card, Table, Space, Button} from 'antd';
import { connect } from 'react-redux'
import {
  Status,
  Confirm,
  R_checkbox,
  Dialog,
  Condition,
  R_drawer,
  Quick
} from '@/components/index.js'
import {
  Navbar,
  ButtonGroup,
  Option,
  OptionSelect,
  ModalGroup,
  Operatinavbar
} from '@/common'
import Article from './article'
import dispatchToProps from '@/store/dispatch'

class Announcement extends React.Component{
  
  state = {
    data: {
      content: ""
    }
  }

  getData = () => {
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "Q0011"
      },
      node: "announcement"            
  })
  }

    componentDidMount(){
      this.getData()
    }


    handleClick = (data) => {
      this.props[data.dispatch](data)
    }     
    
    // 初始化数据
    renderInit = (data) => {
      this.setState({
        data: data
      })
    }
    
    // 更新数据
    setData = (type, value) => {
      const data = {...this.state.data}
      data[type] = value
      this.setState({
        data: data
      })
    }

    render(){
      const { announcement } = this.props.module
      
        return (
            <div>
                <ModalGroup {...this.props} article={Article} coding="Q0011" />
            
                <Card
                  title="公告通知"
                  extra={
                    <R_drawer.drawerForm title="发布公告通知" name="发布公告通知" coding="Q0011" renderList={this.getData} {...this.props} >
                      <Article />
                    </R_drawer.drawerForm>
                  }
                >
                <table width="100%" className="table-striped table-hover col-left-3">
                  <tr className="th">
                    <td className="col-md-1">选择</td>
                    <td className="col-md-1">顺序</td>
                    <td className="col-md-7">伙伴名称</td>
                    <td className="col-md-1">状态</td>
                    <td className="col-md-2">操作</td>
                  </tr>
                  {
                  announcement && announcement.map((item, index) => (
                  <tr class="tr-list">
                    <td><R_checkbox onChange={this.props.checkBox} list={this.props.module.checkedList} data={item.id}></R_checkbox></td>
                    <td>
                      <Quick id={item.id} title={item.sort} field="sort" coding="Q0011" changeData={this.props.changeData}/>
                    </td>
                    <td>
                    <Quick id={item.id} title={item.title} field="title" width="50%" coding="Q0011" changeData={this.props.changeData}/>
                    </td>
                    <td><Status type="switch" coding="Q0011" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
                    <td>
                      <Space>
                      <R_drawer.drawerForm 
                        isText={true} 
                        title="编辑公告通知"
                         name="编辑" 
                         renderInit={this.renderInit}
                         data={this.state.data}
                         id={item.id} 
                         coding="Q0011" 
                         renderList={this.getData} 
                         {...this.props} 
                        >
                        <Article data={this.state.data} change={this.setData} />
                      </R_drawer.drawerForm>
                      <Confirm 
                        name="删除" 
                        type="text" 
                        config={React.$modalEnum.delete} 
                        coding="Q0011" 
                        data={{id: item.id}} 
                        fetch={this.props.fetch} 
                        api="delete" 
                        renderList={this.getData}
                      />
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
                  coding="Q0011"
                  {...this.props}
                />
                <input id="coding" type="hidden" value="Q0011" />
                </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
    global: state.common.global,
    module: state.service
  }
}

export default connect(stateToProops, dispatchToProps)(Announcement)
