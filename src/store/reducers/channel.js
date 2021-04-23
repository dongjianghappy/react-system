import {
  INPUT_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_DATA_ACTION,
  GET_FLAG,
} from "../actionTypes";

import { initListState } from "./commonState";
import commonReducers from "./commonReduce";

const initState = {
  module: "channel",
  initialValues: {
    status: "1",
    type: "main",
  },
  article: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  tech: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  source: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    download: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  picture: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    download: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  notes: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  learn: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  funny: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    label: [],
    recycle: [],
    ...initListState,
  },
  website: {
    chart: {},
    cateList: [],
    list: [],
    flags: [],
    comment: [],
    praise: [],
    collect: [],
    label: [],
    recycle: [],
    ...initListState,
  },
};

const reducers = (state = initState, action) => {
  const aa = commonReducers(state, action);

  if (aa) {
    return aa;
  }

  let newState = "";

  switch (action.type) {
    case GET_FLAG:
      newState = JSON.parse(JSON.stringify(state));

      newState.flags = action.value;

      return newState;
      break;

    default:
      return state;
  }

  // if(action.type === INPUT_CHANGE){
  //     let newState = JSON.parse(JSON.stringify(state))
  //     newState.inputValue = action.value
  //     return newState
  // }
  // else if(action.type === ADD_ITEM){
  //     let newState = JSON.parse(JSON.stringify(state))
  //     newState.list.push(newState.inputValue)
  //     newState.inputValue = ""
  //     return newState
  // }
  //  else if(action.type === DELETE_ITEM){
  //     let newState = JSON.parse(JSON.stringify(state))
  //     newState.list.splice(action.index, 1)
  //     return newState
  // }
  // //  else if(action.type === GET_DATA_ACTION){
  // //     let newState = JSON.parse(JSON.stringify(state))
  // //     newState.list = action.data
  // //     return newState
  // // }
  // return state
};

export default reducers;
