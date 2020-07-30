import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Table, Space, Checkbox, Button, Popover, Row, Col, Pagination} from 'antd';
import { connect } from 'react-redux'
import { Status, Dialog, ButtonGroup, Operatinavbar, Condition, R_button, R_checkbox } from '../../components/index.js'
import dispatchToProps from '../../store/actions'
import coding from '../../static/constant/coding'
import api from '../../api'
import Item from 'antd/lib/list/Item';

class List extends React.Component{

    state ={
        columns: [
            {
              title: '选择',
              dataIndex: 'name',
              render: (text, record) => (
                <R_checkbox onChange={this.props.checkBox} list={this.props.common.global.checkedList} data={record.id}></R_checkbox>
              ),
            },
            {
              title: '编号',
              dataIndex: 'id',
            },
            {
              title: '名称',
              dataIndex: 'title',
            },
            {
                title: '分类',
                dataIndex: 'parent',
                render: text => <Dialog butName="网页" type="text" title="选择分类"></Dialog>,
            },
            {
                title: '下载',
                dataIndex: 'dowmload'
            },
            {
                title: '发布时间',
                dataIndex: 'datetime',
                render: text => <a>{text}</a>,
            },
            {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                    <Status type="switch" coding="K0000" field="checked" {...record} updateStatus={this.props.updateStatus} />
                )
            },
            {
            title: '操作',
            dataIndex: 'operating',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" size="small" onClick={() => `/sucai/article/edit/${record.id}`}>编辑</Button>
                    <Button size="small">删除</Button>
                    <Popover placement="left" content={
                        <div>
                            <p>编号：{record.id}</p>
                            <p>标签: {record.label}</p>
                            <p>作者: {record.id}</p>
                            <p>来源: {record.source}</p>
                            <p>更新时间: {record.datetime}</p>
                        </div>
                    }>
                    <Button type="link" size="small">更多</Button>
                    </Popover>
                    <a></a>
                </Space>
                ),
            },
        ],
        data: [],
        total: 0,
        pages: 0,
        list: [],
        allChecked: true
    };

    componentDidMount(){
        this.props.inputChange()
    }

    checkedAll = () =>{

        const data = []
        this.props.list.list.forEach( Item=>{
            data.push({
                id: Item.id
            })
        })
        this.props.checkBox({
            checked: this.state.allChecked,
            value: data            
        })

        this.setState({
            allChecked: !this.state.allChecked
        })
        
    }

    render(){

        const path = this.props.match.path.split("/")[2]

        const { cate, art} = coding[path]

        const {columns} = this.state
        const { common } = this.props
        const { global } = common
        const {list, total, pages} = this.props.list

        return(
<Card
          tabList={[
            {
              key: 'tab1',
              tab: '文档列表',
            },
            {
              key: 'tab2',
              tab: '正在审核',
            },
            {
                key: 'tab3',
                tab: '已退回',
              },
              {
                key: 'tab4',
                tab: '发布文档',
              },
          ]}
          tabBarExtraContent={ <Condition /> }
      >
                <Table
                    bordered
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                />

                <Row style={{marginTop: 15}}>
                    <Col span={12}>
                    <Space>
                        <Button type="default" onClick={this.checkedAll}>全选</Button>
                        <Dialog 
                            checked={global.checked} 
                            messageTitle="请选择要操作的记录" 
                            butName="删除" 
                            dataSource={this.props.common.global.checkedList}
                            handleOk={() => {
                                this.props.removeAndRestore({
                                    operating: 'remove',
                                    list: this.props.common.global.checkedList
                                })
                            }}
                        >
                            <div>是否确定删除已选的数据！</div>
                        </Dialog>
                        <Dialog 
                            checked={global.checked} 
                            messageTitle="请选择要操作的记录" 
                            butName="开启" 
                            dataSource={this.props.common.global.checkedList}
                            handleOk={() => {
                                this.props.openAndClose({
                                    operating: 'open',
                                    list: this.props.common.global.checkedList
                                })
                            }}
                        >
                            <div>是否确定开启已选的数据</div>
                        </Dialog>
                        <Dialog 
                            checked={global.checked} 
                            messageTitle="请选择要操作的记录" 
                            butName="关闭" 
                            dataSource={this.props.common.global.checkedList}
                            handleOk={() => {
                                this.props.openAndClose({
                                    operating: 'close',
                                    list: this.props.common.global.checkedList
                                })
                            }}
                        >
                            <div>是否确定开启已选的数据</div>
                        </Dialog>
                        <Dialog 
                            checked={global.checked} 
                            messageTitle="请选择要操作的记录" 
                            butName="移动" 
                            dataSource={this.props.common.global.checkedList}
                            handleOk={() => {
                                this.props.openAndClose({
                                    operating: 'close',
                                    list: this.props.common.global.checkedList
                                })
                            }}
                        >
                            <div>是否确定开启已选的数据</div>
                        </Dialog>
                        <Button type="default">属性设置</Button>
                    </Space>
                    </Col>  
                    <Col span={12} style={{textAlign: 'end'}}><Pagination defaultPageSize={10} total={total} onChange={this.props.inputChange} /></Col>  
                </Row>
                <input id="coding" type="hidden" value={art} />
            </Card>
        )
    }
}

const stateToProops = (state) => {
    return {
        common: state.common,
        inputValue: state.inputValue,
        list: state.link.list
    }
  }

export default connect(stateToProops, dispatchToProps)(List)
