/* global it, describe */

// import React from 'react';
// import { shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import _ from 'underscore';

// import SingleSourceNewsContainer from '../components/container/SingleSourceNewsContainer.jsx';
import { sourceFetchActionCreators } from '../actionCreators/actionCreators.js';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Check if it dispatches correct action to the store
describe(' <SingleSourceNewsContainer /> Component ', () => {
  it(' should dispatch actions ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(sourceFetchActionCreators());
    const recievedAction = store.getActions();
    const expectedAction = {
      type: 'SOURCE_LIST_FETCH_REQUEST',
      payload: {},
    };
    expect(_.isEqual(recievedAction, [expectedAction])).is.equal(true);
  });
});

// Todo: write tests for the entire container
