import React from "react";
import { Space, Card, Button } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";

import { Status, Confirm, WeDrawer, WeCheckbox, Quick } from "@/components";
import { ButtonGroup } from "@/common";

const { add, del, edit } = authorized.navigation.main;
const { main: coding } = codings.navigation;

class Index extends React.Component {
  state = {
    params: {},
    expand: false,
    form: {},
    dataSource: [],
  };

  // 单个展开收缩
  expand = (item) => {
    item.isShow = !item.isShow;
    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  // 所有展开收缩
  expandAll = () => {
    const loop = (data) => {
      return data.map((item) => {
        item.isShow = !this.state.expand;
        if (item.list) {
          loop(item.list);
        }
      });
    };
    loop(this.state.dataSource);
    this.setState({
      dataSource: this.state.dataSource,
      expand: !this.state.expand,
    });
  };

  // 移动
  onMove = (direction, obj, moveItem, index) => {
    const newData = obj;
    const item = newData.splice(
      index + (direction === "up" ? -1 : index === obj.length - 1 ? -index : 1),
      1,
      moveItem
    )[0];
    newData[index] = item;
    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  // 保存
  save = () => {
    const loop = (data) => {
      return data.map((item, index) => {
        item.sort = 1 + index;
        this.state.form[`id_${item.id}`] = item.sort;
        if (item.list) {
          loop(item.list);
        }
      });
    };

    loop(this.state.dataSource);
    this.setState({
      dataSource: this.state.dataSource,
    });

    const aas = {
      data: this.state.form,
    };
  };

  render() {
    const {
      module: { main, checkedList },
    } = this.props;

    const { params } = this.state;
    return (
      <div>
        <Card>
          <Button onClick={() => this.expandAll()}>全部展开</Button>
          <Button onClick={() => this.save()}>保存</Button>
          <table width="100%" className="table-striped col-left-34">
            {this.state.dataSource &&
              this.state.dataSource.map((item, index) => (
                <>
                  <tr className="tr-list">
                    <td>{item.sort}</td>
                    <td>
                      <i
                        class="iconfont iconslide icon-anonymous-iconfont"
                        onClick={() => this.expand(item)}
                      ></i>
                      {item.name}
                    </td>

                    <td>
                      <Button
                        onClick={() =>
                          this.onMove("up", this.state.dataSource, item, index)
                        }
                        className="deg180"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="iconfont icon-arrow1 moving"></i>
                      </Button>
                      <Button
                        onClick={() =>
                          this.onMove(
                            "down",
                            this.state.dataSource,
                            item,
                            index
                          )
                        }
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="iconfont icon-arrow1"></i>
                      </Button>
                    </td>
                  </tr>
                  {item.list && item.isShow ? (
                    <tr className="tr-slide">
                      <td colspan="8" className="p0">
                        {item.list.map((aaa, i) => (
                          <table
                            width="100%"
                            className="table-bordered table-condensed table-hover color-cate"
                          >
                            <tr className="tr-list">
                              <td className="col-md-1">{aaa.sort}</td>
                              <td className="col-md-4">
                                <i
                                  class="iconfont iconslide icon-anonymous-iconfont"
                                  onClick={() => this.expand(aaa)}
                                ></i>
                                <i class="cate-two"></i>
                                {aaa.name}
                              </td>

                              <td className="col-md-2">
                                <Button
                                  onClick={() =>
                                    this.onMove("up", item.list, aaa, i)
                                  }
                                  className="deg180"
                                  style={{ width: 60, height: 60 }}
                                >
                                  <i className="iconfont icon-arrow1 moving"></i>
                                </Button>
                                <Button
                                  onClick={() =>
                                    this.onMove("down", item.list, aaa, i)
                                  }
                                  style={{ width: 60, height: 60 }}
                                >
                                  <i className="iconfont icon-arrow1"></i>
                                </Button>
                              </td>
                            </tr>
                            {aaa.list && aaa.isShow ? (
                              <tr className="tr-slide">
                                <td colspan="8" className="p0">
                                  {aaa.list.map((bbb, j) => (
                                    <table
                                      width="100%"
                                      className="table-bordered table-condensed table-hover color-cate"
                                    >
                                      <tr className="tr-list">
                                        <td className="col-md-1">{bbb.sort}</td>
                                        <td className="col-md-4">
                                          <i class="cate-two"></i>
                                          {bbb.name}
                                        </td>

                                        <td className="col-md-2">
                                          <Button
                                            onClick={() =>
                                              this.onMove(
                                                "up",
                                                aaa.list,
                                                bbb,
                                                j
                                              )
                                            }
                                            className="deg180"
                                            style={{ width: 60, height: 60 }}
                                          >
                                            <i className="iconfont icon-arrow1 moving"></i>
                                          </Button>
                                          <Button
                                            onClick={() =>
                                              this.onMove(
                                                "down",
                                                aaa.list,
                                                bbb,
                                                j
                                              )
                                            }
                                            style={{ width: 60, height: 60 }}
                                          >
                                            <i className="iconfont icon-arrow1"></i>
                                          </Button>
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
