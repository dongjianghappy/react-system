import React from "react";
import { Card, Space, Button, Avatar } from "antd";
import { checkButtonAuth, authorized, codings } from "@/utils";
import { Confirm, WeCheckbox, WeDrawer } from "@/components";

const UserList = (props) => {
  const { dataSource, title } = props;
  return (
    <Card title={title} bordered={false}>
      <table width="100%" className="table-striped table-hover col-left-2">
        <tr className="th">
          <td className="col-md-1">选择</td>
          <td className="col-md-2">用户</td>
          <td className="col-md-3">会员账号</td>
          <td className="col-md-3">注册日期</td>
          <td className="col-md-1">在线/天</td>
          <td className="col-md-2">操作</td>
        </tr>
        {dataSource &&
          dataSource.map((item, index) => (
            <tr>
              <td>
                <WeCheckbox data={{ id: item.id }} {...props}></WeCheckbox>
              </td>
              <td>
                <span className="relative mr10">
                  <Avatar src={item.photos} />
                  <i
                    className="iconfont  icon-female  absolute font12"
                    style={{ bottom: 0 }}
                  ></i>
                </span>
                {item.nickname}
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
              <td>{item.register_time}</td>
              <td>{item.online}</td>
              <td>
                <Space size="middle">
                  <Button type="primary" size="small"></Button>
                  <Confirm
                    {...props}
                    name={item.recommend === "1" ? "取消推送" : "推送"}
                    config={{
                      operating:
                        item.recommend === "1"
                          ? "cancelRecommend"
                          : "recommend",
                      message: React.$modalEnum.user,
                    }}
                    data={{ coding: "", uid: item.account }}
                    api="push"
                    renderList={props.renderList}
                    authorized={checkButtonAuth("del")}
                  />
                  <WeDrawer.show
                    {...props}
                    name="设置"
                    title="用户设置"
                    data={{ uid: item.account }}
                    api="userDetail"
                  >
                    {/* <Detail /> */}
                  </WeDrawer.show>
                </Space>
              </td>
            </tr>
          ))}
      </table>
    </Card>
  );
};

export default UserList;
