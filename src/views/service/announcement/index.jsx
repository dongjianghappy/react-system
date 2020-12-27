import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Status, Confirm, WeCheckbox, WeDrawer, Quick } from "@/components";
import { Operatinavbar } from "@/common";
import Article from "./article";

const { add, del, edit } = authorized.announcement;
const { announcement: coding } = codings;

class Announcement extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "announcement",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { dispatch, module } = this.props;

    return (
      <div>
        <Card
          title="公告通知"
          extra={
            checkButtonAuth("b:manage:announcement:add") && (
              <WeDrawer.Form
                name="发布公告通知"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth("add")}
                {...this.props}
              >
                <Article />
              </WeDrawer.Form>
            )
          }
        >
          <table width="100%" className="table-striped table-hover col-left-3">
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-1">顺序</td>
              <td className="col-md-7">伙伴名称</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {module.announcement &&
              module.announcement.map((item, index) => (
                <tr class="tr-list">
                  <td>
                    <WeCheckbox
                      data={{ id: item.id }}
                      {...this.props}
                    ></WeCheckbox>
                  </td>
                  <td>
                    <Quick
                      title={item.sort}
                      data={{ id: item.id, field: "sort", coding }}
                      authorized={checkButtonAuth("edit")}
                      {...this.props}
                    />
                  </td>
                  <td>
                    {item.type === "1" ? (
                      <span className="mr5 cl-red">公告</span>
                    ) : (
                      <span className="mr5 cl-green">通知</span>
                    )}

                    <Quick
                      title={item.title}
                      data={{ id: item.id, field: "title", coding }}
                      authorized={checkButtonAuth("edit")}
                      {...this.props}
                      width="50%"
                    />
                  </td>
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
                        <Article />
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
    module: state.service,
  }),
  dispatchToProps
)(Announcement);
