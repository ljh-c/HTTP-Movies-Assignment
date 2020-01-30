import React, { useState } from 'react';
import axios from 'axios';

const AddForm = props => {
  const [movieInfo, setMovieInfo] = useState({
    title: '',
    director: '',
    metascore: '',
    stars: ['', '', '']
  });

  const handleChange = (evt, index) => {
    evt.persist();
    if (evt.target.name === 'actor') {
      setMovieInfo({
        ...movieInfo,
        stars: movieInfo.stars.map((star, idx) => idx === index ? evt.target.value : star)
      });
    } else {
      setMovieInfo({
        ...movieInfo,
        [evt.target.name]: evt.target.value
      });
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    axios.post('http://localhost:5000/api/movies', movieInfo)
      .then(res => {
        props.dispatch({type: 'ADD_MOVIE', payload: res.data});
        props.history.push('/');
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder="Title"
            name="title"
            value={movieInfo.title}
            onChange={handleChange}
            required
          />
          <div className="movie-director">
            <input type="text"
              placeholder="Director"
              name="director"
              value={movieInfo.director}
              onChange={handleChange}
              required
            />
          </div>
          <div className="movie-metascore">
            <input type="number"
              placeholder="Metascore"
              name="metascore"
              value={movieInfo.metascore}
              onChange={handleChange}
              required
            />
          </div>
          <h3>Actors</h3>
          {movieInfo.stars.map((star, index) => (
            <div key={index} className="movie-star">
              <input type="text"
                placeholder="Actor"
                name="actor"
                value={movieInfo.stars[index]}
                onChange={evt => handleChange(evt, index)}
              />
            </div>
          ))}
          <button>Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;