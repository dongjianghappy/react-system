import React from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio } from 'antd'

const Form1 = (props) =>{

    return(
        <>                   
            <Form.Item label="投放用户" name="business" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="QQ" name="qq" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="E-mail" name="email" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="联系电话" name="tel" >
                <Input className="input-sm input-350" />
            </Form.Item>            
            <Form.Item label="其他" name="description" >
                <Input.TextArea />
            </Form.Item> 
        </>
        
    )

}

export default Form1
