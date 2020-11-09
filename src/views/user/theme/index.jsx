import React from 'react';
import { Card, Table, Space, Popconfirm, Button, Checkbox, Input, DatePicker, Row, Col} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Status, Dialog, Operatinavbar, Condition, R_modal } from '@/components/index.js'
import dispatchToProps from '@/store/dispatch'
import {
  R_button,
} from '@/components/index.js'
import Detail from './components/detail'

const { Search } = Input;
const { RangePicker } = DatePicker;

class UserList extends React.Component{

    getData = () => {
      this.props.select({
        api: 'theme',
        node: 'theme'           
      })
    }

    componentDidMount(){
      this.getData()
    }

    render(){
        const {theme} = this.props.module
        return(

          <>
            <Card>
            <div style={{marginBottom: 15}}>
            <Space>
              <Button type="primary">所有主题</Button>
              <R_modal.modalForm title="新增主题" name="新增主题" coding="M10001" renderList={this.getData} {...this.props} >
                <Detail />
              </R_modal.modalForm>
            </Space>
            </div>

            <Row>
            {
            theme.map((item, index) => (
              <Col span="6">
              <Card
                  style={{ margin: 10, padding: 10 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  {item.name}
                  <R_modal.modalForm title="编辑主题" type="text" name={<i className="iconfont icon-edit" />} id={item.id} coding="M10001" renderList={this.getData} {...this.props} >
                    <Detail />
                  </R_modal.modalForm>
                  
                </Card>
                </Col>
              ))
            }
            </Row>
            </Card>
          </>
        )
    }
}

const stateToProops = (state) => {
  return {
    global: state.common.global,
    state,
    module: state.user
  }
}

export default connect(stateToProops, dispatchToProps)(UserList)
