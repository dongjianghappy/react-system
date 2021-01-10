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
import Detail from "./components/detail";

const { add, del, edit } = authorized.partner;
const { partner: coding } = codings;

class Index extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
    });
  };

  render() {
    const { module } = this.props;

    return (
      <div>
        <Card
          title="合作伙伴"
          extra={
            checkButtonAuth("add") && (
              <WeDrawer.Form
                name="新增合作伙伴"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth("add")}
                {...this.props}
              >
                <Detail />
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
            {module.list &&
              module.list.map((item, index) => (
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
                    <Quick
                      title={item.name}
                      data={{ id: item.id, field: "name", coding }}
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
            authorized={authorized.partner}
            {...this.props}
          />
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.partner,
  }),
  dispatchToProps
)(Index);