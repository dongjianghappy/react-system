import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps } from "@/utils";
import EngineList from "./components/engine-list";
import EngineDetail from "./components/engine-detail";

const { TabPane } = Tabs;

class Engine extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = (data) => {
    this.props.dispatch.select({
      api: "enginePercentage",
      data: {
        page: 0,
        pagesize: 25,
        ...data,
      },
      node: "engine.percentage",
    });
  };

  detail = (data) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "S0005",
      },
      node: "engine.detailList",
    });
  };

  callback = (key) => {
    if (key === "1") {
      this.getData();
    } else if (key === "2") {
      this.detail();
    }
  };

  render() {
    const {
      engine: { percentage, detailList },
    } = this.props.module;

    return (
      <>
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="搜索占比" key="1">
              <h3>今日占比</h3>
              <EngineList
                type="1"
                dataSource={percentage.today}
                {...this.props}
              />
              <h3>所有占比</h3>
              <EngineList
                type="1"
                dataSource={percentage.all}
                {...this.props}
              />
            </TabPane>
            <TabPane tab="搜索明细" key="2">
              <EngineDetail type="1" dataSource={detailList} {...this.props} />
            </TabPane>
          </Tabs>
        </Card>
      </>
    );
  }
}
export default connect(
  (state) => ({
    module: state.statistics,
  }),
  dispatchToProps
)(Engine);
