import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Status, WeCheckbox, Confirm, WeDrawer, Quick } from "@/components";
import { Operatinavbar } from "@/common";
import Article from "./article";

const { add, del, edit } = authorized.spread;
const { spread: coding } = codings;

class Spread extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { list } = this.props.module;

    return (
      <div>
        <Card
          title="推广管理"
          extra={
            checkButtonAuth(add) ? (
              <WeDrawer.Form
                name="新增推广"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Article />
              </WeDrawer.Form>
            ) : (
              ""
            )
          }
        >
          <table width="100%" class="table-striped table-hover col-left-34">
            <tr>
              <td className="col-md-1">选择</td>
              <td className="col-md-1">顺序</td>
              <td className="col-md-2">推广名称</td>
              <td className="col-md-2">推广链接</td>
              <td className="col-md-1">价格(元/每月)</td>
              <td className="col-md-2">时间</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {list &&
              list.map((item, index) => (
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
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Quick
                      title={item.name}
                      data={{ id: item.id, field: "name", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Quick
                      title={item.url}
                      data={{ id: item.id, field: "url", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <Status
                      data={{ item, field: "status", coding }}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Space>
                      <WeDrawer.Form
                        title="编辑推广内容"
                        name="编辑"
                        id={item.id}
                        coding="P0006"
                        renderList={this.getData}
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
                        authorized={checkButtonAuth(del)}
                        {...this.props}
                      />
                    </Space>
                  </td>
                </tr>
              ))}
          </table>

          {/* <Operatinavbar
            node={this.props.node}
            button={["all", "delete", "open", "close"]}
            data={this.props.module}
            coding="P0006"
            {...this.props}
          /> */}
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.spread,
  }),
  dispatchToProps
)(Spread);
