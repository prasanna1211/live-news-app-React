
import Immutable from 'immutable';

const initialState = Immutable.Map({
  sourceListFetchInitiated: false,
  sourceListFetchSuccess: false,
  data: {},
});

export const sourceListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SOURCE_LIST_FETCH_INITIATED': {
      let newState = state;
      newState = newState.set('sourceListFetchInitiated', true);
      newState = newState.set('sourceListFetchSuccess', false);
      return newState;
    }
    case 'SOURCE_LIST_FETCH_SUCCESS': {
      let newState = state;
      newState = newState.set('data', payload);
      newState = newState.set('sourceListFetchInitiated', true);
      newState = newState.set('sourceListFetchSuccess', true);
      return newState;
    }
    case 'SOURCE_LIST_FETCH_FAILURE': {
      let newState = state;
      newState = newState.set('data', payload);
      newState = newState.set('sourceListFetchInitiated', false);
      newState = newState.set('sourceListFetchSuccess', false);
      return newState;
    }
    default: {
      return state;
    }
  }
};
