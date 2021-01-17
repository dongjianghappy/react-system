import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps } from "@/utils";
import Chart from "./components/chart";
import VisitList from "./components/visit-list";
import InterviewedToday from "./components/interviewed-today";
import InterviewedDetail from "./components/interviewed-detail";

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
      node: "visit",
    });
  };

  callback = (key) => {
    if (key === "1") {
      this.getData({
        api: "visitStatistics",
      });
    } else if (key === "2") {
      this.getData({
        api: "interviewedTodayStatistics",
      });
    } else if (key === "3") {
      this.getData({
        method: 0,
        apply_checked: 1,
      });
    }
  };

  render() {
    const { visit } = this.props.module;

    return (
      <>
        <Chart />
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="访问概况量" key="1">
              <VisitList
                type="1"
                data={visit}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="今日受访" key="2">
              <InterviewedToday
                type="1"
                data={visit}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="受访明细" key="3">
              <InterviewedDetail
                type="1"
                data={visit}
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
