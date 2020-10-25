import React, { useState, useEffect } from 'react'
import { Row, Col, Select } from 'antd'

import R_button from '../components/button'
const { Option } = Select;
const ButtonGroup = (props) => {
    const [init, setInit] = useState({status: true})
    const [current, setCurrent] = useState({})
    const [condition, setCondition] = useState({})

    useEffect(() => {
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

        props.getConditionAction(condition)
    }

    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }


    return (
        <div className="condition">
            <Row>
                {
                    props.option.map((item, index) => (
                    <Col span="4" className="col">
                        {item.name}: <Select defaultValue="a1" style={{ width: 100 }}>
                            {children}
                        </Select>
                    </Col>
                    ))
                }
            </Row>
            </div>
    )
}

export default ButtonGroup
