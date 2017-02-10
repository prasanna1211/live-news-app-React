const selectNewsType = (selectedNewsType) => {
  return {
    type: 'SELECT_ACTIVE_NEWS_REQUEST',
    payload: {
      selectedNewsType,
    },
  };
};

export {
  selectNewsType,
};
