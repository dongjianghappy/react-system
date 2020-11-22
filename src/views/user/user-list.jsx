import React from "react";
import { Card, Space, Button, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Confirm, WeCheckbox, WeDrawer } from "@/components";
import Detail from "./components/Detail";

const { add, del, edit } = authorized.partner;
const { partner: coding } = codings;

class UserList extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "userList",
      node: "user",
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    const { user } = this.props.module;
    return (
      <Card
        title="用户列表"
        extra={
          <Space>
            <Button type="primary">新增用户</Button>
          </Space>
        }
      >
        <table width="100%" className="table-striped table-hover col-left-23">
          <tr className="th">
            <td className="col-md-1">选择</td>
            <td className="col-md-1">头像</td>
            <td className="col-md-1">会员账号</td>
            <td className="col-md-2">用户名</td>
            <td className="col-md-2">电子邮箱</td>
            <td className="col-md-2">注册日期</td>
            <td className="col-md-1">在线/天</td>
            <td className="col-md-2">操作</td>
          </tr>
          {user &&
            user.map((item, index) => (
              <tr>
                <td>
                  <WeCheckbox
                    data={{ id: item.id }}
                    {...this.props}
                  ></WeCheckbox>
                </td>
                <td>
                  <span className="relative">
                    <Avatar src={item.photos} />
                    <i
                      className="iconfont  icon-female  absolute font12"
                      style={{ bottom: 0 }}
                    ></i>
                  </span>
                </td>
                <td>
                  {item.account}
                  {item.role !== "0" ? (
                    <span
                      style={{
                        backgroundColor: "#52c41a",
                        position: "relative",
                        left: "9px",
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        verticalAlign: "middle",
                        borderRadius: "50%",
                      }}
                    ></span>
                  ) : (
                    ""
                  )}
                </td>
                <td>{item.nickname}</td>
                <td>{item.email}</td>
                <td>{item.last_login_time}</td>
                <td>{item.online}</td>
                <td>
                  <Space size="middle">
                    <Button type="primary" size="small"></Button>
                    <Confirm
                      name={item.recommend === "1" ? "取消推送" : "推送"}
                      config={{
                        operating:
                          item.recommend === "1"
                            ? "cancelRecommend"
                            : "recommend",
                        message: React.$modalEnum.user,
                      }}
                      data={{ coding, uid: item.account }}
                      api="push"
                      renderList={this.getData}
                      authorized={checkButtonAuth(del)}
                      {...this.props}
                    />
                    <WeDrawer.show
                      name="设置"
                      title="用户设置"
                      data={{ uid: item.account }}
                      api="userDetail"
                      // renderList={this.getData}
                      // authorized={checkButtonAuth("edit")}
                      {...this.props}
                    >
                      <Detail />
                    </WeDrawer.show>
                    {/* <SetUser
                      type="primary"
                      size="small"
                      name="设置"
                      title="用户信息"
                      {...this.props}
                      id={item.id}
                      {...item}
                    /> */}
                  </Space>
                </td>
              </tr>
            ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserList);
