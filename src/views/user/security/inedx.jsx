import React from "react";
import { Card, Space, Button } from "antd";

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
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 10,
        coding,
      },
      node: "security",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { security } = this.props.module;

    return (
      <>
        <Card>
          <div style={{ marginBottom: 15 }}>
            <Space>
              <Button type="primary">安全问题</Button>
              {checkButtonAuth(add) ? (
                <WeModal.modalForm
                  name="新增问题"
                  data={{ coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth(add)}
                  {...this.props}
                >
                  <Detail />
                </WeModal.modalForm>
              ) : (
                ""
              )}
            </Space>
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
      </>
    );
  }
}

export default connect(
  (state) => ({
    module: state.user,
  }),
  dispatchToProps
)(UserSecurity);
