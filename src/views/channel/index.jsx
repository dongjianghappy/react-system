import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog } from '../../components/index.js'
import AddArticle from './addArticle'
import dispatchToProps from '../../store/actions'
import api from '../../api';

class Channel extends React.Component{

    constructor(props){
      super(props)
    }

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
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
                  <Status {...record} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <Button type="default" size="small">添加</Button>
                      <Button type="primary" size="small" onClick={()=>this.props.history.push(`/admin/sucai/list/${record.id}`)}>列表</Button>
                      <Button type="primary" size="small" onClick={()=>this.props.history.push(`/admin/sucai/article/edit/${record.id}`)}>编辑</Button>
                      <Popconfirm 
                      title="确定删除此项" 
                      onCancel={()=>console.log("sss")} 
                      onConfirm={()=>{
                        debugger
                        api.delete({
                          coding: 'K0002',
                          id: record.id
                        }).then(res => {
                          // 删除完成后再进行刷新页面
                          this.itemRender()
                        })
                      }} >
                        <Button type="default" size="small">删除</Button>
                      </Popconfirm>
                    </Space>
                  ),
              },
        ]
    }

    componentDidMount(){
       this.props.inputChange()
    }

    render(){
        const {columns} = this.state
        const {list, total, pages} = this.props.list
        return(
            <Card title="资源分类"  extra={
              <div>
                <Dialog butName="新增分类" title="新增分类">
                  <AddArticle />
                </Dialog>
                <Button type="default" onClick={()=>this.props.history.push('/admin/sucai/article/edit')}>新增分类</Button>
                <Button type="default" onClick={()=>this.props.history.push('/admin/sucai/article/edit')}>批量添加</Button>
              </div>
            }>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={{total, defaultPageSize: 10, onChange: this.props.inputChange}}
                />
            </Card>
        )
    }
}

const stateToProops = (state) => {
  console.log(state);
  return {
      inputValue: state.inputValue,
      list: state.channel.list
  }
}

export default connect(stateToProops, dispatchToProps)(Channel)
