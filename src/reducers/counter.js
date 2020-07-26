const counter = (state=0, action) => {
    switch(action.type){
        case 'ADD' :
           return state + 1
           case 'DEL' :
            return state - 1
        default:
           return state
    }
}

export default counter