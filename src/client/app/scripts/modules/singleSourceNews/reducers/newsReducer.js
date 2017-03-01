import Immutable from 'immutable';

const initialState = Immutable.Map({
  newsFetchInitiated: false,
  newsFetchSuccess: false,
  data: {},
});

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'NEWS_FETCH_REQUEST_INITIATED': {
      let newState = state;
      newState = newState.set('newsFetchInitiated', true);
      newState = newState.set('newsFetchSuccess', false);
      return newState;
    }
    case 'NEWS_FETCH_REQUEST_SUCCESS': {
      let newState = state;
      newState = newState.set('newsFetchInitiated', true);
      newState = newState.set('newsFetchSuccess', true);
      newState = newState.set('data', payload);
      return newState;
    }
    case 'NEWS_FETCH_REQUEST_FAILURE': {
      let newState = state;
      newState = newState.set('newsFetchInitiated', false);
      newState = newState.set('newsFetchSuccess', false);
      newState = newState.set('data', payload);
      return newState;
    }
    default : {
      return state;
    }
  }
};
