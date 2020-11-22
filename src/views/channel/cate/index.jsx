import React from "react";
import { Card, Space, Button, Checkbox, Switch } from "antd";
import {
  connect,
  withRouter,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import {
  Status,
  WeCheckbox,
  WeDrawer,
  Confirm,
  Quick,
} from "@/components/index.js";
import { ButtonGroup } from "@/common";
import Detail from "./components/detail";
debugger;
const mod = window.location.pathname.split("/")[2] || "";
const { add, del, edit } = authorized.announcement;
const { cate: coding } = codings[mod];

class Channel extends React.Component {
  getData = () => {
    this.props.dispatch.select({
      api: "cateList",
      data: {
        coding: coding,
      },
      node: "cateList",
    });
  };

  componentDidMount() {
    this.getData();
  }

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  render() {
    const { module } = this.props;
    return (
      <>
        <Card
          title="分类管理"
          extra={
            checkButtonAuth("add") ? (
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
            ) : (
              ""
            )
          }
        >
          <table
            width="100%"
            className="table-striped table-condensed table-hover category  col-left-3"
          >
            <tr class="th">
              <td className="col-md-1">选择</td>
              <td className="col-md-1">顺序</td>
              <td className="col-md-6">分类名称</td>
              <td className="col-md-1">属性</td>
              <td className="col-md-1">状态</td>
              <td className="col-md-2">操作</td>
            </tr>
            {module.cateList &&
              module.cateList.map((item, index) => (
                <>
                  <tr class="slide-nav tr-list">
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
                      <i class="iconfont icon-jianhao iconslide"></i>
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
                    <td></td>
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
                  <tr className="slide-nav-list">
                    <td colspan="8" className="p0">
                      {item.list &&
                        item.list.map((item, i) => (
                          <table
                            width="100%"
                            className="table-bordered table-condensed table-hover category color-cate"
                          >
                            <tr class="tr-list">
                              <td className="col-md-1">
                                <WeCheckbox
                                  data={{ id: item.id }}
                                  {...this.props}
                                ></WeCheckbox>
                              </td>
                              <td className="col-md-1">
                                <Quick
                                  title={item.sort}
                                  data={{ id: item.id, field: "sort", coding }}
                                  authorized={checkButtonAuth("edit")}
                                  {...this.props}
                                />
                              </td>
                              <td className="col-md-6">
                                <i class="cate-two"></i>
                                <i class="iconfont icon-jianhao iconslide"></i>
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
                              <td class="col-md-1"></td>
                              <td class="col-md-1">
                                <Status
                                  data={{ item, field: "status", coding }}
                                  authorized={checkButtonAuth("edit")}
                                  {...this.props}
                                />
                              </td>
                              <td class="col-md-2">
                                <Space>
                                  <WeDrawer.Form
                                    isText={true}
                                    name="编辑"
                                    title="编辑分类"
                                    id={item.id}
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
                                    data={{ id: item.id }}
                                    fetch={this.props.fetch}
                                    api="delete"
                                    renderList={this.getData}
                                  />
                                </Space>
                              </td>
                            </tr>
                            <tr className="slide-nav-list">
                              <td colspan="8" className="p0">
                                {item.list &&
                                  item.list.map((item, i) => (
                                    <table
                                      width="100%"
                                      className="table-bordered table-condensed table-hover category  color-cate"
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
                                        <td className="col-md-6">
                                          <i class="cate-tree"></i>
                                          <i class="cate-two"></i>
                                          <Quick
                                            title={item.name}
                                            data={{
                                              id: item.id,
                                              field: "name",
                                              coding,
                                            }}
                                            authorized={checkButtonAuth("edit")}
                                            width="50%"
                                            {...this.props}
                                          />
                                        </td>
                                        <td className="col-md-1"></td>
                                        <td className="col-md-1">
                                          <Status
                                            data={{
                                              item,
                                              field: "status",
                                              coding,
                                            }}
                                            authorized={checkButtonAuth("edit")}
                                            {...this.props}
                                          />
                                        </td>
                                        <td className="col-md-2">
                                          <Space>
                                            <WeDrawer.Form
                                              isText={true}
                                              name="编辑"
                                              title="编辑分类"
                                              id={item.id}
                                              renderList={this.getData}
                                              coding={coding}
                                              {...this.props}
                                            >
                                              <Detail />
                                            </WeDrawer.Form>
                                            <Confirm
                                              name="删除"
                                              type="text"
                                              config={
                                                React.$modalEnum.delete.cate
                                              }
                                              coding={coding}
                                              data={{ id: item.id }}
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
                          </table>
                        ))}
                    </td>
                  </tr>
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
    module: state.channel,
  }),
  dispatchToProps
)(Channel);
