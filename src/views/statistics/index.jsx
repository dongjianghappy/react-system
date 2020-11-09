import React from 'react'
import { Card, Tabs } from 'antd'
import { connect } from 'react-redux'
import dispatchToProps from '../../store/dispatch'
import Tu from './components/statistics'
import VisitList from './components/visit-list'
import InterviewedToday from './components/interviewed-today'
import InterviewedDetail from './components/interviewed-detail'

const { TabPane } = Tabs;

class Index extends React.Component{

    getData = (data) => {
        this.props.select({
          ...data,
          data: {
            page: 0,
            pagesize: 25,
          },
          node: "visit"            
      })
      }
  
      componentDidMount(){
        this.getData({
          api: "visitStatistics"
        })
      }

      callback = (key) =>{
        if(key === '1'){
          this.getData({
            api: "visitStatistics"
          })
        }else if(key === '2'){
          this.getData({
            api: "interviewedTodayStatistics"
          })
        }else if(key === '3'){
          this.getData({
            method : 0,
            apply_checked : 1
          })
        }

      }

    render() {
        const { visit } = this.props.module

        return (
            <>
            <Tu />
            <Card>
            
            <Tabs 
                defaultActiveKey="1"  
                onChange={this.callback}
                // tabBarExtraContent={
                //   <Space>
                //   <R_drawer.drawerForm title="新增导航" name="新增友情链接" coding="P0003" renderList={this.getData} {...this.props} >
                //     <Article />
                //   </R_drawer.drawerForm>
                // </Space>
                // }
              >
              <TabPane tab="访问概况量" key="1">
                <VisitList type="1" data={visit} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="今日受访" key="2">
                <InterviewedToday type="1" data={visit} {...this.props} getData={() => this.getData(1)} />
              </TabPane>
              <TabPane tab="受访明细" key="3">
                <InterviewedDetail type="1" data={visit} {...this.props} getData={() => this.getData(1)} />
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
  
  export default connect(stateToProops, dispatchToProps)(Index)