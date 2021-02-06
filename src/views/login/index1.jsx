import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect, dispatchToProps } from "@/utils";
import { Chart } from "@/components";
import "@/static/login.css";

const bgGround = {
  height: "100%",
  width: "100%",
  overflow: "hidden",
  backgroundSize: "cover",
  background: `url(${require("../../static/image/login_bg.jpg")}) no-repeat`,
};

class Login extends React.Component {
  componentDidMount() {
    this.props.dispatch.getDefault();
  }
  onFinish = (values) => {
    this.props.dispatch
      .fetch({
        api: "Login",
        data: {
          username: values.username,
          password: values.password,
        },
      })
      .then((res) => {
        sessionStorage.setItem("token", res.result.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.result.userInfo));
        sessionStorage.setItem("menuList", JSON.stringify(res.result.menuList));
        sessionStorage.setItem("gradeList", res.result.grade);
        sessionStorage.setItem("channel", JSON.stringify(res.result.channel));
        window.location.href = "/admin";
      });
  };

  render() {
    return (
      <div>
        {/* <Chart.Day
          dataSource={this.props.module.list.hours}
          type="Line"
          title={["昨日", "今日"]}
        />
        <Chart.Month
          dataSource={[
            (this.props.module.list.month &&
              this.props.module.list.month.visit) ||
              [],
          ]}
          type="Line"
          title={["昨日", "今日"]}
        /> */}
        <Chart.Week
          title="头条"
          type="Bar"
          className="graph-red"
          label={
            (this.props.module.list.week &&
              this.props.module.list.week.label) ||
            []
          }
          dataSource={[
            (this.props.module.list.week &&
              this.props.module.list.week.register) ||
              [],
          ]}
        />
        {/* <Chart.Week
          title="百度"
          type="Line"
          className="graph-green"
          // dataSource={[[0, 3, 2, 8, 0, 0, 1]]}
          dataSource={[
            (this.props.module.list.week &&
              this.props.module.list.week.visit) ||
              [],
          ]}
        />

        <Chart.Year
          title="头条"
          type="Bar"
          className="graph-blue"
          // dataSource={[[65, 29, 47, 8, 58, 120, 91]]}
          dataSource={[
            (this.props.module.list.year &&
              this.props.module.list.year.visit) ||
              [],
          ]}
        />
        <Chart.Year
          title="百度"
          type="Line"
          className="graph-green"
          // dataSource={[[0, 3, 2, 8, 0, 0, 1]]}
          dataSource={[
            (this.props.module.list.year &&
              this.props.module.list.year.register) ||
              [],
          ]}
        /> */}
      </div>
      // <div style={bgGround}>
      //   <div className="login-wrap">
      //     <div id="userinfo" className="login-left left">
      //       <div className="photos">
      //         <i className="iconfont icon-user font64"></i>
      //       </div>
      //       <div id="name" class="username"></div>
      //     </div>
      //     <div id="content" className="login-right right">
      //       <h1 style={{ marginBottom: 25, fontSize: 14, fontWeight: "bold" }}>
      //         网站后台管理系统
      //       </h1>
      //       <Form name="normal_login" onFinish={this.onFinish}>
      //         <Form.Item
      //           name="username"
      //           rules={[{ required: true, message: "请输入用户名!" }]}
      //         >
      //           <Input
      //             prefix={<UserOutlined className="site-form-item-icon" />}
      //             size="large"
      //             placeholder="用户名"
      //           />
      //         </Form.Item>
      //         <Form.Item
      //           name="password"
      //           rules={[{ required: true, message: "请输入密码!" }]}
      //         >
      //           <Input
      //             prefix={<LockOutlined className="site-form-item-icon" />}
      //             size="large"
      //             type="password"
      //             placeholder="密码"
      //           />
      //         </Form.Item>
      //         <Form.Item>
      //           <Button
      //             type="primary"
      //             htmlType="submit"
      //             className="login-form-button"
      //           >
      //             登录
      //           </Button>
      //         </Form.Item>
      //       </Form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.initData,
  }),
  dispatchToProps
)(Login);
