import React from 'react';
import { Card, Table, Checkbox } from 'antd'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, ButtonGroup, OperatingGroup, Operatinavbar, Condition, Quick } from '../../components/index.js'
import reducer from '../../reducers/counter'
import dispatchToProps from '../../store/dispatch'

// 创建仓库
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

class Index extends React.Component{
     
    state ={
        columns: [
            {
                title: '选择',
                dataIndex: '',
                render: text => <a><Checkbox></Checkbox></a>,
              },
            {
              title: '频道',
              dataIndex: 'name',
            },
            {
              title: '频道首页',
              dataIndex: 'navname',
            },
            {
                title: '频道链接',
                dataIndex: 'url',
                render: text => <a>{text}</a>,
              },
            {
                title: '导航管理',
                dataIndex: 'price',
                render: (text, record) =>(
                    <div>
                        <Link to={`/admin/navigation/main/${record.id}`}>导航列表</Link>
                    </div>
                ),
              },
              {
                title: '单页管理',
                dataIndex: 'price',
                render: (text, record) =>(
                    <div>
                        <Link to={`/admin/navigation/single/${record.id}`}>单页列表</Link>
                    </div>
                ),
              },
              {
                title: '状态',
                dataIndex: 'status',
                render:(text, record) => (
                  <Status type="switch" coding="P0003" field="status" {...record} updateStatus={this.props.updateStatus} />
                )
              },
        ],
        data: [{
                name: "素材",
                url: "素材",
                source: "素材",
                type: "素材",
                price: "素材",
                id: 1
            },
            {
                name: "素材",
                url: "素材",
                source: "素材",
                type: "素材",
                price: "素材",
                id: 2
            },
            {
                name: "素材",
                url: "素材",
                source: "素材",
                type: "素材",
                price: "素材",
                id: 3
            }
        ],
        total: 0,
        pages: 0
    }
    

    componentDidMount(){
        this.props.select({
            api: "navList",
            node: "channel"            
        })
    }


    render(){

        const { columns, data } = this.state
        const { channel } = this.props.module

        return(

            <div>
                <Card title="频道导航">

                    <table width="100%" className="table-striped col-left-34">
                        <tr className="th">
                        <td className="col-md-2">频道</td>
                        <td className="col-md-2">频道首页</td>
                        <td className="col-md-2">频道链接</td>
                        <td className="col-md-2">导航管理</td>
                        <td className="col-md-2">单页管理</td>
                        <td className="col-md-1">状态</td>
                        </tr>
                        {
                            channel && channel.map((item, index) => (
                                <tr className="tr-list">
                                    <td>{item.name}</td>
                                    <td><Quick id={item.id} title={item.navname} field="navname" coding="P0001" changeData={this.props.changeData}/></td>
                                    <td><Quick id={item.id} title={item.url} field="url" coding="P0001" changeData={this.props.changeData}/></td>
                                    <td><Link to={{pathname:'/admin/navigation/main', state:{id: item.id}}}>导航列表</Link></td>
                                    <td><Link to={{pathname:'/admin/navigation/single', state:{id: item.id}}}>单页列表</Link></td>
                                    <td><Status type="switch" coding="P0003" field="status" {...item} updateStatus={this.props.updateStatus} /></td>
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
        module: state.navigation
    }
  }
  
  export default connect(stateToProops, dispatchToProps)(Index)