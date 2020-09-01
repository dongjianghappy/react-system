import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import ChartistGraph from 'react-chartist';

export default class Default extends React.Component{

    render(){

        var data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
          };
       
          var options = {
            high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          };

          var type = 'Line'

        return (
            <div>
                <div className="site-statistic-demo-card">
                    <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="用户"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="业绩"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
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
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="订单"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                        </Card>
                    </Col>
                    <Col span={18} style={{marginTop: 15}}>
                        <Card style={{height: 450}}>
                        <ChartistGraph data={data} options={options} type={type} />
                        </Card>
                    </Col>
                    <Col span={6} style={{marginTop: 15}}>
                        <Card style={{height:250}}>
                        <Statistic
                            title="天气"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                        </Card>

                        <Card style={{marginTop: 15, height:185}}>
                        <Statistic
                            title="访客"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                        </Card>
                    </Col>

                    <Col span={12} style={{marginTop: 15}}>
                        <Card style={{height: 350}}>
                        
                        </Card>
                    </Col>

                    <Col span={12} style={{marginTop: 15}}>
                        <Card style={{height: 350}}>
                        
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}