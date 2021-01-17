import React from "react";
import { List, Statistic, Card, Row, Col, Tooltip } from "antd";
import { connect, dispatchToProps, codings, channel } from "@/utils";
import { Chart } from "@/components";

class Default extends React.Component {
  state = {
    dataSource: {},
  };

  componentDidMount() {
    const coding = codings[this.props.channel.module];

    this.props.dispatch.select({
      api: "channelDefault",
      data: {
        coding: coding.art,
      },
      node: `${this.props.channel.module}.chart`,
    });
  }

  render() {
    const {
      list,
      visit = 0,
      praise = 0,
      comment = 0,
      download = 0,
      hours,
    } = this.props.module.chart;
    debugger;
    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="累计访问"
                value={`${visit}人次`}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="累计点赞"
                value={`${praise}人次`}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="累计评论"
                value={`${comment}人次`}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="累计下载"
                value={`${download}人次`}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>

          <Col span={18} style={{ marginTop: 15 }}>
            <Card title="今日与昨日访问量">
              <Chart.Line
                title={["今日浏览量", "昨日浏览量"]}
                height={285}
                label={(hours && hours.label) || []}
                dataSource={[
                  (hours && hours.value.today_visit) || [],
                  (hours && hours.value.yestday_visit) || [],
                ]}
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
    module: state.channel[channel().module],
    channel: channel(),
  }),
  dispatchToProps
)(Default);
