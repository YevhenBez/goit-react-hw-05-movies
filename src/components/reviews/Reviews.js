import { fetchReviews } from '../../fetchMovies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const { results } = await fetchReviews(movieId);
        // console.log(results);
        setDataReviews(results);
      } catch (error) {
        console.log('Error');
      }
    };

    getReviews(movieId);
  }, [movieId]);

  // console.log(dataReviews);

  return (
    <>
      {dataReviews.length > 0 && (
        <ul>
          {dataReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  <strong>Author: {author}</strong>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {dataReviews.length === 0 && (
        <p>We don't have any rewievs for this movie</p>
      )}
    </>
  );
};

export default Reviews;
