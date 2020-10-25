import React from 'react'
import { Space, Button } from 'antd'
import {
    R_drawer,
    Dialog
  } from '../components'

const modalGroup = (props) => {
    debugger
    const handleOk = (data) => {
        props[data.global.data.fn](data)
    }  

    return (
        <>
            {/* 抽屉弹窗 */}
            {
            props.global.drawer.status ?
                props.global.drawer.type === "form" ?
                <R_drawer.form
                    {...props}
                >
                    {   
                        props.global.drawer.component ?
                        <props.global.drawer.component {...props} />
                        : ""
                    }
                </R_drawer.form>
                :
                <R_drawer.show
                    {...props}
                >
                    {   
                        props.global.drawer.component ?
                        <props.global.drawer.component {...props} />
                        : ""
                    }
                </R_drawer.show>
            : ""
            }

            {/* 弹出层 */}
            {
            props.global.dialog.status ?
            <Dialog
                {...props} 
                messageTitle="请选择要操作的记录" 
                butName="关闭" 
                handleOk={handleOk}
            >
                <div>
                    {   
                        props.global.dialog.component ?
                        <props.global.dialog.component />
                        : ""
                    }
                </div>
            </Dialog>
            : ""
            }
        </>
    )
}

export default modalGroup
