import React from "react";
import {
  List,
  Typography,
  Avatar,
  Statistic,
  Card,
  Row,
  Col,
  Tooltip,
} from "antd";
import {
  connect,
  dispatchToProps,
  checkButtonAuth,
  authorized,
  codings,
  getQuery,
} from "@/utils";

import ChartistGraph from "react-chartist";

class Default extends React.Component {
  state = {
    dataSource: {},
  };
  data = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2],
      [1, 2, 4, 8, 9, -2, -1, 0, 2, 5],
      [1, 2, 4, 1, 2, -2, -1, 0, 2, 5],
    ],
    colors: ["#0f0", "#3f8600", "#000"],
  };

  options = {
    width: "100%",
    height: "400",
    high: 10,
    low: -10,
    // axisX: {
    //   labelInterpolationFnc: function(value, index) {
    //     return index % 2 === 0 ? value : null;
    //   }
    // }
  };

  componentDidMount() {
    const mod = window.location.pathname.split("/")[2] || "";
    const coding = codings[mod];

    this.props.dispatch
      .fetch({
        api: "channelDefault",
        data: {
          coding: coding.art,
        },
      })
      .then((res) => {
        this.setState({
          dataSource: res.result,
        });
      });
  }

  type = "Line";

  render() {
    const {
      list,
      visit = 0,
      praise = 0,
      comment = 0,
      download = 0,
    } = this.state.dataSource;

    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="今日访问"
                value={`${visit}人次`}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="今日点赞"
                value={`${praise}人次`}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="今日评论"
                value={`${comment}人次`}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="今日下载"
                value={`${download}人次`}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>

          <Col span={18} style={{ marginTop: 15 }}>
            <Card style={{ height: 450 }}>
              <ChartistGraph
                data={this.data}
                options={this.options}
                type={this.type}
              />
            </Card>
          </Col>
          <Col span={6} style={{ marginTop: 15 }}>
            <Card style={{ height: 450 }} title="最近更新">
              {list &&
                list.map((item, index) => (
                  <List.Item key={item.id} className="nowrap">
                    <Tooltip title={`【${item.parent}】${item.title}`}>
                      【{item.parent}】{item.title}
                    </Tooltip>
                  </List.Item>
                ))}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.channel,
  }),
  dispatchToProps
)(Default);
