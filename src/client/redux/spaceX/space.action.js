import spaceConstant  from './space.constant';

export const getSpaceMissions = (params) => ({
    type: articleConstant.GET_SPACEX_LIST,
    params
});