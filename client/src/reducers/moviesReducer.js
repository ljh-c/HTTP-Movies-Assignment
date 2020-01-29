export const moviesReducer = (state, action) => {
  switch(action.type) {
    case 'SET_INITIAL_MOVIES':
      return action.payload;

    case 'EDIT_MOVIE':
      return state.map(movie => movie.id === action.payload.id ? action.payload : movie);

    default:
      return state;
  }
};