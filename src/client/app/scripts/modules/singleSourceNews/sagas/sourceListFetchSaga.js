import request from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { sourcesApi } from '../../../helpers/api.js';

function* sourceListFetchAction() {
  try {
    const sourceList = yield call(request.get, sourcesApi);
    yield put({
      type: 'SOURCE_LIST_FETCH_SUCCESS',
      payload: {
        sourceList: sourceList.data.sources,
        success: 'true',
      },
    });
  } catch (error) {
    yield put({
      type: 'SOURCE_LIST_FETCH_FAILURE',
      payload: {
        success: 'false',
      },
    });
  }
}

function* sourceListSaga() {
  yield takeEvery('SOURCE_LIST_FETCH_REQUEST', sourceListFetchAction);
}

export default sourceListSaga;
