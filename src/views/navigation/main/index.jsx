import React from "react";
import { Space, Card } from "antd";
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

  render() {
    const {
      module: { main, checkedList },
    } = this.props;

    const { params } = this.state;
    return (
      <div>
        <Card
          title={`${params.name}导航`}
          extra={
            checkButtonAuth(add) && (
              <WeDrawer.Form
                name="新增导航"
                icon="add"
                data={{ channel_id: params.channel, coding }}
                renderList={this.getData}
                authorized={checkButtonAuth(add)}
                {...this.props}
              >
                <Detail />
              </WeDrawer.Form>
            )
          }
        >
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
                      <Quick
                        title={item.sort}
                        data={{ id: item.id, field: "sort", coding }}
                        authorized={checkButtonAuth(edit)}
                        {...this.props}
                      />
                    </td>
                    <td>
                      <i class="iconfont iconslide icon-anonymous-iconfont"></i>
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
                      <Space>
                        <WeDrawer.Form
                          title="编辑合作伙伴"
                          name="编辑"
                          isText={true}
                          action="edit"
                          data={{ id: item.id, coding }}
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
                                  data={{ id: item.id, field: "sort", coding }}
                                  authorized={checkButtonAuth(edit)}
                                  {...this.props}
                                />
                              </td>
                              <td className="col-md-4">
                                <i class="cate-two"></i>
                                <i class="iconfont icon-jianhao iconslide"></i>
                                <Quick
                                  title={item.name}
                                  data={{ id: item.id, field: "name", coding }}
                                  authorized={checkButtonAuth(edit)}
                                  {...this.props}
                                  width="69%"
                                />
                              </td>
                              <td className="col-md-3">
                                <Quick
                                  title={item.url}
                                  data={{ id: item.id, field: "url", coding }}
                                  authorized={checkButtonAuth(edit)}
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
                                    data={{
                                      id: item.id,
                                      coding,
                                      channel: params.channel,
                                    }}
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
