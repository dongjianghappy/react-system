import React from "react";
import { Card, Row, Col } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Status, WeModal } from "../../components/index.js";
import Detail from "./components/detail";

const { add, del, edit } = authorized.appstore;

const { appstore: coding } = codings;

class Appstore extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "appstore",
      data: {
        page: 0,
        pagesize: 25,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { list } = this.props.module;
    debugger;
    return (
      <>
        <Card
          title="应用中心"
          extra={
            checkButtonAuth(add) ? (
              <WeModal.modalForm
                name="新增应用"
                action="edit"
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
          <Row>
            {list &&
              list.map((item, index) => (
                <Col span="12">
                  <Card
                    title={item.name}
                    extra={
                      <>
                        {
                          <Status
                            data={{ item, field: "status", coding }}
                            authorized={checkButtonAuth("edit")}
                            {...this.props}
                          />
                        }
                        |
                        <Link
                          disabled={!checkButtonAuth(edit)}
                          to={{
                            pathname: "/admin/user/grade",
                            state: { type: 2 },
                          }}
                        >
                          权限设置
                        </Link>{" "}
                        |
                        <WeModal.modalForm
                          name="编辑应用"
                          action="edit"
                          data={{ id: item.id, coding }}
                          renderList={this.getData}
                          authorized={checkButtonAuth(edit)}
                          {...this.props}
                        >
                          <Detail />
                        </WeModal.modalForm>
                      </>
                    }
                    style={{ margin: 10, background: "#f9f9f9" }}
                  >
                    <Row>
                      <Col span="4">
                        <img
                          src={item.image}
                          style={{ width: "90%", height: 60 }}
                        />
                      </Col>
                      <Col span="20">
                        <Row style={{ paddingBottom: 10 }}>
                          <Col span="2">描述:</Col>
                          <Col span="22">{item.description}</Col>
                        </Row>
                        <Row>
                          <Col span="2">权限:</Col>
                          <Col span="22">{item.grade}</Col>
                        </Row>
                      </Col>
                    </Row>
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
    module: state.appstore,
  }),
  dispatchToProps
)(Appstore);
