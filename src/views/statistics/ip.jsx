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

      componentDidMount(){
        this.props.select({
          api: "todayIp",
          data: {
            date: "today",
            page: 0,
            pagesize: 25,
          },
          node: "ipList"            
        })
      }

      callback = (key) =>{
        if(key === '1'){
          this.props.select({
            api: "todayIp",
            data: {
              date: "today",
              page: 0,
              pagesize: 25,
            },
            node: "ipList"            
          })
        }else if(key === '2'){
          this.props.select({
            api: "todayIp",
            data: {
              page: 0,
              pagesize: 25,
            },
            node: "ipList"            
          })
        }else if(key === '3'){
          this.props.select({
              data: {
                page: 0,
                pagesize: 25,
                coding: "S0000"
              },
              node: "ipList"            
          })
        }else if(key === '4'){
          this.props.select({
              data: {
                page: 0,
                pagesize: 25,
                coding: "S0003"
              },
              node: "ipList"            
          })
        }
      }



    render() {
        const {ipList} = this.props.module

        return (
            <>
            <Tu />
            <Card>
            
            <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
              >
              <TabPane tab="今日IP" key="1">
                <IpTodapy type="1" data={ipList} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="IP占比" key="2">
                <IpTodapy type="1" data={ipList} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="IP明细" key="3">
                <IpDetail type="1" data={ipList} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="IP库" key="4">
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