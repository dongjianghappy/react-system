import React, {useState, useEffect} from 'react'
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Tabs } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, Editor} from '@/components/index.js'
import {
    ButtonGroup,
    Keyword
  } from '@/common'

const BasicField = (props) => {

    const [content, setContent] = useState()
    const [keyword, setKeyword] = useState()

    useEffect(() => {
        if(isEdit){
            setFiled()
        }
    })

    state = {
        content: "",
        keyword: ""
      }
       
      const changeInput = (data) => {
        setKeyword({
          keyword: data.join()
        })
      }
  
      getContent = (data) => {
        this.setContent({
          content: data
        })
      } 

    return (
        <>
            <Form.Item label="文章标题" name="title" >
                <Input className="input-sm input-250" />
            </Form.Item>                    
            <Form.Item label="页面标题" name="seotitle" >
                <Input className="input-sm input-350" />
            </Form.Item>
            <Form.Item label="关键词" name="keyword" >
                <Keyword tag={['all', 'delete', 'open', 'close']} change={this.changeInput} />
            </Form.Item>
            <Form.Item label="摘要" name="description" >
                <Input.TextArea className="input-sm" />
            </Form.Item>
            <Form.Item label="顺序" name="sort" >
                <Input className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="导航标识">
                <Input className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="是否启用">
                <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="生成目录">
                <Radio.Group>
                    <Radio value="1">是</Radio>
                    <Radio value="0">否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="设置">
                <Checkbox>跳转</Checkbox>
                <Checkbox>通用</Checkbox>
            </Form.Item>
            <Form.Item label="模板文件名" name="single_templates" >
                <Input defaultValue="singlepage.htm" className="input-sm input-150" />
            </Form.Item>
            <Form.Item label="文件名" name="html" >
                <Input className="input-sm input-150" />
            </Form.Item>
            <Form.Item>
                <Editor 
                    content="倪凯晨"
                    getData={this.getContent}
                />
            </Form.Item>
        </>
    )
}

export default BasicField


