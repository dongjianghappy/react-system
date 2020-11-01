import React from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio } from 'antd'

const Form1 = (props) =>{

    return(
        <>                   
            <Form.Item label="SEO标题" name="seotitle" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="关键词" name="keyword" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="描述" name="description" >
                <Input.TextArea />
            </Form.Item> 
        </>
        
    )

}

export default Form1
