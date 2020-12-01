import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { WeCheckbox, Quick, NavGroup, WeDrawer } from "@/components";

const { Nav } = NavGroup;
const { add, del, edit } = authorized.partner;
const { label: coding } = codings;

class Label extends React.Component {
  componentDidMount() {
    this.props.dispatch.select({
      api: "getFlag",
      data: {
        coding,
        channel_id: 3,
        type: "art",
      },
      node: "label",
    });
  }

  render() {
    const { label } = this.props.module;

    return (
      <div>
        <NavGroup
          extra={
            checkButtonAuth("add") ? (
              <WeDrawer.Form
                name="新增分类"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth("add")}
                {...this.props}
              ></WeDrawer.Form>
            ) : (
              ""
            )
          }
        >
          <Nav name="导航标签" value="1">
            <Card>
              <table
                width="100%"
                className="table-striped table-hover artlist artlist"
              >
                <tr class="th">
                  <td className="col-md-1">选择</td>
                  <td className="col-md-1">顺序</td>
                  <td className="col-md-3">标签名称</td>
                  <td className="col-md-3">标签值</td>
                  <td className="col-md-1">tag</td>
                  <td className="col-md-1">icon标签</td>
                  <td className="col-md-2"></td>
                </tr>
                {label &&
                  label.map((item, index) => (
                    <tr class="tr-list">
                      <td>
                        <WeCheckbox
                          data={{ id: item.id }}
                          {...this.props}
                        ></WeCheckbox>
                      </td>
                      <td>
                        <Quick
                          id={item.id}
                          title={item.sort}
                          field="sort"
                          coding="O0002"
                          changeData={this.props.changeData}
                        />
                      </td>
                      <td>{item.remark}</td>
                      <td>
                        <Quick
                          id={item.id}
                          title={item.value}
                          field="value"
                          coding="O0002"
                          changeData={this.props.changeData}
                        />
                      </td>
                      <td>
                        <Quick
                          id={item.id}
                          title={item.tag}
                          field="tag"
                          coding="O0002"
                          changeData={this.props.changeData}
                        />
                      </td>
                      <td>
                        <Quick
                          id={item.id}
                          title={item.tag}
                          field="tag"
                          coding="O0002"
                          changeData={this.props.changeData}
                        />
                      </td>
                      <td>
                        <Quick
                          id={item.id}
                          title={item.color}
                          field="color"
                          width="50%"
                          coding="O0002"
                          changeData={this.props.changeData}
                        />
                      </td>
                    </tr>
                  ))}
              </table>
            </Card>
          </Nav>
          <Nav name="分类标签" value="2"></Nav>
          <Nav name="文档标签" value="3"></Nav>
        </NavGroup>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(Label);
