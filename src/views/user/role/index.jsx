import React from "react";
import { Card, Space, Input, DatePicker } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Confirm, WeModal, NavGroup } from "@/components";
import Detail from "./components/Detail";

const { Nav } = NavGroup;
const { add, del, edit, view } = authorized.user.role;
const { role: coding } = codings.user;

class UserRole extends React.Component {
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

  componentDidMount() {
    this.getData();
  }

  render() {
    const { user } = this.props.module;
    return (
      <NavGroup
        extra={
          checkButtonAuth(add) ? (
            <WeModal.modalForm
              name="用户列表"
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth(add)}
              {...this.props}
            >
              <Detail />
            </WeModal.modalForm>
          ) : (
            ""
          )
        }
      >
        <Nav name="所有主题" value="1">
          <Card>
            <table
              width="100%"
              className="table-striped table-hover col-left-1"
            >
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
                        <Link
                          disabled={!checkButtonAuth(edit)}
                          to={{
                            pathname: "/admin/user/role/grade",
                            state: { id: item.id },
                          }}
                        >
                          查看
                        </Link>
                      </Space>
                    </td>
                  </tr>
                ))}
            </table>
          </Card>
        </Nav>
      </NavGroup>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserRole);
