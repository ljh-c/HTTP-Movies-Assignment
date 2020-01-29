export const moviesReducer = (state, action) => {
  switch(action.type) {
    case 'SET_INITIAL_MOVIES':
      return action.payload;

    default:
      return state;
  }
};