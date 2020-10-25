import React from 'react';
import { Layout, Menu, Row, Col, Breadcrumb, Card } from 'antd';
import { withRouter, Link } from 'react-router-dom'

class Position extends React.Component{


    render(){
        return(
            <div style={{ background: ' #fff', padding: '12px', height: '45px', lineHeight: '25px !important'}}>
                <Row>
                    <Col span={12}>
                        
                    </Col>
                    <Col span={12}>
                    
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default withRouter(Position)
