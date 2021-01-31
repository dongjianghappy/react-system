import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'

const initState = {
    module: "link",
    initialValues: {
        status: "1",
        display: "0",
        source: "0",
        method: "0",
        sell: "1",
    },
    option: [
        {
          name: "来源",
          field: "source",
          list: [
            {
              value: "",
              name: "全部",
            }
          ],
        },
        {
          name: "显示",
          field: "display",
          list: [
            {
              value: "",
              name: "全部",
            },
            {
              value: "0",
              name: "首页",
            },
            {
              value: "1",
              name: "全站",
            },
          ],
        },
      ],
    ...initListState
}



const reducers = (state = initState, action) => {

    const aa = commonReducers(state, action)
    
    if(aa){
        return aa
    }

    let newState = ""

    switch(action.type){

        default :
            return state

    }
}

export default reducers