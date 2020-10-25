import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'

import R_button from '../components/button'

const ButtonGroup = (props) => {
    const [init, setInit] = useState({status: true})
    const [current, setCurrent] = useState({})
    const [condition, setCondition] = useState({})

    useEffect(() => {
        debugger
        if(init.status){
            const cutt = {}
            const pass = {}
            props.option.map((item, index) => {
                cutt['row'+index] = 0
                pass[item.field] = ""
                
            })
            setCurrent(cutt)
            setCondition(pass)
            init.status = false
            setInit({...init})
        }
    }, [])

    const handleCondition = (e) => {
        // react纯函数组件useState更新页面不刷新
        // 当修改原数组时，如果原数组是个深层数组（不只一层），使用setTextList修改时，不会触发页面刷新
        // 这里我的解决方案是，先将原数组深拷贝，赋值给新数组，再修改新数组，将修改后的新数组传递进去，这样就会引起视图更新。
        current[e.target.getAttribute("row")] = e.target.getAttribute("index")
        setCurrent({...current})

        condition[e.target.getAttribute("field")] = e.target.getAttribute("value")
        setCondition({...condition})

        props.select({
            data: {
                coding: props.coding,
                page: 0,
                pagesize: 10,
              ...condition
            },
            node: props.node           
        })
    }

    return (
        <div className="condition">
            <Row>
                {
                    props.option.map((item, index) => (
                    <Col span="24" className="col" key={index}>
                    <span>{item.name}</span>
                    {   
                        item.list.map((items, i) => (
                        <a key={i} className={`${parseInt(current['row'+index]) === i ? "option-current" : ""}`} row={`row${index}`} index={i} field={item.field} value={items.tag ? items.tag : items.value}  onClick={(e) => handleCondition(e)}>{items.remark ? items.remark : items.name}</a>
                        ))
                    } 
                    </Col>
                    ))
                }
            </Row>
            </div>
    )
}

export default ButtonGroup
