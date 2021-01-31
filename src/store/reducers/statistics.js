import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION,GET_DETAIL } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'

const initState = {
    module: "statistics",
    chart: [],
    visit: {
        view: [],
        todayList: [],
        detailList: []
    },
    domain: {
        percentage: [],
        detailList: []
    },
    engine: {
        percentage: [],
        detailList: []
    },
    ip: {
        percentage: [],
        detailList: [],
        list: []
    },
}



const reducers = (state = initState, action) => {
debugger
    const aa = commonReducers(state, action)
    
    if(aa){
        return aa
    }

    let newState = ""

    switch(action.type){

        // case GET_DATA_ACTION :
        //     debugger
        //     newState = JSON.parse(JSON.stringify(state))
        //     let data = []
        //     if(action.data.list === undefined){
        //         data = action.data || []
        //     }else{
        //         data = action.data.list || []
        //     }

        //     if(action.node){
        //         newState[action.node] = data
        //         newState.node = action.node
        //     }else{
        //         newState.total = action.data.total
        //         newState.page = action.data.pages
        //         newState.list = data
        //         newState.node = "list"
        //     }

            // newState[action.node] = data
            // const arr = action.node.split(".")
            // if(arr.length === 1){
            //     newState[action.node] = data
            //     // newState[state.node].list = data
            // }else{
            //     arr.map((item, index) => {
            //         if(index === arr.length-1){
            //             newState[arr[index-1]][item] = data
            //         }
            //     })
            // }
            // newState.checkedList = [] // 查询数据清空选择列表
            // return newState
            // break

        default :
            return state

    }
}

export default reducers