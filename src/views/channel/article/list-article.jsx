import React from 'react';
import { Card, Button, Form, Tabs, message } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import dispatchToProps from '@/store/dispatch'
import CustomField from './components/customField'
import BasicInfo from './components/basicInfo'

const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
  };

class Single extends React.Component{
  form = React.createRef()

  state = {
    content: ""
  }

  onFinish = values => {
      if(this.props.location.state && this.props.location.state.id){
          this.props.fetch({
              api: "updateArticle",
              data: {
                  coding: this.props.location.state.coding,
                  content: this.state.content,
                  id: this.props.location.state.id,
                  ...values,        
              }
          }).then((res) => {
            message.info("编辑成功")
          })
      }else{
          this.props.fetch({
              api: "insertArticle",
              data: {
                  coding: this.props.location.state.coding,
                  content: this.state.content,
                  ...values
              }
          }).then((res) => {
            message.info("新增成功")
          })
      }
  };
  
  async  componentDidMount(){
        // this.props.getFlagAction()

        if(this.props.location.state && this.props.location.state.id){
         const res = await this.props.fetch({
              api: "articleDetail",
              data: {
                  coding: this.props.location.state.coding,
                  id: this.props.location.state.id
              }
          })
            this.form.current.setFieldsValue( res.result);
            this.setState({
              content: res.result.content
            })
      }
    }

    getContent = (data) => {
      this.setState({
        content: data
      })
    }    

    render(){
        return(
            <div>
              <Card>
              <Form
              ref={this.form}
            {...layout}
            labelAlign="left"
            onFinish={this.onFinish}
        >
      <Tabs type="card">
        <TabPane tab="基本信息" key="1">
          <BasicInfo getContent={this.getContent} data={{content: this.state.content}} />
        </TabPane>
        <TabPane tab="自定义变量" key="2">
          <div className="p15 mb10" style={{background: "#f1f1f1"}}>
          <Link to={{pathname:'/admin/customize/list', state:{id: 3}}}>点击前往自定义字段关联</Link>
          </div>
          <CustomField {...this.props} channel_id={this.props.location.state.channel_id} />
        </TabPane>

      </Tabs>

                <Form.Item label=" " style={{padding: '10px 25px'}}>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
                </Form>
               
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
