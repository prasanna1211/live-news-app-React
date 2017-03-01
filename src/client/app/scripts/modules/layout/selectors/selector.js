import { createSelector } from 'reselect';

export const layoutModuleReducer = state => state.get('layoutModuleReducer');

export const selectActiveNewsReducer = createSelector(
  [layoutModuleReducer], subReducer => subReducer.get('selectActiveNewsReducer'),
);

export const getActiveNewsType = createSelector(
  [selectActiveNewsReducer], subReducer => subReducer.get('activeNewsType'),
);
