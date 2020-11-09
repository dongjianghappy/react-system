import React from 'react'
import { Card, Button, Row, Col, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import Detail from './components/detail'
import { Link } from 'react-router-dom';
import {
    R_drawer
  } from '../../components/index.js'

const { Meta } = Card;

class Slideshow extends React.Component{

    getData = () => {
        this.props.select({
            api: "slideshow"          
        })
    }

    componentDidMount(){
        this.getData()
    }

    render() {

        const {list} = this.props.module

        return (
            <Card 
                title="幻灯片管理"
                extra={
                <R_drawer.drawerForm title="新增幻灯片" name="新增幻灯片" coding="T0000" {...this.props} >
                    <Detail />
                </R_drawer.drawerForm>
                }
            >

                <Row>
                   
                    {
                        list && list.map((item, i) => (
                            <Col span={6}>
                            <Card
                  style={{ margin: 10, padding: 10 }}
                  cover={
                    <Link to={{pathname:'/admin/slideshow/list', state:{fid: item.id}}}>
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    </Link>
                  }
                >
                  {item.name}
                  <R_drawer.drawerForm type="text" title="编辑友链" name="编辑" id={item.id} coding="T0000" renderList={this.getData} {...this.props} >
                        <Detail />
                      </R_drawer.drawerForm>                  
                </Card>
                            </Col>
                        ))
                    }
                   
                </Row>
            </Card>
        )
    }
}

const stateToProops = (state) => {
    return {
        module: state.slideshow
    }
  }

export default connect(stateToProops, dispatchToProps)(Slideshow)
