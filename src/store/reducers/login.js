import { LOGIN, RIGHT_MENU } from '../actionTypes'

const initState = {
    userInfo: JSON.parse(sessionStorage.getItem("userInfo") || '{}'),
    menuList: JSON.parse(sessionStorage.getItem("menuList") || '[]')
}

const reducers = (state = initState, action) => {

    let newState = ""

    switch(action.type){
        case LOGIN :
            newState = JSON.parse(JSON.stringify(state))
            newState.userInfo = action.data.userInfo
            newState.menuList = action.data.menuList
            return newState
            break
            
        case RIGHT_MENU :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break  

        default :
            return state

    }
}

export default reducers