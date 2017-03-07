/* global it, describe, expect */
import Immutable from 'immutable';
import { expect } from 'chai';
import { sourceListReducer } from '../reducers/sourceListReducer.js';
import { newsReducer } from '../reducers/newsReducer.js';

describe(' #reducer:sourceListReducer ', () => {
  it(' changes state correctly ', () => {
    const initialState = Immutable.Map();
    const actualNewState = sourceListReducer(initialState, {
      type: 'SOURCE_LIST_FETCH_SUCCESS',
      payload: {
        test: 'test',
      },
    });
    const expectedNewState = {
      data: {
        test: 'test',
      },
      sourceListFetchInitiated: false,
      sourceListFetchSuccess: true,
    };
    expect(actualNewState.toJS()).to.deep.equal(expectedNewState);
  });
});

describe(' #reducer:newsReducer ', () => {
  it(' changes state correctly ', () => {
    const initialState = Immutable.Map();
    const actualNewState = newsReducer(initialState, {
      type: 'NEWS_FETCH_REQUEST_SUCCESS',
      payload: {
        test: 'test',
      },
    });
    const expectedNewState = {
      data: {
        test: 'test',
      },
      newsFetchInitiated: false,
      newsFetchSuccess: true,
    };
    expect(actualNewState.toJS()).to.deep.equal(expectedNewState);
  });
});
