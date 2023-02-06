import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './ReviewsList';

export const ReviewComponent = () => {
  const { id } = useParams();
  const [reviewsOfFilm, setReviewsFilm] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=93580a7f0ca5f935ad0b81c9ee349049&language=en-US&page=1`
    )
      .then(r => r.json())
      .then(res => setReviewsFilm(res.results));
  }, []);

  return <ReviewsList reviews={reviewsOfFilm}></ReviewsList>;
};
