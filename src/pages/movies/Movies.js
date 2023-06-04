import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from '../../fetchMovies';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
    const eventname = searchParams.get('eventname');
    
    const urlMoviesLocation = useLocation();

  useEffect(() => {
    if (eventname === '' || eventname === null) return;

    const getSearchMovies = async eventname => {
      try {
        const { results } = await fetchSearchMovie(eventname);

        setSearchMovies(results);
      } catch (error) {
        console.log(`Error`);
      }
    };
    getSearchMovies(eventname);
  }, [eventname]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchMovies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: urlMoviesLocation }}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
