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
    this.props.select({
      data: {
        page: 0,
        pagesize: 25,
        coding: "P0003",
        ...data
      },
      node: "engine"            
  })
  }

  componentDidMount(){
    this.getData({
      method : 0,
      apply_checked : 1
    })
  }

    render() {

        const { engine } = this.props.module
        
        return (
            <>
                <Statistics />
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
              <TabPane tab="今日搜索" key="1">
                <EngineList type="1" data={engine} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="搜索明细" key="2">
                <EngineDetail type="1" data={engine} {...this.props} getData={() => this.getData(1)} />
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