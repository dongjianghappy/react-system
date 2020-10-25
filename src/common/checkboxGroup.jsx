import React from 'react'
import { Checkbox, Form, Row, Col } from 'antd'

import R_button from '../components/button'

const Navbar = (props) => {
    
    return (
        <>
            <Row>
            {
                props.tagList.map((item, index) => (
                    <Col span="2">
                    <Form.Item name={item.name} valuePropName="checked" >
                        <Checkbox value={item.value}>{item.remark}</Checkbox>
                    </Form.Item>
                    </Col>
                ))
            }
            </Row>
        </>
    )
}

export default Navbar
