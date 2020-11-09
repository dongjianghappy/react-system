import React from 'react'
import { Card, Tabs } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import Tu from './components/statistics'
import IpTodapy from './components/ip-today'
import IpDetail from './components/ip-detail'
import IpLib from './components/ip-lib'

const { TabPane } = Tabs;

class Ip extends React.Component{

    getData = (data) => {
        this.props.select({
          data: {
            page: 0,
            pagesize: 25,
            coding: "P0003",
            ...data
          },
          node: "ipList"            
      })
      }
  
      componentDidMount(){
        this.getData({
          method : 0,
          apply_checked : 1
        })
      }

    render() {
        const {ipList} = this.props.module

        return (
            <>
            <Tu />
            <Card>
            
            <Tabs 
                defaultActiveKey="1"  
                // onChange={this.callback}
                // tabBarExtraContent={
                //   <Space>
                //   <R_drawer.drawerForm title="新增导航" name="新增友情链接" coding="P0003" renderList={this.getData} {...this.props} >
                //     <Article />
                //   </R_drawer.drawerForm>
                // </Space>
                // }
              >
              <TabPane tab="今日IP" key="1">
                <IpTodapy type="1" data={ipList} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="IP明细" key="2">
                <IpDetail type="1" data={ipList} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="IP库" key="3">
                <IpLib type="1" data={ipList} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
            </Tabs>
            </Card>
            </>
        )
    }
}

const stateToProops = (state) => {
    debugger
    return {
      module: state.statistics
    }
  }
  
  export default connect(stateToProops, dispatchToProps)(Ip)