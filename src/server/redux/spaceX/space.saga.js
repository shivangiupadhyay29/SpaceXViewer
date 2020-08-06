import spaceConstant  from './space.constant';
import { baseApiURL, missionsURL, type } from '../../../common/api/constant';
import { api } from '../../../common/api';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchSpaceXList(action){
    const { params = null } = action;
    const { offset = 0, limit } = params;
    const url = baseApiURL + (params ? '?' : '');
    const json = yield api( url, type.GET, params).then(response => response);
    yield put({ type: spaceConstant.SPACEX_LIST_RECEIVED,  json: json });
}


export function* listWatcher(params) {
    yield takeLatest( spaceConstant.GET_SPACEX_LIST,  fetchSpaceXList);
}