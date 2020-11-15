import React, { useState, useEffect } from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Select } from 'antd'
import { Status, TitleAttribute, R_drawer, R_checkbox, Dialog, R_form, Quick, Editor, Keyword} from '@/components/index.js'

  import {
    ButtonGroup,
    CheckboxGroup
  } from '@/common'
  const { Option } = Select


const Form1 = (props) =>{
    // const [content, setContent] = useState("12")
    
    // useEffect(() => {
    //     debugger
    //     setContent(props.data.content)
    // }, [])

    return(
        <>
            <Form.Item label="文章标题" name="title" >
                <Input placeholder="请输入文章标题" className="input-sm input-350" style={{float: "left"}} />
                {/* <TitleAttribute /> */}
            </Form.Item>   
            <Form.Item label="tag标签" >
                <Keyword field="tag" value={props.data.tag} change={props.setData} fetch={props.fetch} />
            </Form.Item>          
            <Form.Item label="所属分类" name="seotitle" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="是否启用" name="checked" >
                <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="作者" name="writer" >
                <Input placeholder="请输入作者" className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="文章来源" >
                <Input.Group compact>
                <Form.Item name="source" >
                    <Input placeholder="文章来源" className="input-sm input-150" />
                </Form.Item>
                <Form.Item name="source_url" >
                    <Input placeholder="文章地址" className="input-sm input-350" />
                </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item label="下载地址">
                <Input placeholder="下载链接地址" className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="演示地址" name="jump_link" >
                <Input.TextArea placeholder="演示链接地址" className="input-sm" style={{width: "500px", height: "80px"}} />
            </Form.Item>
            <Form.Item label="正文">
                <Editor field="content" value={props.data.content} change={props.setData} />
            </Form.Item>
            <Form.Item label="摘要" name="summary" >
                <Input.TextArea className="input-sm" placeholder="请输入内容摘要" />
            </Form.Item>
            <Form.Item label="聚合标签" name="flag" >
                {/* <CheckboxGroup tagList={flags} /> */}
            </Form.Item>
        </>
        
    )

}

export default Form1
