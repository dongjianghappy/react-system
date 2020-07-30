import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch} from 'antd';
import { DeleteOutlined , UnorderedListOutlined, PlusOutlined} from '@ant-design/icons';
import { connect } from 'react-redux'
import { Status, Dialog, Operatinavbar, Condition } from '../../components/index.js'
import AddArticle from './addArticle'
import dispatchToProps from '../../store/actions'
import coding from '../../static/constant/coding'
import api from '../../api';
import CateForm from './components/cateForm.jsx';

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
                  <Status coding="K0002" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <Button type="default" size="small"><PlusOutlined />添加</Button>
                      <Button type="primary" size="small" onClick={()=>this.props.history.push(`/admin/source/list/${record.id}`)}>
                        <UnorderedListOutlined />
                        列表
                      </Button>

                      <CateForm type="edit" butName="编辑" title="编辑分类" />
                      <Popconfirm 
                      title="确定删除此项" 
                      onCancel={()=>console.log("sss")} 
                      onConfirm={()=>{
                        api.delete({
                          coding: 'K0002',
                          id: record.id
                        }).then(res => {
                          // 删除完成后再进行刷新页面
                          this.itemRender()
                        })
                      }} >
                        <Button type="ghost" size="small"><DeleteOutlined />删除</Button>
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

        const path = this.props.match.path.split("/")[2]
        const { cate, article} = coding[path]

        const {columns} = this.state
        const {list, total, pages} = this.props.list
        return(

          
          <Card
              title="分类管理"
              extra={
                <Space>
                <CateForm butName="新增分类" title="新增分类" />
                <Button size="small">批量添加</Button>
                </Space>
              }
          >
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                />
                <Operatinavbar total={total} />
                <input id="coding" type="hidden" value={cate} />
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
