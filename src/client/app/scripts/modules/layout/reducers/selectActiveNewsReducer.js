
import Immutable from 'immutable';

export const selectActiveNewsReducer = (state = Immutable.Map(), { type, payload }) => {
  switch (type) {
    case 'SELECT_ACTIVE_NEWS_SUCCESS': {
      const activeNewsType = state.set('activeNewsType', payload.selectedNewsType);
      return activeNewsType;
    }
    default: {
      return state;
    }
  }
};
