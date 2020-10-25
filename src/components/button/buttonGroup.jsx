import React from 'react'
import { Space, Button } from 'antd'

import button from './button'

const ButtonGroup = (props) => {

    const handleClick = (data) => {
        props[data.popup || data.global.data.fn](data)
      }     
      


    const checkedAll = () =>{
        // const data = []
        // this.props.list.forEach( Item=>{
        //     data.push({
        //         id: Item.id
        //     })
        // })
  
        // this.props.checkBox({
        //     checked: this.state.allChecked,
        //     type: "all",
        //     value: data            
        // })
  
        // this.setState({
        //     allChecked: !this.state.allChecked
        // })
        
    }


    return (
        <Space>
        <button button={checkedAll} name="全选" title="全选" size="default" />
        {/* <R_button.button button={handleClick} name="新增友链" title="删除" size="default" popup="getDialog" fn="getDelete" />
        <R_button.button button={handleClick} name="开启" title="开启" size="default" operating="open" popup="getDialog" fn="openAndClose"  />
        <R_button.button button={handleClick} name="关闭" title="关闭" size="default" operating="close" popup="getDialog" fn="openAndClose"  /> */}
        </Space>
    )
}

export default ButtonGroup
