import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Confirm, WeModal } from "@/components";
import Detail from "./components/Detail";

const { add, del, edit, view } = authorized.user.role;
const { role: coding } = codings.user;

class UserRole extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      data: {
        coding,
        page: 0,
        pagesize: 10,
      },
      node: "user",
    });
  };

  render() {
    const { user } = this.props.module;
    return (
      <Card
        title="用户列表"
        extra={
          checkButtonAuth(add) && (
            <WeModal.modalForm
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
              {...this.props}
            >
              <Detail />
            </WeModal.modalForm>
          )
        }
      >
        <table width="100%" className="table-striped table-hover col-left-1">
          <tr className="th">
            <td className="col-md-4">名称</td>
            <td className="col-md-4">个数</td>
            <td className="col-md-2">新增日期</td>
            <td className="col-md-2">操作</td>
          </tr>
          {user &&
            user.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.num}</td>
                <td>{item.datetime}</td>
                <td>
                  <Space>
                    <WeModal.modalForm
                      name="编辑角色"
                      action="edit"
                      data={{ id: item.id, coding }}
                      renderList={this.getData}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    >
                      <Detail />
                    </WeModal.modalForm>
                    <Confirm
                      name="删除"
                      config={{
                        operating: "delete",
                        message: React.$modalEnum.user.role,
                      }}
                      data={{ coding, id: item.id }}
                      api="delete"
                      renderList={this.getData}
                      authorized={checkButtonAuth(del)}
                      {...this.props}
                    />
                    <span
                      disabled={!checkButtonAuth(edit)}
                      onClick={() =>
                        this.props.history.push(
                          `/admin/user/role/grade?id=${item.idl}`
                        )
                      }
                    >
                      查看
                    </span>
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
)(UserRole);
