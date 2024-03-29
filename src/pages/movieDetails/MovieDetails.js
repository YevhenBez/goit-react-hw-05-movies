import React from 'react';
import { fetchMovieById } from '../../fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './css/movieDetails.module.css';
import ButtonBack from '../../components/buttonBack/ButtonBack';

const MovieDetails = () => {
  const [dataMovieById, setDataMovieById] = useState(null);
  const { movieId } = useParams();
  const urlLocation = useLocation();

  console.log(urlLocation);

  useEffect(() => {
    const getMoviesById = async movieId => {
      try {
        const resultsMoviesById = await fetchMovieById(movieId);
        setDataMovieById(resultsMoviesById);
      } catch (error) {
        console.log('Error');
      }
    };
    getMoviesById(movieId);
  }, [movieId]);

  if (!dataMovieById) return;

  const image = dataMovieById.poster_path
    ? `https://image.tmdb.org/t/p/w500/${dataMovieById.poster_path}`
    : `https://via.placeholder.com/500x750`;
  const releaseMovie = dataMovieById.release_date
    ? `(${dataMovieById.release_date.slice(0, 4)})`
    : '';

  //   console.log(dataMovieById);

  return (
    <>
      <Link to={urlLocation.state ? urlLocation.state.from : '/movies'}>
        <ButtonBack />
      </Link>
      <div className={css.movieDetailsStyled}>
        {dataMovieById && (
          <>
            <div>
              <img src={image} alt={dataMovieById.title} />
            </div>
            <div>
              <h1>{`${dataMovieById.title} ${releaseMovie}`}</h1>
              <span>
                User Score: {Math.round(dataMovieById.vote_average * 10)}%
              </span>
              <h2>Overview</h2>
              <p>{dataMovieById?.overview}</p>
              {!dataMovieById.overview && (
                <p>We don't have any overwiev for this movie</p>
              )}
              <h3>Genres</h3>
              {dataMovieById?.genres &&
                dataMovieById.genres.map(({ name, id }) => (
                  <span key={id}>{name} </span>
                ))}
              {!dataMovieById.genres.length && (
                <p>We don't have any genres for this movie</p>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <Link
            to={`cast`}
            state={{
              from: urlLocation.state ? urlLocation.state.from : '/movies',
            }}
          >
            <li>Cast</li>
          </Link>
          <Link
            to={`reviews`}
            state={{
              from: urlLocation.state ? urlLocation.state.from : '/movies',
            }}
          >
            <li>Reviews</li>
          </Link>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
