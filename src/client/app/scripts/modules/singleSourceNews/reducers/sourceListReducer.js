
import Immutable from 'immutable';

export const sourceListReducer = (state = Immutable.Map(), { type, payload }) => {
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
      newState = newState.set('sourceListFetchInitiated', true);
      newState = newState.set('sourceListFetchSuccess', true);
      return newState;
    }
    default: {
      return state;
    }
  }
};
