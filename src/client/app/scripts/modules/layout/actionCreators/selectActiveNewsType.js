const selectActiveNewsType = (selectedNewsType) => {
  return {
    type: 'SELECT_ACTIVE_NEWS_REQUEST',
    payload: {
      selectedNewsType,
    },
  };
};

export {
  selectActiveNewsType,
};
