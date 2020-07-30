import React from 'react'
import { Space, Button, Popconfirm} from 'antd'
import { Dialog } from '../'

const OperatingGroup = (props) => {

    return (
        <Space>
        <Dialog butName="编辑" title="更改友链">
          
        </Dialog>
        <Popconfirm 
        title="确定删除此项" 
        onCancel={()=>console.log("sss")} 
        onConfirm={()=>{
          
        }} >
          <Button type="default" size="small">删除</Button>
        </Popconfirm>
        <Button type="default" size="small">生成订单</Button>
      </Space>
    )
}

export default OperatingGroup
