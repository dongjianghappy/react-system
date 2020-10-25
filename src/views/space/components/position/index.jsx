import React from 'react';
import { Layout, Menu, Row, Col, Breadcrumb, Card } from 'antd';
import { withRouter, Link } from 'react-router-dom'

class Position extends React.Component{


    render(){
        return(
            <div style={{ background: ' #fff', padding: '12px', height: '45px', lineHeight: '25px !important'}}>
                <Row>
                    <Col span={12}>
                        当前目录：upload (共有16文件)
                    </Col>
                    <Col span={12}>
                    <Row justify="end">
                        <Col span={2}>
                            返回
                        </Col>
                        <Col span={3}>
                            新建目录
                        </Col>
                        <Col span={3}>
                            上传图片
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default withRouter(Position)
