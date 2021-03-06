import React from 'react'
import { Card, Table, Space, Popconfirm, Button, Checkbox, Switch} from 'antd';
import { Status, Dialog } from '../../components/index.js'
import AddArticle from './article'
import { getListAction } from '../../store/action'
import store from '../../store';
import api from '../../api';

export default class Links extends React.Component{
    
    constructor(props){
        super(props)
        // 监听(订阅)参数是一个方法，在方法中需要从小设置值即可
        store.subscribe(this.change)
      }
  
      change = () => {
        const {link} = store.getState()
        this.setState({
          data: link.list.list,
          total: link.list.total,
          pages: link.list.pages
        })
      }

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: text => <a><Checkbox></Checkbox></a>,
            },
            {
              title: '网站名称',
              dataIndex: 'name',
            },
            {
              title: '链接地址',
              dataIndex: 'url',
            },
            {
                title: '来源',
                dataIndex: 'source',
                render: text => <a>{text}</a>,
              },
            {
                title: '类型',
                dataIndex: 'type',
                render: text => <a>{text}</a>,
              },   
              
            {
                title: '价格(元/月)',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
              },
            {
                title: '结束日期',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
              },                

              
              {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status {...record} />
                  // <Switch 
                  //   checkedChildren="开启" 
                  //   unCheckedChildren="关闭"
                  //   defaultChecked={record.status === '1' ? true : false}
                  //   onChange={() => {
                  //     api.updateStatus({
                  //       coding: 'K0002',
                  //       id: record.id,
                  //       status: 'status'
                  //     })
                  //   }} />
                )
              },
              {
                title: '操作',
                dataIndex: 'operating',
                render: (text, record) => (
                    <Space size="middle">
                      <Dialog butName="编辑" title="更改友链">
                        <AddArticle />
                      </Dialog>
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
                      <Button type="default" size="small">生成订单</Button>
                    </Space>
                  ),
              },
        ],
        data: [],
        total: 0,
        pages: 0
    }

    componentDidMount(){
        const action = getListAction({
          coding: 'P0003',
          page: 0,
          pagesize: 10
        })
        store.dispatch(action)
      }

    render(){

        const {columns, data} = this.state

        return (
            <div>
                <Card title="友情链接" extra={
              <div>
                <Dialog butName="添加站点" title="添加站点">
                  <AddArticle />
                </Dialog>
              </div>
            }>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={data}
                />
                </Card>
            </div>
        )
    }
}