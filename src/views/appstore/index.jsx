import React from "react";
import { Card, Row, Col, Popover, Button } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Status, WeModal, Confirm, WeDrawer } from "../../components";
import Detail from "./components/detail";
import GradeList from "./components/gradeList";

const { add, del, edit } = authorized.appstore;
const { appstore: coding } = codings;

class Appstore extends React.Component {
  state = {
    grade: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "appstore",
      data: {
        page: 0,
        pagesize: 25,
      },
    });

    this.props.dispatch
      .fetch({
        api: "userGrade",
        data: {
          type: 1,
        },
      })
      .then((res) => {
        this.setState({
          grade: res.result,
        });
      });
  };

  render() {
    const { list } = this.props.module;

    return (
      <>
        <Card>
          <div className="nav-title">
            应用中心
            <span className="right">
              {checkButtonAuth(add) && (
                <WeModal.modalForm
                  name="新增应用"
                  icon="add"
                  type="default"
                  data={{ coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth(add)}
                  {...this.props}
                >
                  <Detail gradeList={this.state.grade} />
                </WeModal.modalForm>
              )}
            </span>
          </div>
          <Row>
            {list &&
              list.map((item, index) => (
                <Col span="12" style={{ background: "#f9f9f9", padding: 5 }}>
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
                        <span className="line">|</span>
                        <WeModal.modalForm
                          name="编辑"
                          action="edit"
                          isText={true}
                          data={{ id: item.id, coding }}
                          renderList={this.getData}
                          authorized={checkButtonAuth(edit)}
                          {...this.props}
                        >
                          <Detail gradeList={this.state.grade} />
                        </WeModal.modalForm>
                        <span className="line">|</span>
                        <Popover
                          placement="bottom"
                          content={
                            <div>
                              <p>
                                <Confirm
                                  name="删除"
                                  config={{
                                    operating: "delete",
                                    message: React.$modalEnum,
                                  }}
                                  data={{ coding, id: item.id }}
                                  api="delete"
                                  renderList={this.getData}
                                  authorized={checkButtonAuth("delete")}
                                  {...this.props}
                                />
                              </p>
                              <p>
                                <WeDrawer.Form
                                  title="权限设置"
                                  name="权限"
                                  isText={true}
                                  action="edit"
                                  data={{ id: item.id, coding }}
                                  renderList={this.getData}
                                  authorized={checkButtonAuth("edit")}
                                  {...this.props}
                                >
                                  <GradeList />
                                </WeDrawer.Form>
                              </p>
                            </div>
                          }
                        >
                          更多
                        </Popover>
                      </>
                    }
                  >
                    <Row>
                      <Col span="4">
                        <img
                          src={item.image[0]}
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
