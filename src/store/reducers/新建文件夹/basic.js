import { GET_BAISC_INFO } from '../actionTypes'

import { initListState } from './commonState'
import commonReducers from './commonReduce'

const initState = {
    module: "basic",
    node: "", // 节点
    webInfo: [],
    navigation: {
        channel: [],
        main: [],
        single: [],
    },
    slideshow: {
        slideList: [],
        imgList: []
    },
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