import React from "react";
import { Card, Space, Button, Checkbox, Switch, message } from "antd";
import {
  connect,
  withRouter,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Status, WeCheckbox, WeDrawer, Confirm, Quick } from "@/components";
import { ButtonGroup } from "@/common";
import Detail from "./components/detail";

const { add, del, edit } = authorized.announcement;

class Index extends React.Component {
  state = {
    coding: {},
  };

  componentDidMount() {
    this.setState(
      {
        coding: codings.knowledge,
      },
      () => {
        this.getData();
      }
    );
  }

  getData = () => {
    this.props.dispatch.select({
      api: "cateList",
      data: {
        page: 0,
        pagesize: 15,
        coding: this.state.coding.cate,
      },
      node: "cateList",
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
      module: { cateList },
      dispatch: { onMove, expand, expandAll },
    } = this.props;
    const { cate: coding } = this.state.coding;
    return (
      <>
        <Card
          title="知识分类"
          extra={
            checkButtonAuth("add") && (
              <>
                <WeDrawer.Form
                  name="新增分类"
                  icon="add"
                  data={{ coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth("add")}
                  {...this.props}
                >
                  <Detail />
                </WeDrawer.Form>
                <Button onClick={() => expandAll({ node: "cateList" })}>
                  全部展开
                </Button>
                <Button onClick={() => this.save()}>保存</Button>
              </>
            )
          }
        >
          <table
            width="100%"
            className="table-striped table-condensed table-hover category table-cate col-left-2"
          >
            <tr className="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-6">知识分类</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">移动</td>
              <td className="col-md-2">操作</td>
            </tr>
            {cateList &&
              cateList.map((item, index) => (
                <>
                  <tr className="slide-nav tr-list">
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
                          expand({ node: "cateList", id: item.id })
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
                            node: "cateList",
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
                            obj: cateList,
                            moveItem: item,
                            index,
                            node: "cateList",
                          })
                        }
                        className="move-button"
                      >
                        <i className="iconfont icon-arrow1"></i>
                      </Button>
                    </td>
                    <td>
                      <Space>
                        <span
                          disabled={!checkButtonAuth(edit)}
                          onClick={() =>
                            this.props.history.push(
                              `/admin/knowledge/detail?fid=${item.id}`
                            )
                          }
                        >
                          添加
                        </span>
                        <span className="line">|</span>
                        <span
                          disabled={!checkButtonAuth(edit)}
                          onClick={() =>
                            this.props.history.push(
                              `/admin/knowledge/list?&fid=${item.id}`
                            )
                          }
                        >
                          列表
                        </span>
                        <span className="line">|</span>
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
                                  <i className="cate-two"></i>
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
                                </td>
                                <td className="col-md-1">
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
                                        node: "cateList",
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
                                        node: "cateList",
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
                                      id={aaa.id}
                                      renderList={this.getData}
                                      coding={coding}
                                      {...this.props}
                                    >
                                      <Detail />
                                    </WeDrawer.Form>
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
    module: state.knowledge,
  }),
  dispatchToProps
)(Index);
