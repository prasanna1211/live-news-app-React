import { fork } from 'redux-saga/effects';

import selectActiveNewsSaga from 'scripts/modules/layout/sagas/selectActiveNewsSaga.js';

export default function* rootSaga() {
  yield fork(selectActiveNewsSaga);
}

