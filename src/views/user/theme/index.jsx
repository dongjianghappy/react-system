import React from "react";
import { Card, Space, Button, Row, Col } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeModal } from "@/components";
import Detail from "./components/detail";

const { add, del, edit } = authorized.user.theme;
const { theme: coding } = codings.user;

class UserTheme extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "theme",
      node: "theme",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { theme } = this.props.module;
    return (
      <>
        <Card>
          <div style={{ marginBottom: 15 }}>
            <Space>
              <Button type="primary">所有主题</Button>

              {checkButtonAuth(add) ? (
                <WeModal.modalForm
                  name="新增主题"
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

          <Row>
            {theme.map((item, index) => (
              <Col span="6">
                <Card
                  style={{ margin: 10, padding: 10 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  {item.name}
                  <WeModal.modalForm
                    name="编辑主题"
                    action="edit"
                    data={{ id: item.id, coding }}
                    renderList={this.getData}
                    authorized={checkButtonAuth(edit)}
                    {...this.props}
                  >
                    <Detail />
                  </WeModal.modalForm>
                </Card>
              </Col>
            ))}
          </Row>
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
)(UserTheme);
