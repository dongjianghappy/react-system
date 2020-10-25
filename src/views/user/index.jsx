import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export default class Default extends React.Component{

    render(){
        return (
            <div>
                <div className="site-statistic-demo-card">
                    <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="管理员"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                        <Link to="/admin/user/list">点击查看</Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="普通"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                        <Link to="/admin/user/list">点击查看</Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="VIP"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                        <Link to="/admin/user/list">点击查看</Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="超级VIP"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                        <Link to="/admin/user/list">点击查看</Link>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}