import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Movies from '../pages/movies/Movies';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import Layout from './layout/Layout';

const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies />} />
          <Route path="movieDetails" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
