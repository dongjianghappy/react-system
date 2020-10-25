import React from 'react'
import { List, Typography, Avatar, Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import dispatchToProps from '../../../store/dispatch'
import ChartistGraph from 'react-chartist';

class Default extends React.Component{

    componentDidMount(){
        this.props.getDefault({
            fid: this.props.match.params.fid
        })
    }

    

    render(){

        
        const { user, order, article, tech } = this.props.initData.list
        var data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2],
              [1, 2, 4, 8, 9, -2, -1, -4, -6, -2]
            ],
            colors: ['#0f0', '#00f']
          };
       
          var options = {
            width: '100%',
            height: '400',
            high: 10,
            low: -10,
            // axisX: {
            //   labelInterpolationFnc: function(value, index) {
            //     return index % 2 === 0 ? value : null;
            //   }
            // }
          };

          var type = 'Line'

        return (
            <div>
                <div className="site-statistic-demo-card">
                    <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                        <Row>
                        <Col span={8}>
                        
                        <Statistic
                            title="用户总量"
                            value={user}
                            valueStyle={{ color: '#3f8600' }}
                        />
                        
                        </Col>
                        <Col span={8}>
                        
                        <Statistic
                            title="昨日注册"
                            value={user}
                            valueStyle={{ color: '#3f8600' }}
                        />
                        
                        </Col>
                        <Col span={8}>
                        
                        <Statistic
                            title="今日注册"
                            value={user}
                            valueStyle={{ color: '#3f8600' }}
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

                        <Row>
                        <Col span={12}>
                        
                        <Statistic
                            title="订单总量"
                            value={order && order.linkAll}
                            valueStyle={{ color: '#cf1322' }}
                        />
                        </Col>
                        <Col span={12}>
                        
                        <Statistic
                            title="在线订单"
                            value={order && order.linkOnline}
                            valueStyle={{ color: '#3f8600' }}
                        />
                        
                        </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col span={18} style={{marginTop: 15}}>
                        <Card style={{height: 450}}>
                        <ChartistGraph data={data} options={options} type={type}/>
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
                        <Card
                        style={{height: 350}}>
                        {
                            article && article.map((item, index) => (
                                <List.Item>
                                【{item.parent}】{item.title}
                              </List.Item>
                            
                            ))
                        }
                        </Card>
                    </Col>

                    <Col span={12} style={{marginTop: 15}}>
                        <Card 
                        style={{height: 350}}>
                        {
                            tech && tech.map((item, index) => (
                                <List.Item>
                                【{item.parent}】{item.title}
                              </List.Item>
                            
                            ))
                        }
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const stateToProops = (state) => {
    return {
        initData: state.initData
    }
  }

export default connect(stateToProops, dispatchToProps)(Default)