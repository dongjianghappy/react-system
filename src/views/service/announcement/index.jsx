import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  datetime,
} from "@/utils";
import { Status, Confirm, WeCheckbox, WeDrawer } from "@/components";
import { Operatinavbar } from "@/common";
import Detail from "./components/detail";

const { add, del, edit } = authorized.announcement;
const { announcement: coding } = codings;

class Announcement extends React.Component {
  state = {
    request: {
      ...this.props.common.global.initPage,
    },
  };
  componentDidMount() {
    this.getData();
  }

  getData = (data) => {
    this.props.dispatch.select({
      data: {
        coding,
        ...this.state.request,
        ...data,
      },
      node: "announcement",
    });
  };

  render() {
    const { announcement } = this.props.module;

    return (
      <div>
        <Card>
          <div className="nav-title">
            公告通知
            <span className="right">
              {checkButtonAuth("b:manage:announcement:add") && (
                <WeDrawer.Form
                  name="发布公告通知"
                  icon="add"
                  type="default"
                  data={{ coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth("add")}
                  {...this.props}
                >
                  <Detail />
                </WeDrawer.Form>
              )}
            </span>
          </div>
          <table width="100%" className="table-striped table-hover col-left-2">
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-6">公告通知</td>
              <td className="col-md-2">时间</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {announcement &&
              announcement.map((item, index) => (
                <tr class="tr-list">
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>
                    {item.type === "1" ? (
                      <span className="mr5 cl-red">公告</span>
                    ) : (
                      <span className="mr5 cl-green">通知</span>
                    )}
                    - {item.title}
                  </td>
                  <td>{datetime(item.datetime)}</td>
                  <td>
                    <Status
                      data={{ item, field: "status", coding }}
                      authorized={checkButtonAuth("edit")}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Space>
                      <WeDrawer.Form
                        title="编辑公告通知"
                        name="编辑"
                        isText={true}
                        action="edit"
                        data={{ id: item.id, coding }}
                        renderList={this.getData}
                        authorized={checkButtonAuth("edit")}
                        {...this.props}
                      >
                        <Detail />
                      </WeDrawer.Form>
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
                      <Confirm
                        {...this.props}
                        name={item.istop === "1" ? "取消" : "置顶"}
                        config={{
                          operating:
                            item.istop === "1" ? "cancelTop" : "setTop",
                          message: React.$modalEnum.top,
                        }}
                        data={{
                          coding,
                          id: item.id,
                          field: "istop",
                          value: item.istop === "1" ? "0" : "1",
                        }}
                        api="changeData"
                        renderList={this.getData}
                        authorized={checkButtonAuth("del")}
                      />
                    </Space>
                  </td>
                </tr>
              ))}
          </table>

          <Operatinavbar
            button={["all", "delete", "open", "close"]}
            data={{ list: module.checkedList, coding }}
            renderList={this.getData}
            checkButtonAuth={checkButtonAuth}
            authorized={authorized.announcement}
            {...this.props}
          />
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    common: state.common,
    module: state.service,
  }),
  dispatchToProps
)(Announcement);
