import { takeEvery, put } from 'redux-saga/effects';

function* selectActiveNewsAction(action) {
  try {
    yield put({ type: 'SELECT_ACTIVE_NEWS_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'SELECT_ACTIVE_NEWS_FAILURE' });
  }
}

function* selectActiveNewsSaga() {
  yield takeEvery('SELECT_ACTIVE_NEWS_REQUEST', selectActiveNewsAction);
}

export default selectActiveNewsSaga;
