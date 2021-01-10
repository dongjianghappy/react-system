import React from "react";
import { Card, Tabs } from "antd";
import { connect } from "react-redux";
import dispatchToProps from "../../store/dispatch";
import Statistics from "./components/statistics";
import DomainList from "./components/domain-list";
import DomainDetail from "./components/domain-detail";

const { TabPane } = Tabs;

class Domain extends React.Component {
  componentDidMount() {
    this.props.select({
      api: "domainPercentage",
      data: {
        date: "today",
        page: 0,
        pagesize: 25,
      },
      node: "domain",
    });
  }

  callback = (key) => {
    if (key === "1") {
      this.props.select({
        api: "domainPercentage",
        data: {
          date: "today",
          page: 0,
          pagesize: 25,
        },
        node: "domain",
      });
    } else if (key === "2") {
      this.props.select({
        api: "domainPercentage",
        data: {
          page: 0,
          pagesize: 25,
        },
        node: "domain",
      });
    } else if (key === "3") {
      this.props.select({
        data: {
          page: 0,
          pagesize: 25,
          coding: "S0001",
        },
        node: "domain",
      });
    }
  };

  render() {
    const { domain } = this.props.module;
    return (
      <>
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="今日域名占比" key="1">
              <DomainList
                type="1"
                data={domain}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="来路域名占比" key="2">
              <DomainList
                type="1"
                data={domain}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="来路域名明细" key="3">
              <DomainDetail
                type="1"
                data={domain}
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

const stateToProops = (state) => {
  return {
    module: state.statistics,
  };
};

export default connect(stateToProops, dispatchToProps)(Domain);
