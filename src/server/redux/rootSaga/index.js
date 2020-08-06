import { all } from 'redux-saga/effects';

import { listWatcher } from '../spaceX/space.saga';

export default function* rootSaga() {
   yield all([
        listWatcher()
    ]);
}