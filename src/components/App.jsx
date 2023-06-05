import { lazy } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Layout = lazy(() => import('./layout/Layout'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

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
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
