import { fork } from 'redux-saga/effects';

import selectActiveNewsSaga from 'scripts/modules/layout/sagas/selectActiveNewsSaga.js';
import sourceListFetchSaga from 'scripts/modules/singleSourceNews/sagas/sourceListFetchSaga.js';

export default function* rootSaga() {
  yield fork(selectActiveNewsSaga);
  yield fork(sourceListFetchSaga);
}

