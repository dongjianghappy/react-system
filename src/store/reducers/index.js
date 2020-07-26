import { combineReducers } from 'redux'

import common from './common'
import link from './link'
import channel from './channel'


const rootReducer = combineReducers({
    common,
    link,
    channel
})

export default rootReducer;