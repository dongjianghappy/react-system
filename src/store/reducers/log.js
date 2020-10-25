import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'

const initState = {
    module: "log",
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