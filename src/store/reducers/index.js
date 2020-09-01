import { combineReducers } from 'redux'

import common from './common'
import channel from './channel'
import slideshow from './slideshow'
import space from './space'


const rootReducer = combineReducers({
    common,
    channel,
    slideshow,
    space
})

export default rootReducer;