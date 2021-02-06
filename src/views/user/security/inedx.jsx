import React from "react";
import { Card, Space } from "antd";

import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import Detail from "./components/detail";
import { Confirm, WeModal } from "@/components";

const { add, del, edit } = authorized.user.security;
const { security: coding } = codings.user;

class UserSecurity extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      data: {
        coding,
      },
      node: "security",
    });
  };

  render() {
    const { security } = this.props.module;

    return (
      <Card>
        <div className="nav-title">
          安全问题
          <span className="right">
            {checkButtonAuth(add) && (
              <WeModal.modalForm
                name="新增问题"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeModal.modalForm>
            )}
          </span>
        </div>
        <table width="100%" class="table-striped table-hover col-left-2">
          {security &&
            security.map((item, index) => (
              <tr>
                <td class="col-md-1">问题一</td>
                <td class="col-md-21">{item.quetion}</td>
                <td class="col-md-2">
                  <Space size="middle">
                    <WeModal.modalForm
                      name="编辑问题"
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
                        message: React.$modalEnum,
                      }}
                      data={{ coding, id: item.id }}
                      api="delete"
                      renderList={this.getData}
                      authorized={checkButtonAuth(del)}
                      {...this.props}
                    />
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
)(UserSecurity);
