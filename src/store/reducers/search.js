import { GET_SEARCH } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'

const initState = {
    module: "search",
    list: [],
    keyword: [],
    config: []
}



const reducers = (state = initState, action) => {

    const aa = commonReducers(state, action)
    
    if(aa){
        return aa
    }

    let newState = ""

    switch(action.type){
        case GET_SEARCH :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.value.list
            newState.total = action.value.total || 0
            newState.page = action.value.pages || 1


            return newState
            break

        default :
            return state

    }
}

export default reducers