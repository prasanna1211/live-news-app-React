import { takeEvery, put } from 'redux-saga/effects';

function* selectActiveNewsAction() {
  try {
    yield put({ type: 'SELECT_ACTIVE_NEWS_SUCCESS' });
  } catch (error) {
    yield put({ type: 'SELECT_ACTIVE_NEWS_FAILED' });
  }
}

function* selectActiveNewsSaga() {
  yield takeEvery('SELECT_ACTIVE_NEWS_REQUEST', selectActiveNewsAction);
}

export default selectActiveNewsSaga;
