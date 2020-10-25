import { CHANNEL, NAVIGATION, SINGLE } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'





const initState = {
    module: "navigation",
    channel: [],
    navigation: [],
    single: [],
    ...initListState
}




const navigationReducers = (state = initState, action) => {
    
    const aa = commonReducers(state, action)
    
    if(aa){
        return aa
    }

    let newState = ""
    switch(action.type){
        case CHANNEL :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break
            
        case NAVIGATION :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break  
            
        case SINGLE :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break              
        default :
            return state

    }
}

export default navigationReducers