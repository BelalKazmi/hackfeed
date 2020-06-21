const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.page]: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
