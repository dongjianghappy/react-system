import React from 'react'
import { Space, Button } from 'antd'
import R_button from '../components/button'

const ButtonGroup = (props) => {

    const handleClick = (data) => {
        props[data.dispatch](data)
    }     
      
    const checkedAll = () =>{
        debugger
        const data = []
        props.module.list.forEach( Item=>{
            data.push({
                id: Item.id
            })
        })
  
        props.checkBox({
            node: props.node,
            type: "all",
            value: data            
        })
    }

    const submit = () => {
        alert("ssss")
    }
    return (
        
        <Space style={{marginTop: 25}}>
            {
                props.button && props.button.map((item, index) => {
                    if(item === 'all'){
                         return <R_button.button click={checkedAll} name="全选" title="全选" size="default" />
                    }else if(item === 'delete'){
                        return <R_button.button click={handleClick} name="新增友链" title="删除" size="default" dispatch="popup" node="dialog" fn="getDelete" />
                    }else if(item === 'open'){
                        return <R_button.button click={handleClick} name="开启" title="开启" size="default" operating="open" dispatch="popup" node="dialog" fn="openAndClose"  />
                    }else if(item === 'close'){
                        return <R_button.button click={handleClick} name="关闭" title="关闭" size="default" operating="close" dispatch="popup" node="dialog" fn="openAndClose"  />
                    }else if(item === 'update'){
                        return <Button onClick={submit}>更新</Button>
                    }else if(item === 'move'){
                        return <R_button.button click={handleClick} name="移动" title="移动" size="default" dispatch="popup" node="dialog" fn="getDelete" />
                    }else if(item === 'flag'){
                        return <R_button.button click={handleClick} name="属性设置" title="属性设置" content={props.flags} size="default" dispatch="popup" node="dialog" fn="getDelete" />
                    }
                })
            }
            
            
            
            
            
            
            
        </Space>
    )
}

export default ButtonGroup
