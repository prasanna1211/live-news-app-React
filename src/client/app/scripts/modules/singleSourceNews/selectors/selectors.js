import _ from 'underscore';
import { createSelector } from 'reselect';

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

// Get source list and do computation
export const getSourceList = createSelector(
  [getSourceListData], (data) => {
    const sourceList = !_.isEmpty(data) ? data.sourceList : {};
    return _.map(sourceList, (source) => {
      return {
        name: source.name,
        value: source.id,
      };
    });
  },
);

/*
 * Selectors for news branch of state tree
 */
// Get root reducer
export const getNewsReducer = state => (state.get('singleSourceNewsModuleReducer').get('newsReducer'));

// Get initiation status for api call
export const getNewsInitiatedStatus = createSelector([getNewsReducer], reducer => (reducer.get('newsFetchInitiated')));

// Get success status for api call
export const getNewsSuccessStatus = createSelector([getNewsReducer], reducer => (reducer.get('newsFetchSuccess')));

// Get data branch of the tree
export const getNewsData = createSelector([getNewsReducer], (reducer) => {
  const newsData = reducer.get('data').newsData ? reducer.get('data').newsData.articles : {};
  return newsData;
});

