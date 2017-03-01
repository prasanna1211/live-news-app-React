import _ from 'underscore';
import { createSelector } from 'reselect';

const getSourceListData = state => (state.get('singleSourceNewsModuleReducer').get('sourceListReducer').get('data'));

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
