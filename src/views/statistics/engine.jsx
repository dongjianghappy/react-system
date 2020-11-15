import React from 'react'
import { Card, Tabs } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import Statistics from './components/statistics'
import EngineList from './components/engine-list'
import EngineDetail from './components/engine-detail'

const { TabPane } = Tabs;

class Engine extends React.Component{

  getData = (data) => {

  }

  componentDidMount(){
  //   this.props.select({
  //     api: "enginePercentage",
  //     data: {
  //       page: 0,
  //       pagesize: 25
  //     },
  //     node: "engine"            
  // })
  }

  callback = (key) =>{
    if(key === '1'){
    //   this.props.select({
    //     api: "enginePercentage",
    //     data: {
    //       page: 0,
    //       pagesize: 25
    //     },
    //     node: "engine"            
    // })
    }else if(key === '2'){
      this.props.select({
          data: {
            page: 0,
            pagesize: 25,
            coding: "S0005"
          },
          node: "engine"            
      })
    }
  }



    render() {

        const { engine } = this.props.module
        
        return (
            <>
                <Statistics />
                <Card>
                <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
              >
              <TabPane tab="搜索占比" key="1">
                <h3>今日占比</h3>
                <EngineList type="1" data={engine.today} {...this.props} />
                <h3>所有占比</h3>
                <EngineList type="1" data={engine.all} {...this.props} />
              </TabPane>
              <TabPane tab="搜索明细" key="2">
                <EngineDetail type="1" data={engine} {...this.props} />
              </TabPane>
            </Tabs>

                </Card>
            </>
        )
    }
}

const stateToProops = (state) => {
    return {
      module: state.statistics
    }
  }
  
  export default connect(stateToProops, dispatchToProps)(Engine)