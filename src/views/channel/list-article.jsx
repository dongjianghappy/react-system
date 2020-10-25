import React from 'react';
import {Space, Card, Table, Checkbox, Button, Input, Form, Radio, Tabs } from 'antd'
import { Status, R_button, R_drawer, R_checkbox, Dialog, R_form, Quick, Editor} from '../../components/index.js'
import PropTytes from 'prop-types'
import {
  ButtonGroup,
  Keyword,
  CheckboxGroup
} from '../../common'
import Article from './article'

import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import CustomField from './components/customField'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Single extends React.Component{

    state = {
      init: {},
      tag: [],
      content: "",
      keyword: ""
    }

    componentDidMount(){
        this.props.getFlagAction()
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
      debugger
      this.setState({
        tag: data.tag.split(",")
      })
      this.setState({
        content: data.content
      })
      debugger
    }    

    render(){
        const { single } = this.props.module
        const { getFieldDecorator } = PropTytes.any;

        const { flags } = this.props.module

        return(

            <div>
              <Card>
                <R_form
                  init={this.init}
                  id={this.props.location.state.id}
                  {...this.props}
                  formData = {this.state}
                  coding="K0000"
                >
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="基本信息" key="1" style={{padding: '10px 25px'}}>
                    <Form.Item label="文章标题" name="title" >
                      <Input placeholder="请输入文章标题" className="input-sm input-350" />
                    </Form.Item>   
                    <Form.Item label="tag标签" name="keyword" >
                      <Keyword tag={this.state.tag} change={this.changeInput} />
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
                        <Editor 
                          content={this.state.content}
                          getData={this.getContent}
                        />
                    </Form.Item>
                    <Form.Item label="摘要" name="summary" >
                      <Input.TextArea className="input-sm" placeholder="请输入内容摘要" />
                    </Form.Item>
                    <Form.Item label="聚合标签" name="flag" >
                      <CheckboxGroup tagList={flags} />
                    </Form.Item>
                  </TabPane>
                  <TabPane tab="自定义变量" key="2" style={{padding: '10px 25px'}}>
                    <CustomField />
                  </TabPane>
                </Tabs>
                </R_form>
              </Card>
            </div>
        )
    }
}

const stateToProops = (state) => {
  return {
      module: state.channel,
  }
}

export default connect(stateToProops, dispatchToProps)(Single)
