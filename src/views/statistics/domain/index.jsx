import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps } from "@/utils";
import DomainList from "./components/domain-list";
import DomainDetail from "./components/domain-detail";

const { TabPane } = Tabs;

class Domain extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = (data) => {
    this.props.dispatch.select({
      api: "domainPercentage",
      data: {
        date: "today",
        page: 0,
        pagesize: 25,
        ...data,
      },
      node: "domain.percentage",
    });
  };

  detail = (data) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "S0001",
      },
      node: "domain.detailList",
    });
  };

  callback = (key) => {
    if (key === "1") {
      this.getData();
    } else if (key === "2") {
      this.getData();
    } else if (key === "3") {
      this.detail();
    }
  };

  render() {
    const {
      domain: { percentage, detailList },
    } = this.props.module;
    return (
      <>
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="今日域名占比" key="1">
              <DomainList type="1" dataSource={percentage} />
            </TabPane>
            <TabPane tab="来路域名占比" key="2">
              <DomainList type="1" dataSource={percentage} />
            </TabPane>
            <TabPane tab="来路域名明细" key="3">
              <DomainDetail type="1" dataSource={detailList} />
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
)(Domain);
