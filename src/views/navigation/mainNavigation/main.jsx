import React from "react";
import { Space, Card, Table, Checkbox, Button, Input } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { Link } from "react-router-dom";
import {
  Status,
  Confirm,
  WeDrawer,
  WeCheckbox,
  Dialog,
  Quick,
} from "@/components/index.js";
import { ButtonGroup, Option } from "@/common";
import NavigationDrawer from "./components/navigationDrawer";
import Detail from "./components/detail";

const { add, del, edit } = authorized.navigation.main;
const { main: coding } = codings.navigation;

class Index extends React.Component {
  state = {
    option: [
      {
        name: "导航类型: ",
        field: "channel",
        list: [],
      },
    ],
  };

  getData = async () => {
    const res = await this.props.dispatch.fetch({
      api: "static",
    });

    this.setState(() => {
      return (this.state.option[0].list = res.result);
    });

    let module = window.location.pathname.split("/")[2];

    let channel = "0";
    if (module === "tech") {
      channel = "1";
    } else if (module === "article") {
      channel = "2";
    } else if (module === "source") {
      channel = "3";
    }

    this.props.dispatch.select({
      api: "navigation",
      data: {
        channel: channel,
      },
      node: "main",
    });
  };

  componentDidMount() {
    this.getData();
  }

  handleClick = (data) => {
    this.props[data.popup || data.global.data.fn](data);
  };

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
          title="导航列表"
          extra={
            checkButtonAuth("add") ? (
              <WeDrawer.Form
                name="新增导航"
                icon="add"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth("add")}
                {...this.props}
              >
                <Detail />
              </WeDrawer.Form>
            ) : (
              ""
            )
          }
        >
          <div id="content">
            <table width="100%" className="table-striped col-left-34">
              <tr className="th">
                <td className="col-md-1">选择</td>
                <td className="col-md-1">顺序</td>
                <td className="col-md-4">
                  <span className="icon-cate"></span>名称
                </td>
                <td className="col-md-3">连接</td>
                <td className="col-md-1">状态</td>
                <td className="col-md-2">操作</td>
              </tr>
              {module.main &&
                module.main.map((item, index) => (
                  <>
                    <tr className="tr-list">
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
                        <i class="iconfont iconslide icon-anonymous-iconfont"></i>
                        <Quick
                          title={item.name}
                          data={{ id: item.id, field: "name", coding }}
                          authorized={checkButtonAuth("edit")}
                          {...this.props}
                          width="80%"
                        />
                        {checkButtonAuth("add") ? (
                          <WeDrawer.Form
                            isText={true}
                            icon="add"
                            data={{ coding, fid: item.id }}
                            renderList={this.getData}
                            authorized={checkButtonAuth("add")}
                            {...this.props}
                          >
                            <Detail />
                          </WeDrawer.Form>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>
                        <Quick
                          title={item.url}
                          data={{ id: item.id, field: "url", coding }}
                          authorized={checkButtonAuth("edit")}
                          {...this.props}
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
                            title="编辑合作伙伴"
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
                    {item.list ? (
                      <tr className="tr-slide">
                        <td colspan="8" className="p0">
                          {item.list.map((item, i) => (
                            <table
                              width="100%"
                              className="table-bordered table-condensed table-hover color-cate"
                            >
                              <tr className="tr-list">
                                <td className="col-md-1">
                                  <WeCheckbox
                                    data={{ id: item.id }}
                                    {...this.props}
                                  ></WeCheckbox>
                                </td>
                                <td className="col-md-1">
                                  <Quick
                                    title={item.sort}
                                    data={{
                                      id: item.id,
                                      field: "sort",
                                      coding,
                                    }}
                                    authorized={checkButtonAuth("edit")}
                                    {...this.props}
                                  />
                                </td>
                                <td className="col-md-4">
                                  <i class="cate-two"></i>
                                  <i class="iconfont icon-jianhao iconslide"></i>
                                  <Quick
                                    title={item.name}
                                    data={{
                                      id: item.id,
                                      field: "name",
                                      coding,
                                    }}
                                    authorized={checkButtonAuth("edit")}
                                    {...this.props}
                                    width="69%"
                                  />
                                </td>
                                <td className="col-md-3">
                                  <Quick
                                    title={item.url}
                                    data={{ id: item.id, field: "url", coding }}
                                    authorized={checkButtonAuth("edit")}
                                    {...this.props}
                                  />
                                </td>
                                <td className="col-md-1">
                                  <Status
                                    data={{ item, field: "status", coding }}
                                    authorized={checkButtonAuth("edit")}
                                    {...this.props}
                                  />
                                </td>
                                <td className="col-md-2">
                                  <Space>
                                    <WeDrawer.Form
                                      title="编辑合作伙伴"
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
                            </table>
                          ))}
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                  </>
                ))}
            </table>
          </div>
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
)(Index);
