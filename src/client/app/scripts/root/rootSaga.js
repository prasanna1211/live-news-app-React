import { takeLatest } from 'redux-saga/effects';

function* rootAction() {
  yield 1;
}

function* rootSaga() {
  yield takeLatest('DUMMY_ACTION', rootAction);
}

export default rootSaga;
