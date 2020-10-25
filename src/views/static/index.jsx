import React from 'react'
import { Card, Button, Row, Col, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import { Dialog } from '../../components'
import SlideshowFrom from './components/slideshowFrom'
import { Link } from 'react-router-dom';
import Item from './components/item'

const { Meta } = Card;

class Static extends React.Component{

    componentDidMount(){
        this.props.select({
            api: "navList",
            node: "channel"            
        })
    }

    updatehandle = () => {
        this.props.getUpdateStatic({
            action: "index",
            model: "index"
        })
    }

    render() {

        const { channel } = this.props.module
        return (

                <Row>
                    {
                        channel && channel.map((item, i) => (
                            <Col span={8} style={{padding: 0}}>
                                <Item {...item} update={this.updatehandle} />
                            </Col>
                        ))
                    }
                </Row>

        )
    }
}

const stateToProops = (state) => {
    return {
        module: state.navigation
    }
  }

export default connect(stateToProops, dispatchToProps)(Static)
