import React from "react";
import { Space, Card, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";
import { Status, Confirm, WeCheckbox, Quick } from "@/components";
import { ButtonGroup } from "@/common";

const { add, del, edit } = authorized.navigation.main;
const { single: coding } = codings.navigation;

class Single extends React.Component {
  state = {
    params: {},
  };

  async componentDidMount() {
    this.setState(
      {
        params: getQuery(),
      },
      () => {
        this.getData();
      }
    );
  }

  getData = () => {
    this.props.dispatch.select({
      api: "singleNav",
      data: {
        channel: this.state.params.channel,
      },
      node: "single",
    });
  };

  render() {
    const { module } = this.props;

    return (
      <div>
        <Card
          title={`${this.state.params.name}单页`}
          extra={
            checkButtonAuth(add) ? (
              <Button
                type="primary"
                onClick={() =>
                  this.props.history.push(
                    `/admin/navigation/single/detail?channel=${this.state.params.channel}`
                  )
                }
                authorized={checkButtonAuth(add)}
              >
                新增单页
              </Button>
            ) : (
              ""
            )
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
                      <span
                        disabled={!checkButtonAuth(edit)}
                        onClick={() =>
                          this.props.history.push(
                            `/admin/navigation/single/detail?channel=${this.state.params.channel}&id=${item.id}`
                          )
                        }
                      >
                        编辑
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
