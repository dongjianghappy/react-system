import React from "react";
import { Card, Space } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Confirm, WeCheckbox, WeModal, Quick, NavGroup } from "@/components";
import { Operatinavbar } from "@/common";
import EditDetail from "./components/editDetail";
import AddDetail from "./components/addDetail";

const { add, del, edit } = authorized.partner;
const { art: coding, cate: catcoing } = codings.tag;

class Index extends React.Component {
  state = {
    type: "0",
    name: "",
  };
  getData = () => {
    const mod = window.location.pathname.split("/")[3] || "";
    let type = 0;
    switch (mod) {
      case "core":
        this.setState({
          type: "1",
          name: "核心",
        });
        type = 1;
        break;
      case "target":
        this.setState({
          type: "2",
          name: "目标",
        });
        type = 2;
        break;
      default:
        this.setState({
          type: "0",
          name: "长尾",
        });
        type = 0;
    }

    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        type,
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
      <>
        <Card>
          <div className="nav-title">
            {`${this.state.name}词`}
            <span className="right">
              {
                <WeModal.modalForm
                  name="新增标签"
                  icon="add"
                  data={{ coding, type: this.state.type }}
                  renderList={this.getData}
                  authorized={checkButtonAuth(add)}
                  {...this.props}
                >
                  <AddDetail />
                </WeModal.modalForm>
              }
            </span>
          </div>
          <table width="100%" className="table-striped table-hover col-left-3">
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-1">id</td>
              <td className="col-md-8">名称</td>
              <td className="col-md-1">属性</td>
              <td className="col-md-1">操作</td>
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
                  <td>{item.id}</td>
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
                    <WeModal.modalForm
                      name={this.state.name}
                      isText={true}
                      action="edit"
                      data={{ id: item.id, coding }}
                      renderList={this.getData}
                      authorized={checkButtonAuth(edit)}
                      {...this.props}
                    >
                      <EditDetail />
                    </WeModal.modalForm>
                  </td>
                  <td>
                    <Space>
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
      </>
    );
  }
}

export default connect(
  (state) => ({
    common: state.common,
    module: state.tag,
  }),
  dispatchToProps
)(Index);
