import { takeEvery, put, call } from 'redux-saga/effects';
import request from 'axios';
import { newsApi } from '../../../helpers/api.js';

function* newsFetchAction(action) {
  yield put({ type: 'NEWS_FETCH_REQUEST_INITIATED' });
  try {
    const newsData = yield call(request.get, newsApi(action.payload.source, action.payload.sortBy));
    yield put({
      type: 'NEWS_FETCH_REQUEST_SUCCESS',
      payload: {
        newsData: newsData.data,
        success: true,
      },
    });
  } catch (error) {
    yield put({
      type: 'NEWS_FETCH_REQUEST_SUCCESS',
      payload: {
        success: false,
      },
    });
  }
}

function* newsFetchSaga() {
  yield takeEvery('NEWS_FETCH_REQUEST', newsFetchAction);
}

export default newsFetchSaga;
