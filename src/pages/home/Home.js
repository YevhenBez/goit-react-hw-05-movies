import React from 'react';
import { fetchTrendingMovies } from '../../fetchMovies';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
const getTrendingMovies = async () => {
        try {
          const { results } = await fetchTrendingMovies();
          setData([...results]);
        } catch (error) {
         console.log('Error')
        }
      };
      getTrendingMovies();
   }, []);

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
