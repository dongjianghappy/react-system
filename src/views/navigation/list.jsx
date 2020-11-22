import React from "react";
import { Space, Card, Button } from "antd";
import {
  connect,
  Link,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Status, Confirm, WeCheckbox, Quick } from "../../components/index.js";
import { ButtonGroup, Option } from "../../common";

const { add, del, edit } = authorized.navigation.main;
const { single: coding } = codings.navigation;

class Single extends React.Component {
  state = {
    option: [
      {
        name: "导航类型: ",
        field: "channel",
        list: [],
      },
    ],
  };

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

  async componentDidMount() {
    const res = await this.props.dispatch.fetch({
      api: "static",
    });

    this.setState(() => {
      return (this.state.option[0].list = res.result);
    });

    let channel = "0";
    if (module === "tech") {
      channel = "1";
    } else if (module === "article") {
      channel = "2";
    } else if (module === "source") {
      channel = "3";
    }

    this.props.dispatch.select({
      api: "singleNav",
      data: {
        channel: channel,
      },
      node: "single",
    });
  }

  render() {
    const { module } = this.props;

    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <Option
            option={this.state.option}
            select={this.props.select}
            api="navigation"
            node="main"
          />
        </div>

        <Card
          title="单页列表"
          extra={
            <Space>
              {checkButtonAuth(add) ? (
                <Button
                  onClick={() =>
                    this.props.history.push("/admin/single/detail")
                  }
                  authorized={checkButtonAuth(add)}
                >
                  新增单页
                </Button>
              ) : (
                ""
              )}
            </Space>
          }
        >
          <table width="100%" className="table-striped col-left-345">
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-1">顺序</td>
              <td className="col-md-2">名称</td>
              <td className="col-md-2">路径</td>
              <td className="col-md-2">文件</td>
              <td className="col-md-1">标识</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {module.single &&
              module.single.map((item, index) => (
                <tr className="tr-list" key={item.id}>
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
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Quick
                      title={item.title}
                      data={{ id: item.id, field: "title", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Quick
                      title={item.dir_file}
                      data={{ id: item.id, field: "dir_file", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Quick
                      title={item.html}
                      data={{ id: item.id, field: "html", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <ta></ta>
                  <td>
                    <Status
                      data={{ item, field: "status", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Space>
                      <Link
                        disabled={checkButtonAuth(edit)}
                        to={{
                          pathname: "/admin/single/detail",
                          state: { id: item.id, coding: "P0002" },
                        }}
                      >
                        编辑
                      </Link>
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
          <ButtonGroup
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
    module: state.navigation,
  }),
  dispatchToProps
)(Single);
