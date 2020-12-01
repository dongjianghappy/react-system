import React from "react";
import { Link } from "react-router-dom";
import { Card, Form, Input } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { NavGroup } from "@/components";

import { Option } from "@/common";
import Flags from "../components/flags";
import Statistics from "./components/statistics";
import List from "./components/list";

const { Nav } = NavGroup;

const mod = window.location.pathname.split("/")[2] || "";

const { add } = (authorized.channel[mod] && authorized.channel[mod].art) || {
  add: "",
};

debugger;

const { art: coding, cate: catcoing } = codings[mod];

class Index extends React.Component {
  option = [
    {
      name: "属性",
      field: "flags",
      list: [],
    },
    {
      name: "状态",
      field: "checked",
      list: [
        {
          val: "",
          name: "全部",
        },
        {
          value: "1",
          name: "开启",
        },
        {
          value: "0",
          name: "关闭",
        },
      ],
    },
  ];

  getData = (params = {}) => {
    this.props.dispatch.select({
      api: "articleList",
      data: {
        coding,
        page: 0,
        pagesize: 15,
        ...params,
      },
    });
  };

  componentDidMount() {
    this.getData();
    this.props.dispatch.getFlagAction();
  }

  handleClick = (data) => {
    this.props[data.dispatch](data);
  };

  render() {
    const { module } = this.props;

    this.option[0].list = [
      {
        value: "",
        name: "全部",
      },
      ...this.props.flags,
    ];

    return (
      <div>
        <Statistics />

        <NavGroup
          extra={
            checkButtonAuth(add) ? (
              <Link
                to={{
                  pathname: "/admin/article/detail",
                  state: { coding: coding, channel_id: 3 },
                }}
              >
                新增文档
              </Link>
            ) : (
              ""
            )
          }
        >
          <Nav name="文档管理" value="1">
            <Card className="mb15">
              <Option
                api="articleList"
                option={this.option}
                select={this.props.select}
                search={{
                  show: true,
                  params: this.props.common.global.search,
                  searchField: this.props.searchField,
                  render: () => (
                    <>
                      <Form.Item name="title">
                        <Input
                          placeholder="关键词查找"
                          prefix={<i className="iconfont icon-search" />}
                          className="input-250 input-sm mr10"
                        />
                      </Form.Item>
                    </>
                  ),
                }}
                coding={coding}
              />
            </Card>
            <Card>
              <List
                type="1"
                data={module.list}
                {...this.props}
                renderList={this.getData}
              />
            </Card>
          </Nav>
          <Nav name="正在审核" value="2">
            <Card>
              <List
                type="1"
                data={module.list}
                {...this.props}
                renderList={this.getData}
              />
            </Card>
          </Nav>
          <Nav name="已退回" value="3">
            <Card>
              <List
                type="1"
                data={module.list}
                {...this.props}
                renderList={this.getData}
              />
            </Card>
          </Nav>
        </NavGroup>
      </div>
    );
  }
}

const stateToProops = (state) => {
  return {
    module: "channel",
    state,
    common: state.common,
    global: state.common.global,
    module: state.channel,
    flags: state.channel.flags,
  };
};

export default connect(stateToProops, dispatchToProps)(Index);