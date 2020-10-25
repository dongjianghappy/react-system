import { DEFAULT_DATA } from '../actionTypes'

const initState = {
    list: []
}

const reducers = (state = initState, action) => {

    let newState = ""

    switch(action.type){
        case DEFAULT_DATA :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break
            
        default :
            return state

    }
}

export default reducers