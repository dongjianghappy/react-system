import { combineReducers } from 'redux'

import initData from './default'
import basic from './basic'
import navigation from './navigation'
import slideshow from './slideshow'
import common from './common'
import business from './business'
import link from './link'
import partner from './partner'
import menuRouter from './menuRouter'
import spread from './spread'
import advertisement from './advertisement'
import channel from './channel'
import setting from './setting'
import space from './space'
import anpassen from './anpassen'
import login from './login'
import service from './service'
import log from './log'
import customize from './customize'
import mysql from './mysql'
import collection from './collection'
import appstore from './appstore'
import user from './user'
import tag from './tag'
import order from './order'

const rootReducer = combineReducers({
    basic,
    navigation,
    slideshow,
    initData,
    common,
    business,
    link,
    partner,
    menuRouter,
    spread,
    advertisement,
    channel,
    setting,
    space,
    anpassen,
    login,
    service,
    log,
    customize,
    mysql,
    collection,
    appstore,
    user,
    tag,
    order
})

export default rootReducer;