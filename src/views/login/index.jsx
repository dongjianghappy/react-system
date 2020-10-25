import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken, setRightMenu } from '../../utils/auth'
import '../../static/login.css'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'




const bgGround={
    height:"100%",

    width:"100%",
    
    overflow: "hidden",
    
    backgroundSize:"cover",
    background: `url(${require("../../static/image/login_bg.jpg")}) no-repeat`
}

class Login extends React.Component{

    onFinish = values => {
        const q = this.props.getLogin({
            username: values.username,
            password: values.password
        })
        
        // api.Login().then((res) =>{
        //     setToken(res.result.token)
        //     setRightMenu(JSON.stringify(res.result.menuList))
        //     this.props.history.push("/admin")
        // })

        //setToken(values.username)
        //this.props.history.push("/admin")

      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    render(){
        return(
            <div style={bgGround}>
                <div className="login-wrap">
                    {/* 左侧 */}
                    <div id="userinfo" className="login-left left">
                        <div className="photos"><i className="iconfont icon-user font64"></i></div>
                        <div id="name" class="username"></div>
                    </div>
                    {/* 右侧 */}
                    <div id="content" className="login-right right">
                    <h1 style={{marginBottom:25, fontSize: 14, fontWeight: "bold"}}>网站后台管理系统</h1>
                    <Form
                    name="normal_login"
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        size="large" 
                        placeholder="用户名"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>
                     <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                        </Button>
                    </Form.Item>
                    </Form>
                    </div>
                </div>
            </div>
        )
    }
}


const stateToProops = (state) => {
    console.log(state);
    return {
        list: state.login.list
    }
  }
  
  export default connect(stateToProops, dispatchToProps)(Login)
  