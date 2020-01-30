import React, { useState, useEffect, useReducer } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from "./Movies/UpdateForm";
import { MoviesContext } from "./contexts/MoviesContext";
import { moviesReducer, initialState } from "./reducers/moviesReducer";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies")
      .then(res => dispatch({type: 'SET_MOVIES', payload: res.data}))
      .catch(err => console.log(err.response));
  }, [movies.isLoading]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <MoviesContext.Provider value={movies.movies}>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} dispatch={dispatch} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateForm {...props} dispatch={dispatch} />
        }}
      />
    </MoviesContext.Provider>
  );
};

export default App;
