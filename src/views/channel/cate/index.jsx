import React from "react";
import { Card, Space, Button, Checkbox, Switch, Popover, message } from "antd";
import {
  connect,
  withRouter,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  channel,
} from "@/utils";

import {
  Status,
  WeCheckbox,
  WeDrawer,
  Confirm,
  Quick,
  WeModal,
} from "@/components";
import { ButtonGroup } from "@/common";
import Detail from "./components/detail";

const { add, del, edit } = authorized.announcement;

class Channel extends React.Component {
  state = {
    coding: {},
  };
  getData = () => {
    this.props.dispatch.select({
      api: "cateList",
      data: {
        coding: this.state.coding.cate,
      },
      node: `${this.props.channel.module}.cateList`,
    });
  };

  componentDidMount() {
    this.setState(
      {
        coding: codings[this.props.channel.module],
      },
      () => {
        this.getData();
      }
    );
  }

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

    loop(this.props.module.cateList);

    this.props.dispatch
      .fetch({
        api: "updateSave",
        data: {
          coding: this.state.coding.cate,
          data: JSON.stringify(form),
        },
      })
      .then((res) => {
        message.info("编辑成功");
      });
  };

  render() {
    const {
      channel,
      module: { cateList },
      initialValues,
      dispatch: { onMove, expand, expandAll },
    } = this.props;

    debugger;
    const { cate: coding } = this.state.coding;

    return (
      <>
        <Card>
          <div className="nav-title">
            分类管理
            <span className="right">
              <Space>
                <Button
                  onClick={() =>
                    expandAll({ node: `${channel.module}.cateList` })
                  }
                >
                  <i
                    className={`iconfont icon-${
                      this.props.expand ? "jianhao" : "anonymous-iconfont"
                    } iconslide`}
                  />
                  {this.props.expand ? "展开" : "收缩"}
                </Button>
                <Button onClick={() => this.save()}>
                  <i className="iconfont icon-mail" />
                  保存
                </Button>
                {checkButtonAuth("add") ? (
                  <>
                    <WeDrawer.Form
                      name="新增分类"
                      icon="add"
                      type="defult"
                      data={{ coding }}
                      initialValues={initialValues}
                      renderList={this.getData}
                      authorized={checkButtonAuth("add")}
                      {...this.props}
                    >
                      <Detail />
                    </WeDrawer.Form>
                  </>
                ) : (
                  ""
                )}
              </Space>
            </span>
          </div>
          <table
            width="100%"
            className="table-striped table-condensed table-hover category table-cate col-left-2"
          >
            <tr class="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-6">分类名称</td>

              <td className="col-md-1">状态</td>
              <td className="col-md-2">移动</td>
              <td className="col-md-2">操作</td>
            </tr>
            {cateList &&
              cateList.map((item, index) => (
                <>
                  <tr class="slide-nav tr-list">
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
                        onClick={() =>
                          expand({
                            node: `${channel.module}.cateList`,
                            id: item.id,
                          })
                        }
                      ></i>
                      <Quick
                        title={item.name}
                        data={{ id: item.id, field: "name", coding }}
                        authorized={checkButtonAuth("edit")}
                        width="50%"
                        {...this.props}
                      />
                      <WeDrawer.Form
                        isText={true}
                        title="新增页面"
                        icon="add"
                        data={{ fid: item.id }}
                        initialValues={initialValues}
                        action="add"
                        coding={coding}
                        renderList={this.getData}
                        {...this.props}
                      >
                        <Detail />
                      </WeDrawer.Form>
                    </td>
                    <td>
                      <Status
                        data={{ item, field: "status", coding }}
                        authorized={checkButtonAuth("edit")}
                        {...this.props}
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() =>
                          onMove({
                            direction: "up",
                            obj: cateList,
                            moveItem: item,
                            index,
                            node: `${channel.module}.cateList`,
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
                            obj: cateList,
                            moveItem: item,
                            index,
                            node: `${channel.module}.cateList`,
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
                          authorized={checkButtonAuth("edit")}
                          {...this.props}
                        >
                          <Detail />
                        </WeDrawer.Form>
                        <span className="line">|</span>
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
                        <span className="line">|</span>
                        <Popover
                          placement="bottom"
                          trigger="click"
                          content={
                            <div>
                              <p>
                                <span
                                  disabled={!checkButtonAuth(edit)}
                                  onClick={() =>
                                    this.props.history.push(
                                      `/admin/${channel.module}/detail?fid=${item.id}`
                                    )
                                  }
                                >
                                  添加
                                </span>
                              </p>
                              <p>
                                <span
                                  disabled={!checkButtonAuth(edit)}
                                  onClick={() =>
                                    this.props.history.push(
                                      `/admin/${channel.module}/list?&fid=${item.id}`
                                    )
                                  }
                                >
                                  列表
                                </span>
                              </p>
                              <p>
                                <WeModal.Cate
                                  data={{
                                    id: item.id,
                                    coding,
                                    catcoing: coding,
                                  }}
                                  renderList={this.getData}
                                  {...this.props}
                                >
                                  移动
                                </WeModal.Cate>
                              </p>
                            </div>
                          }
                        >
                          更多
                        </Popover>
                      </Space>
                    </td>
                  </tr>
                  {item.list && item.isshow ? (
                    <tr className="slide-nav-list">
                      <td colspan="8" className="p0">
                        {item.list &&
                          item.list.map((aaa, i) => (
                            <table
                              width="100%"
                              className="table-bordered table-condensed table-hover category color-cate"
                            >
                              <tr class="tr-list">
                                <td className="col-md-1">
                                  <WeCheckbox
                                    data={{ id: aaa.id }}
                                    {...this.props}
                                  ></WeCheckbox>
                                </td>
                                <td className="col-md-6">
                                  <i class="cate-two"></i>
                                  <i
                                    className={`iconfont icon-${
                                      aaa.isshow
                                        ? "jianhao"
                                        : "anonymous-iconfont"
                                    } iconslide`}
                                    onClick={() =>
                                      expand({
                                        node: `${channel.module}.cateList`,
                                        id: aaa.id,
                                      })
                                    }
                                  ></i>
                                  <Quick
                                    title={aaa.name}
                                    data={{
                                      id: aaa.id,
                                      field: "name",
                                      coding,
                                    }}
                                    authorized={checkButtonAuth("edit")}
                                    width="50%"
                                    {...this.props}
                                  />
                                  <WeDrawer.Form
                                    isText={true}
                                    title="新增页面"
                                    icon="add"
                                    data={{ fid: aaa.id }}
                                    initialValues={initialValues}
                                    action="add"
                                    coding={coding}
                                    renderList={this.getData}
                                    {...this.props}
                                  >
                                    <Detail />
                                  </WeDrawer.Form>
                                </td>
                                <td class="col-md-1">
                                  <Status
                                    data={{
                                      item: aaa,
                                      field: "status",
                                      coding,
                                    }}
                                    authorized={checkButtonAuth("edit")}
                                    {...this.props}
                                  />
                                </td>
                                <td class="col-md-2">
                                  <Button
                                    onClick={() =>
                                      onMove({
                                        direction: "up",
                                        obj: item.list,
                                        moveItem: aaa,
                                        index: i,
                                        parantId: item.id,
                                        node: `${channel.module}.cateList`,
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
                                        obj: item.list,
                                        parantId: item.id,
                                        moveItem: aaa,
                                        index: i,
                                        node: `${channel.module}.cateList`,
                                      })
                                    }
                                    className="move-button"
                                  >
                                    <i className="iconfont icon-arrow1"></i>
                                  </Button>
                                </td>
                                <td class="col-md-2">
                                  <Space>
                                    <WeDrawer.Form
                                      isText={true}
                                      name="编辑"
                                      title="编辑分类"
                                      id={aaa.id}
                                      initialValues={initialValues}
                                      renderList={this.getData}
                                      coding={coding}
                                      {...this.props}
                                    >
                                      <Detail />
                                    </WeDrawer.Form>
                                    <span className="line">|</span>
                                    <Confirm
                                      name="删除"
                                      type="text"
                                      config={React.$modalEnum.delete.cate}
                                      coding={coding}
                                      data={{ id: aaa.id }}
                                      fetch={this.props.fetch}
                                      api="delete"
                                      renderList={this.getData}
                                    />

                                    <span className="line">|</span>
                                    <Popover
                                      placement="bottom"
                                      trigger="click"
                                      content={
                                        <div>
                                          <p>
                                            <span
                                              disabled={!checkButtonAuth(edit)}
                                              onClick={() =>
                                                this.props.history.push(
                                                  `/admin/${channel.module}/detail?fid=${aaa.id}`
                                                )
                                              }
                                            >
                                              添加
                                            </span>
                                          </p>
                                          <p>
                                            <span
                                              disabled={!checkButtonAuth(edit)}
                                              onClick={() =>
                                                this.props.history.push(
                                                  `/admin/${channel.module}/list?&fid=${aaa.id}`
                                                )
                                              }
                                            >
                                              列表
                                            </span>
                                          </p>
                                          <p>
                                            <WeModal.Cate
                                              data={{
                                                id: aaa.id,
                                                coding,
                                                catcoing: coding,
                                              }}
                                              renderList={this.getData}
                                              {...this.props}
                                            >
                                              移动
                                            </WeModal.Cate>
                                          </p>
                                        </div>
                                      }
                                    >
                                      更多
                                    </Popover>
                                  </Space>
                                </td>
                              </tr>
                              {aaa.list && aaa.isshow ? (
                                <tr className="slide-nav-list">
                                  <td colspan="8" className="p0">
                                    {aaa.list &&
                                      aaa.list.map((bbb, j) => (
                                        <table
                                          width="100%"
                                          className="table-bordered table-condensed table-hover category  color-cate"
                                        >
                                          <tr className="tr-list">
                                            <td className="col-md-1">
                                              <WeCheckbox
                                                data={{ id: bbb.id }}
                                                {...this.props}
                                              ></WeCheckbox>
                                            </td>
                                            <td className="col-md-6">
                                              <i class="cate-tree"></i>
                                              <i class="cate-two"></i>
                                              <Quick
                                                title={bbb.name}
                                                data={{
                                                  id: bbb.id,
                                                  field: "name",
                                                  coding,
                                                }}
                                                authorized={checkButtonAuth(
                                                  "edit"
                                                )}
                                                width="50%"
                                                {...this.props}
                                              />
                                            </td>
                                            <td className="col-md-1">
                                              <Status
                                                data={{
                                                  item: bbb,
                                                  field: "status",
                                                  coding,
                                                }}
                                                authorized={checkButtonAuth(
                                                  "edit"
                                                )}
                                                {...this.props}
                                              />
                                            </td>
                                            <td class="col-md-2">
                                              <Button
                                                onClick={() =>
                                                  onMove({
                                                    direction: "up",
                                                    obj: aaa.list,
                                                    moveItem: bbb,
                                                    parantId: aaa.id,
                                                    index: j,
                                                    node: `${channel.module}.cateList`,
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
                                                    obj: aaa.list,
                                                    moveItem: bbb,
                                                    parantId: aaa.id,
                                                    index: j,
                                                    node: `${channel.module}.cateList`,
                                                  })
                                                }
                                                className="move-button"
                                              >
                                                <i className="iconfont icon-arrow1"></i>
                                              </Button>
                                            </td>
                                            <td className="col-md-2">
                                              <Space>
                                                <WeDrawer.Form
                                                  isText={true}
                                                  name="编辑"
                                                  title="编辑分类"
                                                  id={bbb.id}
                                                  initialValues={initialValues}
                                                  renderList={this.getData}
                                                  coding={coding}
                                                  {...this.props}
                                                >
                                                  <Detail />
                                                </WeDrawer.Form>
                                                <span className="line">|</span>
                                                <Confirm
                                                  name="删除"
                                                  type="text"
                                                  config={
                                                    React.$modalEnum.delete.cate
                                                  }
                                                  coding={coding}
                                                  data={{ id: bbb.id }}
                                                  fetch={this.props.fetch}
                                                  api="delete"
                                                  renderList={this.getData}
                                                />
                                                <span className="line">|</span>
                                                <Popover
                                                  placement="bottom"
                                                  trigger="click"
                                                  content={
                                                    <div>
                                                      <p>
                                                        <span
                                                          disabled={
                                                            !checkButtonAuth(
                                                              edit
                                                            )
                                                          }
                                                          onClick={() =>
                                                            this.props.history.push(
                                                              `/admin/${channel.module}/detail?fid=${bbb.id}`
                                                            )
                                                          }
                                                        >
                                                          添加
                                                        </span>
                                                      </p>
                                                      <p>
                                                        <span
                                                          disabled={
                                                            !checkButtonAuth(
                                                              edit
                                                            )
                                                          }
                                                          onClick={() =>
                                                            this.props.history.push(
                                                              `/admin/${channel.module}/list?&fid=${bbb.id}`
                                                            )
                                                          }
                                                        >
                                                          列表
                                                        </span>
                                                      </p>
                                                      <p>
                                                        <WeModal.Cate
                                                          data={{
                                                            id: bbb.id,
                                                            coding,
                                                            catcoing: coding,
                                                          }}
                                                          renderList={
                                                            this.getData
                                                          }
                                                          {...this.props}
                                                        >
                                                          移动
                                                        </WeModal.Cate>
                                                      </p>
                                                    </div>
                                                  }
                                                >
                                                  更多
                                                </Popover>
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
    module: state.channel[channel().module],
    channel: channel(),
    expand: state.channel.expand,
  }),
  dispatchToProps
)(Channel);
