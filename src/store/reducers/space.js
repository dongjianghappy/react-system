import { 
    GET_SPACE_ACTION
} from '../actionTypes'

const initState = {
    list: []
}

const reducers = (state = initState, action) => {

    let newState = ""
    switch(action.type){

        // 幻灯片管理
        case GET_SPACE_ACTION :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data

            return newState
            break

        default :
            return state

    }
}

export default reducers