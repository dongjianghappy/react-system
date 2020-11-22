import React from "react";
import { Card, Space, Tabs } from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
} from "@/utils";
import { WeDrawer } from "@/components";
import { Option } from "@/common";
import List from "./components/list";
import Article from "./components/article";

const { add, del, edit } = authorized.link;
const { link: coding } = codings;

const { TabPane } = Tabs;

class Links extends React.Component {
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
    {
      name: "状态",
      field: "status",
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

  getData = (data) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding,
        ...data,
      },
    });
  };

  componentDidMount() {
    this.getData({
      method: 0,
      apply_checked: 1,
    });
  }

  callback = (key) => {
    if (key === "1") {
      this.getData({
        method: 0,
        apply_checked: 1,
      });
    } else if (key === "2") {
      this.getData({
        method: 1,
        apply_checked: 1,
      });
    } else if (key === "3") {
      this.getData({
        apply_checked: 0,
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <Option option={this.option} data={{ coding }} {...this.props} />
        </div>

        <Card>
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}
            tabBarExtraContent={
              checkButtonAuth("add") ? (
                <WeDrawer.Form
                  name="新增友情链接"
                  icon="add"
                  data={{ coding }}
                  renderList={this.getData}
                  authorized={checkButtonAuth("add")}
                  {...this.props}
                >
                  <Article />
                </WeDrawer.Form>
              ) : (
                ""
              )
            }
          >
            <TabPane tab="出售友链" key="1">
              <List
                listType="1"
                data={{ coding, apply_checked: 1, method: 0 }}
                getData={() => this.getData(1)}
                authorized={this.authorized}
                {...this.props}
              />
            </TabPane>
            <TabPane tab="交换友链" key="2">
              <List
                listType="2"
                data={{ coding, apply_checked: 1, method: 1 }}
                getData={() => this.getData(1)}
                authorized={this.authorized}
                {...this.props}
              />
            </TabPane>
            <TabPane tab="申请友链" key="3">
              <List
                listType="3"
                data={{ coding, apply_checked: 0 }}
                getData={() => this.getData(1)}
                authorized={this.authorized}
                {...this.props}
              />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.link,
  }),
  dispatchToProps
)(Links);
