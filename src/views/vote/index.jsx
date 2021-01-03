import React from "react";
import { Card, Avatar } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
// import Reply from "./components/reply";
import { Status, WeCheckbox, WeDrawer, Confirm } from "@/components";
import { Operatinavbar } from "@/common";
import Detail from "./components/detail";

const { reply, del, edit } = authorized.messageBoard;
const { cate: coding } = codings.vote;

class Index extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "selectVote",
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
      node: "vote",
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { vote } = this.props.module;
    return (
      <Card
        title="投票管理"
        extra={
          checkButtonAuth("add") && (
            <WeDrawer.Form
              name="新建投票"
              icon="add"
              data={{ coding }}
              renderList={this.getData}
              authorized={checkButtonAuth("add")}
              api="createVote"
              {...this.props}
            >
              <Detail />
            </WeDrawer.Form>
          )
        }
      >
        <table width="100%" className="table-striped table-hover col-left-1">
          <tr className="th">
            <td className="col-md-6">投票名称</td>
            <td className="col-md-2">投票人数</td>
            <td className="col-md-2">状态</td>
            <td className="col-md-2">操作</td>
          </tr>
          {vote.map((item, index) => (
            <>
              <tr>
                <td>{item.name}</td>
                <td>{item.vote}</td>
                <td>
                  <Status
                    data={{ item, field: "checked", coding }}
                    authorized={checkButtonAuth("edit")}
                    {...this.props}
                  />
                </td>
                <td>
                  <span
                    onClick={() =>
                      this.props.history.push(`/admin/vote/list?id=${item.id}`)
                    }
                  >
                    投票查看
                  </span>
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
                </td>
              </tr>
            </>
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
    );
  }
}

export default connect(
  (state) => ({
    module: state.vote,
  }),
  dispatchToProps
)(Index);
