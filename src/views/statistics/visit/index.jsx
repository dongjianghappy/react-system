import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps } from "@/utils";
import View from "./components/view";
import VisitToday from "./components/visit-today";
import VisitDetail from "./components/visit-detail";

const { TabPane } = Tabs;

class Index extends React.Component {
  componentDidMount() {
    this.getData({
      api: "visitStatistics",
    });
  }

  getData = (data) => {
    this.props.dispatch.select({
      ...data,
      data: {
        page: 0,
        pagesize: 25,
      },
      node: "visit.view",
    });
  };

  today = (data) => {
    this.props.dispatch.select({
      api: "interviewedTodayStatistics",
      data: {
        page: 0,
        pagesize: 25,
        coding: "S0000",
      },
      node: "visit.todayList",
    });
  };

  detail = (data) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "S0000",
      },
      node: "visit.detailList",
    });
  };

  callback = (key) => {
    if (key === "1") {
      this.getData({
        api: "visitStatistics",
      });
    } else if (key === "2") {
      this.today();
    } else if (key === "3") {
      this.detail();
    }
  };

  render() {
    const { view, todayList, detailList } = this.props.module.visit;

    return (
      <>
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="访问概况量" key="1">
              <View
                type="1"
                dataSource={view}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="今日受访" key="2">
              <VisitToday
                type="1"
                dataSource={todayList}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="受访明细" key="3">
              <VisitDetail
                type="1"
                dataSource={detailList}
                {...this.props}
                getData={() => this.getData(1)}
              />
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
)(Index);
