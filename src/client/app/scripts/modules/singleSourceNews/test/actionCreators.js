/* global it, describe, expect */

// import React from 'react';
// import { shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
// import SingleSourceNewsContainer from '../components/container/SingleSourceNewsContainer.jsx';
import { sourceFetchActionCreators, newsFetchActionCreators } from '../actionCreators/actionCreators.js';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Check if it dispatches correct action to the store
describe(' #action::creator source list ', () => {
  it(' dispatches correct action ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(sourceFetchActionCreators());
    const recievedAction = store.getActions();
    const expectedAction = {
      type: 'SOURCE_LIST_FETCH_REQUEST',
      payload: {},
    };
    expect(recievedAction).is.deep.equal([expectedAction]);
  });
});

describe(' #action::news list ', () => {
  it(' dispatches correct action ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(newsFetchActionCreators('source', 'sortBy'));
    const recievedAction = store.getActions();
    const expectedAction = {
      type: 'NEWS_FETCH_REQUEST',
      payload: {
        source: 'source',
        sortBy: 'sortBy',
      },
    };
    expect(recievedAction).is.deep.equal([expectedAction]);
  });
});
