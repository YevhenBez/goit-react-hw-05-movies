import React from 'react';
import { fetchTrendingMovies } from '../fetchMovies';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        if (!data.length) fetchTrendingMovies(setData)
   }, [data]);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {data &&
          data.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Home;
