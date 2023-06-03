import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from '../../fetchMovies';

const Cast = () => {
  const [dataCast, setDataCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const { cast } = await fetchCast(movieId);
        setDataCast(cast);
      } catch (error) {
        console.log('Error');
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      {dataCast.length > 0 && (
        <ul>
          {dataCast.map(({ id, profile_path, name, character }) => {
            const Image = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : `https://via.placeholder.com/100x150`;
            return (
              <li key={id}>
                <img width="100" src={`${Image}`} alt={`${name}_${id}`} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {dataCast.length === 0 && <p>We don't have any cast for this movie</p>}
    </>
  );
};

export default Cast;
