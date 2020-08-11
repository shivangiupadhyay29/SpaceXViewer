import spaceConstant  from './space.constant';

const initState = {
    missions: [],
    loading:false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
      case spaceConstant.GET_SPACEX_LIST:
           return { ...state, loading:true };
    case spaceConstant.SPACEX_LIST_RECEIVED:
        return { ...state, missions:action.json, loading:false }
    default:
      return  {...state}
  }
}

export default reducer;