import React from "react";
import { Space, Card, Button, message } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";

import { Status, Confirm, WeDrawer, WeCheckbox, Quick } from "@/components";
import { ButtonGroup } from "@/common";
import Detail from "./components/detail";

const { add, del, edit } = authorized.navigation.main;
const { main: coding } = codings.navigation;

class Index extends React.Component {
  state = {
    params: {},
  };
  componentDidMount() {
    this.setState(
      {
        params: getQuery(),
      },
      () => {
        this.getData();
      }
    );
  }

  getData = async () => {
    this.props.dispatch.select({
      api: "navigation",
      data: {
        channel: this.state.params.channel,
      },
      node: "main",
    });
  };

  // 保存
  save = () => {
    const form = [];
    const loop = (data) => {
      return data.map((item, index) => {
        item.sort = 1 + index;
        form.push({
          id: item.id,
          sort: item.sort,
          isshow: item.isshow,
        });
        if (item.list) {
          loop(item.list);
        }
      });
    };

    loop(this.props.module.main);

    this.props.dispatch
      .fetch({
        api: "updateSave",
        data: {
          coding: coding,
          data: JSON.stringify(form),
        },
      })
      .then((res) => {
        message.info("编辑成功");
      });
  };

  render() {
    const {
      module: { main, checkedList, initialValues },
      dispatch: { onMove, expand, expandAll },
    } = this.props;

    const { params } = this.state;
    return (
      <div>
        <Card>
          <div className="nav-title">
            {`${params.name}导航`}
            <span className="right">
              <Space>
                <Button onClick={() => expandAll({ node: "main" })}>
                  <i
                    className={`iconfont icon-${
                      this.props.module.expand
                        ? "jianhao"
                        : "anonymous-iconfont"
                    } iconslide`}
                  />
                  {this.props.module.expand ? "展开" : "收缩"}
                </Button>
                <Button onClick={() => this.save()}>
                  <i className="iconfont icon-mail" />
                  保存
                </Button>
                {checkButtonAuth(add) && (
                  <>
                    <WeDrawer.Form
                      name="新增导航"
                      icon="add"
                      type="defult"
                      data={{ channel_id: params.channel, coding }}
                      initialValues={initialValues}
                      renderList={this.getData}
                      authorized={checkButtonAuth(add)}
                      {...this.props}
                    >
                      <Detail />
                    </WeDrawer.Form>
                  </>
                )}
              </Space>
            </span>
          </div>
          <table width="100%" className="table-striped table-cate col-left-23">
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-4">
                <span className="icon-cate"></span>名称
              </td>
              <td className="col-md-3">连接</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">移动</td>
              <td className="col-md-1">操作</td>
            </tr>
            {main &&
              main.map((item, index) => (
                <>
                  <tr className="tr-list">
                    <td>
                      <WeCheckbox
                        data={{ id: item.id }}
                        {...this.props}
                      ></WeCheckbox>
                    </td>
                    <td>
                      <i
                        className={`iconfont icon-${
                          item.isshow ? "jianhao" : "anonymous-iconfont"
                        } iconslide`}
                        onClick={() => expand({ node: "main", id: item.id })}
                      ></i>
                      <Quick
                        title={item.name}
                        data={{ id: item.id, field: "name", coding }}
                        authorized={checkButtonAuth(edit)}
                        {...this.props}
                        width="80%"
                      />
                      {checkButtonAuth("add") && (
                        <WeDrawer.Form
                          isText={true}
                          icon="add"
                          data={{ coding, fid: item.id }}
                          initialValues={initialValues}
                          renderList={this.getData}
                          authorized={checkButtonAuth(add)}
                          {...this.props}
                        >
                          <Detail />
                        </WeDrawer.Form>
                      )}
                    </td>
                    <td>
                      <Quick
                        title={item.url}
                        data={{ id: item.id, field: "url", coding }}
                        authorized={checkButtonAuth(edit)}
                        {...this.props}
                      />
                    </td>
                    <td>
                      <Status
                        data={{ item, field: "status", coding }}
                        authorized={checkButtonAuth(edit)}
                        {...this.props}
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() =>
                          onMove({
                            direction: "up",
                            obj: main,
                            moveItem: item,
                            index,
                            node: "main",
                          })
                        }
                        className="deg180 move-button"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="iconfont icon-arrow1 moving"></i>
                      </Button>
                      <Button
                        onClick={() =>
                          onMove({
                            direction: "down",
                            obj: main,
                            moveItem: item,
                            index,
                            node: "main",
                          })
                        }
                        className="move-button"
                      >
                        <i className="iconfont icon-arrow1"></i>
                      </Button>
                    </td>
                    <td>
                      <Space>
                        <WeDrawer.Form
                          title="编辑合作伙伴"
                          name="编辑"
                          isText={true}
                          action="edit"
                          data={{ id: item.id, coding }}
                          initialValues={initialValues}
                          renderList={this.getData}
                          authorized={checkButtonAuth(edit)}
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
                          authorized={checkButtonAuth(del)}
                          {...this.props}
                        />
                      </Space>
                    </td>
                  </tr>
                  {item.list && item.isshow ? (
                    <tr className="tr-slide">
                      <td colspan="8" className="p0">
                        {item.list.map((aaa, i) => (
                          <table
                            width="100%"
                            className="table-bordered table-condensed table-hover color-cate"
                          >
                            <tr className="tr-list">
                              <td className="col-md-1">
                                <WeCheckbox
                                  data={{ id: aaa.id }}
                                  {...this.props}
                                ></WeCheckbox>
                              </td>
                              <td className="col-md-4">
                                <i class="cate-two"></i>
                                <Quick
                                  title={aaa.name}
                                  data={{ id: aaa.id, field: "name", coding }}
                                  authorized={checkButtonAuth(edit)}
                                  {...this.props}
                                  width="69%"
                                />
                              </td>
                              <td className="col-md-3">
                                <Quick
                                  title={aaa.url}
                                  data={{ id: aaa.id, field: "url", coding }}
                                  authorized={checkButtonAuth(edit)}
                                  {...this.props}
                                />
                              </td>
                              <td className="col-md-1">
                                <Status
                                  data={{ item: aaa, field: "status", coding }}
                                  authorized={checkButtonAuth("edit")}
                                  {...this.props}
                                />
                              </td>
                              <td className="col-md-2">
                                <Button
                                  onClick={() =>
                                    onMove({
                                      direction: "up",
                                      obj: item.list,
                                      moveItem: aaa,
                                      index: i,
                                      parantId: item.id,
                                      node: "main",
                                    })
                                  }
                                  className="deg180 move-button"
                                  style={{ width: 60, height: 60 }}
                                >
                                  <i className="iconfont icon-arrow1 moving"></i>
                                </Button>
                                <Button
                                  onClick={() =>
                                    onMove({
                                      direction: "down",
                                      obj: item.list,
                                      moveItem: aaa,
                                      index: i,
                                      parantId: item.id,
                                      node: "main",
                                    })
                                  }
                                  className="move-button"
                                >
                                  <i className="iconfont icon-arrow1"></i>
                                </Button>
                              </td>
                              <td className="col-md-1">
                                <Space>
                                  <WeDrawer.Form
                                    title="编辑合作伙伴"
                                    name="编辑"
                                    isText={true}
                                    action="edit"
                                    data={{
                                      id: aaa.id,
                                      coding,
                                      channel: params.channel,
                                    }}
                                    initialValues={initialValues}
                                    renderList={this.getData}
                                    authorized={checkButtonAuth(edit)}
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
                                    data={{ coding, id: aaa.id }}
                                    api="delete"
                                    renderList={this.getData}
                                    authorized={checkButtonAuth(del)}
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

          <ButtonGroup
            button={["all", "delete", "open", "close"]}
            data={{ list: checkedList, coding }}
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
