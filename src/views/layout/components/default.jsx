import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default class Default extends React.Component{

    render(){
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