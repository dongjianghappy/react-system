import { 
    GET_SLIDESHOW_ACTION,
    GET_SLIDESHOW_LIST_ACTION
} from '../actionTypes'

const initState = {
    list: [],
    imgList: []
}

const reducers = (state = initState, action) => {

    let newState = ""
    switch(action.type){

        // 幻灯片管理
        case GET_SLIDESHOW_ACTION :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break

        // 幻灯片管理
        case GET_SLIDESHOW_LIST_ACTION :
            newState = JSON.parse(JSON.stringify(state))
            newState.imgList = action.data
            return newState
            break  

        default :
            return state

    }
}

export default reducers