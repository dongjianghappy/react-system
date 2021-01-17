import React from "react";
import { Card } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeDrawer, NavGroup, WePagination } from "@/components";
import { Option } from "@/common";
import List from "./components/list";
import Detail from "./components/detail";

const { add, del, edit } = authorized.link;
const { link: coding } = codings;
const { Nav } = NavGroup;

class Index extends React.Component {
  option = [
    {
      name: "来源",
      field: "source",
      list: [
        {
          value: "",
          name: "全部",
        },
        ...React.$enums.linkType,
      ],
    },
    {
      name: "显示",
      field: "display",
      list: [
        {
          value: "",
          name: "全部",
        },
        {
          value: "0",
          name: "首页",
        },
        {
          value: "1",
          name: "全站",
        },
      ],
    },
  ];

  componentDidMount() {
    this.getData({
      method: 0,
      apply_checked: 1,
    });
  }

  getData = (data) => {
    this.props.dispatch.select({
      data: {
        coding,
        page: 0,
        pagesize: 15,
        ...data,
      },
    });
  };

  callback = (key) => {
    let param = {};
    switch (key) {
      case "2":
        param = {
          method: 1,
          apply_checked: 1,
        };
        break;
      case "3":
        param = {
          apply_checked: 1,
        };
        break;
      default:
        param = {
          method: 0,
          apply_checked: 1,
        };
        break;
    }

    this.getData(param);
  };

  render() {
    const { module } = this.props.module;

    return (
      <div>
        <NavGroup
          onChange={this.callback}
          extra={
            checkButtonAuth("add") && (
              <WeDrawer.Form
                name="新增友情链接"
                data={{ coding }}
                renderList={this.getData}
                authorized={checkButtonAuth("add")}
                {...this.props}
              >
                <Detail />
              </WeDrawer.Form>
            )
          }
        >
          <Nav name="出售友链" icon="111" value="1">
            <Card className="mb15">
              <Option option={this.option} data={{ coding }} {...this.props} />
            </Card>

            <List
              listType="1"
              data={{ coding, apply_checked: 1, method: 0 }}
              renderList={this.getData}
              authorized={this.authorized}
              {...this.props}
            />
          </Nav>
          <Nav name="交换友链" value="2">
            <Card className="mb15">
              <List
                listType="2"
                data={{ coding, apply_checked: 1, method: 1 }}
                getData={this.getData}
                authorized={this.authorized}
                {...this.props}
              />
            </Card>
          </Nav>
          <Nav name="申请友链" value="3">
            <Card className="mb15">
              <List
                listType="3"
                data={{ coding, apply_checked: 0 }}
                getData={this.getData}
                authorized={this.authorized}
                {...this.props}
              />
            </Card>
          </Nav>
        </NavGroup>
        {/* <Operatinavbar
          button={["all", "delete", "open", "close"]}
          data={{ list: module.checkedList, coding }}
          renderList={this.getData}
          checkButtonAuth={checkButtonAuth}
          authorized={authorized.partner}
          {...this.props}
        />
        <WePagination module={module} renderList={this.getData} /> */}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.link,
  }),
  dispatchToProps
)(Index);
