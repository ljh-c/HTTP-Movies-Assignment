export const initialState = {
  movies: [],
  isLoading: true
}

export const moviesReducer = (state, action) => {
  switch(action.type) {
    case 'SET_MOVIES':
      return {
        isLoading: false,
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
        isLoading: true
      };

    case 'ADD_MOVIE':
      return {
        ...state,
        movies: action.payload
      };

    default:
      return state;
  }
};