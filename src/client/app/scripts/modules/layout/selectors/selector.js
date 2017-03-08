import { createSelector } from 'reselect';
import _ from 'underscore';

export const layoutModuleReducer = state => state.get('layoutModuleReducer');

export const selectActiveNewsReducer = createSelector(
  [layoutModuleReducer], subReducer => subReducer.get('selectActiveNewsReducer'),
);

export const getActiveNewsType = createSelector(
  [selectActiveNewsReducer], subReducer => subReducer.get('activeNewsType'),
);

/*
 * Selectors for source list branch of state tree
 */
// Get root reducer
export const getSourceListReducer = state => (state.get('singleSourceNewsModuleReducer').get('sourceListReducer'));

// Get initiation status for api call
export const getSourceListInitiatedStatus = createSelector([getSourceListReducer], reducer => (reducer.get('sourceListFetchInitiated')));

// Get success status for api call
export const getSourceListSuccessStatus = createSelector([getSourceListReducer], reducer => (reducer.get('sourceListFetchSuccess')));

// Get data branch of the tree
export const getSourceListData = createSelector([getSourceListReducer], reducer => (reducer.get('data')));

// Get source category and do computation
export const getSourceCategory = createSelector(
  [getSourceListData], (data) => {
    const sourceList = !_.isEmpty(data) ? data.sourceList : {};
    return _.map(sourceList, (source) => {
      return source.category;
    });
  },
);

