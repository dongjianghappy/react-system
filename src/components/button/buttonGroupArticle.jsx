import React from 'react'
import { Space, Button } from 'antd'
import { Dialog} from '../index.js'

const ButtonGroup = (props) => {

    const   checkedAll = () =>{

        const data = []
        props.common.list.list.forEach( Item=>{
            data.push({
                id: Item.id
            })
        })

        props.checkBox({
            checked: this.state.allChecked,
            type: "all",
            value: data            
        })

        this.setState({
            allChecked: !this.state.allChecked
        })
        
    }

    return (
        <Space>
        <Button type="default" onClick={checkedAll}>全选</Button>
        <Dialog 
            checked={props.global.checked} 
            messageTitle="请选择要操作的记录" 
            butName="删除" 
            dataSource={props.common.global.checkedList}
            handleOk={() => {
                props.removeAndRestore({
                    operating: 'remove',
                    list: props.common.global.checkedList
                })
            }}
        >
            <div>是否确定删除已选的数据！</div>
        </Dialog>
        <Dialog 
            checked={global.checked} 
            messageTitle="请选择要操作的记录" 
            butName="开启" 
            dataSource={props.common.global.checkedList}
            handleOk={() => {
                props.openAndClose({
                    operating: 'open',
                    list: props.common.global.checkedList
                })
            }}
        >
            <div>是否确定开启已选的数据</div>
        </Dialog>
        <Dialog 
            checked={global.checked} 
            messageTitle="请选择要操作的记录" 
            butName="关闭" 
            dataSource={props.common.global.checkedList}
            handleOk={() => {
                props.openAndClose({
                    operating: 'close',
                    list: props.common.global.checkedList
                })
            }}
        >
            <div>是否确定开启已选的数据</div>
        </Dialog>
        <Dialog 
            checked={global.checked} 
            messageTitle="请选择要操作的记录" 
            butName="移动" 
            dataSource={props.common.global.checkedList}
            handleOk={() => {
                props.openAndClose({
                    operating: 'close',
                    list: props.common.global.checkedList
                })
            }}
        >
            <div>是否确定开启已选的数据</div>
        </Dialog>
        <Button type="default">属性设置</Button>
    </Space>
    )
}

export default ButtonGroup
