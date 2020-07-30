import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../../utils/auth'
import '../../static/login.css'
import api from '../../api/index'



const bgGround={
    height: '100%',
    background: `url(${require("../../static/image/login_bg.jpg")})`
}

export default class Login extends React.Component{

    onFinish = values => {

        api.Login({
            username: values.username,
            password: values.password
        }).then((res) =>{
            setToken(res.result.token)
            this.props.history.push("/admin")
        })

        //setToken(values.username)
        //this.props.history.push("/admin")

      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    render(){
        return(
            <div style={bgGround}>
            <Card title="管理员登录" className="login-form">
                <Form
                    name="normal_login"
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                        </Button>
                    </Form.Item>
                    </Form>
            </Card>
            </div>
        )
    }
}