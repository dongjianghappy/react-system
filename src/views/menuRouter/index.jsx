import React from "react";
import { Card, Space, Button, Popover, message } from "antd";
import { connect, dispatchToProps, checkButtonAuth, codings } from "@/utils";
import { WeDrawer, Quick, WeModal } from "@/components";

import Article from "./components/detail";
import Buttons from "./components/button-detail";

const { menuRouter: coding } = codings;
class menuRouter extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "routerSelect",
      data: {
        page: 0,
        pagesize: 10,
        type: 0,
        coding,
      },
    });
  };

  tree = (data, level) => {
    switch (level) {
      case 1:
        return (
          <>
            <i class="cate-two"></i>
            <i
              className={`iconfont icon-${
                data.isshow ? "jianhao" : "anonymous-iconfont"
              } iconslide`}
              onClick={() =>
                this.props.dispatch.expand({ node: "list", id: data.id })
              }
            ></i>
            <Quick
              title={data.name}
              data={{ id: data.id, name: "sort", coding }}
              authorized={checkButtonAuth("edit")}
              {...this.props}
              width="69%"
            />
          </>
        );
      case 2:
        return (
          <>
            <i class="cate-tree"></i>
            <i class="cate-two"></i>

            <i
              className={`iconfont icon-${
                data.isshow ? "jianhao" : "anonymous-iconfont"
              } iconslide`}
              onClick={() =>
                this.props.dispatch.expand({ node: "list", id: data.id })
              }
            ></i>
            <Quick
              title={data.name}
              data={{ id: data.id, field: "name", coding }}
              authorized={checkButtonAuth("edit")}
              {...this.props}
              width="58%"
            />
          </>
        );
      case 3:
        return (
          <>
            <i class="cate-tree"></i>
            <i class="cate-two"></i>
            <i class="cate-two"></i>
            <Quick
              title={data.name}
              data={{ id: data.id, field: "name", coding }}
              authorized={checkButtonAuth("edit")}
              {...this.props}
              width="53%"
            />
          </>
        );

      default:
    }
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

    loop(this.props.module.list);

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

  renderList = (data, level) => (
    <>
      <input type="hidden" value={level++} />

      {data.list.map((ss, i) => (
        <table
          width="100%"
          className="table-bordered table-condensed table-hover table-cate color-cate"
        >
          <tr className="tr-list">
            <td className="col-md-4">{this.tree(ss, level)}</td>
            <td className="col-md-3">
              <Quick
                title={ss.path}
                data={{ id: ss.id, field: "path", coding }}
                authorized={checkButtonAuth("edit")}
                {...this.props}
              />
            </td>
            <td className="col-md-2">
              <Button
                onClick={() =>
                  this.props.dispatch.onMove({
                    direction: "up",
                    obj: data.list,
                    moveItem: ss,
                    index: i,
                    parantId: data.id,
                  })
                }
                className="deg180 move-button"
                style={{ width: 60, height: 60 }}
              >
                <i className="iconfont icon-arrow1 moving"></i>
              </Button>
              <Button
                onClick={() =>
                  this.props.dispatch.onMove({
                    direction: "down",
                    obj: data.list,
                    moveItem: ss,
                    index: i,
                    parantId: data.id,
                  })
                }
                className="move-button"
              >
                <i className="iconfont icon-arrow1"></i>
              </Button>
            </td>
            <td className="col-md-3">
              <Space>
                <WeDrawer.show
                  name="按钮权限"
                  action="edit"
                  data={{ fid: ss.id, type: "1", coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth("edit")}
                  api="routerSelect"
                  {...this.props}
                >
                  <Buttons />
                </WeDrawer.show>

                <WeDrawer.Form
                  name="新增页面"
                  data={{ fid: ss.id, coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth("edit")}
                  {...this.props}
                >
                  <Article />
                </WeDrawer.Form>
                <WeDrawer.Form
                  name="编辑"
                  action="edit"
                  data={{ id: ss.id, coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth("edit")}
                  {...this.props}
                >
                  <Article />
                </WeDrawer.Form>

                <Popover
                  placement="bottom"
                  trigger="click"
                  content={
                    <div>
                      <p>删除</p>
                      <p>
                        <WeModal.Cate
                          data={{ id: ss.id, coding, catcoing: coding }}
                          renderList={this.getData}
                          {...this.props}
                        >
                          移动
                        </WeModal.Cate>
                      </p>
                    </div>
                  }
                >
                  <Button type="primary">更多</Button>
                </Popover>
              </Space>
            </td>
          </tr>
          {ss.list && ss.isshow ? (
            <tr className="tr-slide">
              <td colspan="8" className="p0">
                {this.renderList(ss, level)}
              </td>
            </tr>
          ) : (
            ""
          )}
        </table>
      ))}
    </>
  );

  render() {
    const {
      module: { list },
      dispatch: { onMove, expand, expandAll },
    } = this.props;

    return (
      <Card>
        <div style={{ marginBottom: 15 }}>
          <Space>
            <Button type="primary">路由菜单</Button>
            <WeDrawer.Form
              name="新增页面"
              action="add"
              dispatch={this.props.dispatch}
              data={{ coding: "P0015" }}
              renderList={this.getData}
            >
              <Article />
            </WeDrawer.Form>
            <Button onClick={() => expandAll({})}>全部展开</Button>
            <Button onClick={() => this.save()}>保存</Button>
          </Space>
        </div>

        <table width="100%" className="table-striped col-left-12">
          <tr className="th">
            <td className="col-md-4">
              <span className="icon-cate"></span>页面名称
            </td>
            <td className="col-md-3">路径</td>
            <td className="col-md-2">移动</td>
            <td className="col-md-3">操作</td>
          </tr>
          {list &&
            list.map((item, index) => (
              <>
                <tr className="tr-list">
                  <td>
                    <i
                      className={`iconfont icon-${
                        item.isshow ? "jianhao" : "anonymous-iconfont"
                      } iconslide`}
                      onClick={() => expand({ node: "list", id: item.id })}
                    ></i>
                    <Quick
                      title={item.name}
                      data={{ id: item.id, field: "name", coding }}
                      authorized={checkButtonAuth("edit")}
                      {...this.props}
                      width="80%"
                    />
                  </td>
                  <td>
                    <Quick
                      title={item.path}
                      data={{ id: item.id, field: "path", coding }}
                      authorized={checkButtonAuth("edit")}
                      {...this.props}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() =>
                        onMove({
                          direction: "up",
                          obj: list,
                          moveItem: item,
                          index,
                        })
                      }
                      className="deg180 move-button"
                    >
                      <i className="iconfont icon-arrow1 moving"></i>
                    </Button>
                    <Button
                      onClick={() =>
                        onMove({
                          direction: "down",
                          obj: list,
                          moveItem: item,
                          index,
                        })
                      }
                      className="move-button"
                    >
                      <i className="iconfont icon-arrow1"></i>
                    </Button>
                  </td>
                  <td>
                    <Space>
                      <WeDrawer.show
                        name="按钮权限"
                        data={{ fid: item.id, type: "1", coding }}
                        renderList={this.getData}
                        authorized={checkButtonAuth("edit")}
                        api="routerSelect"
                        {...this.props}
                      >
                        <Buttons />
                      </WeDrawer.show>

                      <WeDrawer.Form
                        name="新增页面"
                        data={{ fid: item.id, coding }}
                        renderList={this.getData}
                        authorized={checkButtonAuth("edit")}
                        {...this.props}
                      >
                        <Article />
                      </WeDrawer.Form>
                      <WeDrawer.Form
                        name="编辑"
                        action="edit"
                        data={{ id: item.id, coding }}
                        renderList={this.getData}
                        authorized={checkButtonAuth("edit")}
                        {...this.props}
                      >
                        <Article />
                      </WeDrawer.Form>

                      <Popover
                        placement="bottom"
                        trigger="click"
                        content={
                          <div>
                            <p>删除</p>
                            <p>
                              <WeModal.Cate
                                data={{ id: item.id, coding, catcoing: coding }}
                                renderList={this.getData}
                                {...this.props}
                              >
                                移动
                              </WeModal.Cate>
                            </p>
                          </div>
                        }
                      >
                        <Button type="primary">更多</Button>
                      </Popover>
                    </Space>
                  </td>
                </tr>
                {item.list && item.isshow ? (
                  <tr className="tr-slide">
                    <td colspan="8" className="p0">
                      {this.renderList(item, 0)}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            ))}
        </table>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    module: state.menuRouter,
  }),
  dispatchToProps
)(menuRouter);
