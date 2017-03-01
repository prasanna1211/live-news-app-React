export const sourceFetchActionCreators = () => {
  return {
    type: 'SOURCE_LIST_FETCH_REQUEST',
    payload: { },
  };
};

export const newsFetchActionCreators = (source, sortBy) => {
  return {
    type: 'NEWS_FETCH_REQUEST',
    payload: {
      source,
      sortBy,
    },
  };
};
