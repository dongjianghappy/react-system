import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import {
  Status,
  Confirm,
  WeCheckbox,
  WeModal,
  Quick,
  NavGroup,
} from "@/components";
import { Operatinavbar } from "@/common";
import Detail from "./article";

const { add, del, edit } = authorized.partner;
const { cate: coding } = codings.tag;
const { Nav } = NavGroup;

class Index extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 100,
        coding,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { module } = this.props;

    return (
      <div>
        <NavGroup
          extra={
            checkButtonAuth("add") ? (
              <WeModal.modalForm
                name="新增标签类型"
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
          <Nav name="标签类型" icon="111" value="1">
            <Card>
              <table
                width="100%"
                className="table-striped table-hover col-left-3"
              >
                <tr className="th">
                  <td className="col-md-1">选择</td>
                  <td className="col-md-1">顺序</td>
                  <td className="col-md-7">名称</td>
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
                          <WeModal.modalForm
                            name="编辑标签类型"
                            action="edit"
                            data={{ id: item.id, coding }}
                            renderList={this.getData}
                            authorized={checkButtonAuth(edit)}
                            {...this.props}
                          >
                            <Detail />
                          </WeModal.modalForm>
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
            </Card>
          </Nav>
        </NavGroup>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.tag,
  }),
  dispatchToProps
)(Index);
