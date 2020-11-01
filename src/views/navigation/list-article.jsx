import React from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, Editor} from '../../components/index.js'
import PropTytes from 'prop-types'
import {
  ButtonGroup,
  Keyword
} from '../../common'
import Article from './article'

import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'



class Single extends React.Component{

  state = {
    init: {},
    tag: [],
    content: "",
    keyword: ""
  }

    changeInput = (data) => {
      this.setState({
        keyword: data.join()
      })
    }

    getContent = (data) => {
      this.setState({
        content: data
      })
    }    

    init = (data) => {
      this.setState({
        tag: data.keyword.split(",")
      })
      this.setState({
        content: data.content
      })
    } 

    render(){
        const { single } = this.props.module
        const { getFieldDecorator } = PropTytes.any;
        return(

            <div>
              <Card title="新增单页" extra={
                  <Space>
                  <Button onClick={()=>this.props.history.push('/admin/single')}>返回</Button>
                  </Space>
                }>
                  <div>
                  <R_form
                    init={this.init}
                    id="" //{this.props.location.state.id}
                    {...this.props}
                    formData = {this.state}
                    coding="P0002"
                  >
                    <Form.Item label="名称" name="title" >
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








                    {/* <Form.Item name="content">
                      <Editor 
                        content="水水水水水水水"
                        getData={this.getContent}
                      />
                    </Form.Item>                     */}
                  </R_form>
                  </div>
                
              </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
      module: state.navigation,
  }
}

export default connect(stateToProops, dispatchToProps)(Single)
