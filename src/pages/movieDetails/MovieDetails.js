import React from 'react';
import { fetchMovieById } from '../../fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './css/movieDetails.module.css';

const MovieDetails = () => {
  const [dataMovieById, setDataMovieById] = useState(null);
  const { movieId } = useParams();

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

  console.log(dataMovieById);

  return (
    <>
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
    </>
  );
};

export default MovieDetails;
