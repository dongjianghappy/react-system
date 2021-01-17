import React from "react";
import { Card, Tabs } from "antd";
import { connect, dispatchToProps } from "@/utils";
import IpTodapy from "./components/ip-today";
import IpDetail from "./components/ip-detail";
import IpLib from "./components/ip-lib";

const { TabPane } = Tabs;

class Ip extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch.select({
      api: "todayIp",
      data: {
        date: "today",
        page: 0,
        pagesize: 25,
      },
      node: "ip.percentage",
    });
  };

  detail = (data) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "S0000",
      },
      node: "ip.detailList",
    });
  };

  ipList = (data) => {
    this.props.dispatch.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "S0003",
      },
      node: "ip.list",
    });
  };

  callback = (key) => {
    if (key === "1") {
      this.getData();
    } else if (key === "2") {
      this.getData();
    } else if (key === "3") {
      this.detail();
    } else if (key === "4") {
      this.ipList();
    }
  };

  render() {
    const {
      ip: { percentage, detailList, list },
    } = this.props.module;

    return (
      <>
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="今日IP" key="1">
              <IpTodapy
                dataSource={percentage}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="IP占比" key="2">
              <IpTodapy
                dataSource={percentage}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="IP明细" key="3">
              <IpDetail
                dataSource={detailList}
                {...this.props}
                getData={() => this.getData(1)}
              />
            </TabPane>
            <TabPane tab="IP库" key="4">
              <IpLib
                dataSource={list}
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
)(Ip);
