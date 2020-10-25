import { ANPASSEN, ANPASSEN_FIELD } from '../actionTypes'

const initState = {
    list: []
}

const reducers = (state = initState, action) => {

    let newState = ""

    switch(action.type){
        case ANPASSEN :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break
            
        case ANPASSEN_FIELD :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break            
        default :
            return state

    }
}

export default reducers