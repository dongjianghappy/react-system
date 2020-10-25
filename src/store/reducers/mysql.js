import { GET_MYSQL } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'

const initState = {
    module: "mysql",
    ...initListState
}



const reducers = (state = initState, action) => {

    const aa = commonReducers(state, action)
    
    if(aa){
        return aa
    }

    let newState = ""

    switch(action.type){
        case GET_MYSQL :
            debugger
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.value.list
            return newState
            break

        default :
            return state

    }
}

export default reducers