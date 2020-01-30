export const initialState = {
  movies: [],
  isLoading: true
}

export const moviesReducer = (state, action) => {
  switch(action.type) {
    case 'SET_MOVIES':
      return {
        isLoading: !state.isLoading,
        movies: action.payload
      };

    case 'EDIT_MOVIE':
      return {
        ...state,
        movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie)
      };

    case 'DELETE_MOVIE':
      return {
        ...state,
        isLoading: !state.isLoading
      }

    default:
      return state;
  }
};