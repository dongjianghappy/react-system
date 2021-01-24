import React from "react";
import { List, Typography, Avatar, Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { connect, dispatchToProps } from "@/utils";
import { Chart } from "@/components";

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch.getDefault({
      fid: this.props.match.params.fid,
    });
  }
  // 5、公告通知添加置顶字段

  // 6、搜索模块
  // 7、模板管理
  render() {
    const {
      user = 0,
      register,
      yes_register = 0,
      today_register = 0,
      order,
      article,
      tech,
      hours = [],
      week,
    } = this.props.module.list;
    const visit = [
      {
        value: "today",
        name: "今日",
      },
      {
        value: "yesterday",
        name: "昨日",
      },
      {
        value: "week",
        name: "本周",
      },
      {
        value: "month",
        name: "本月",
      },
      {
        value: "max",
        name: "历史最高",
      },
      {
        value: "all",
        name: "历史累计",
      },
    ];
    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Row className="align_center">
                <Col span={8}>
                  <Statistic
                    title="用户总量"
                    value={user.total}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="昨日注册"
                    value={user.yesterday}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="今日注册"
                    value={user.today}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="业绩"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="消息"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row>
                <Col span={12}>
                  <Statistic
                    title="订单总量"
                    value={order && order.linkAll}
                    valueStyle={{ color: "#cf1322" }}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="在线订单"
                    value={order && order.linkOnline}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={18} style={{ marginTop: 15 }}>
            <Card title="今日搜索概况">
              <Chart.Line
                height={387}
                label={(week && hours.label) || []}
                dataSource={[
                  (week && hours.value.today_visit) || [],
                  (week && hours.value.today_online) || [],
                  (week && hours.value.yestday_visit) || [],
                  (week && hours.value.yestday_online) || [],
                ]}
              />
            </Card>
          </Col>
          <Col span={6} style={{ marginTop: 15 }}>
            <Card title="热搜榜" style={{ height: 500 }}></Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    module: state.initData,
  }),
  dispatchToProps
)(Index);
