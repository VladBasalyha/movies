import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const AboutMovie = ({
  movieImage,
  movieTitle,
  movieYearRelease,
  movieVotes,
  genres,
  overview,
}) => {
  const location = useLocation();
  const from = location.state?.from ?? '/';

  // const test = location.state;

  return (
    <>
      <Link to={from}>back</Link>
      <div>
        <img src={movieImage} alt={movieTitle} />
        <p>{movieTitle}</p>
        <p>{movieYearRelease}</p>
        <p>{overview}</p>
        <p>{Math.round(movieVotes) * 10}%</p>
        <p>{genres.map(genre => genre.name).join(',')}</p>
        <Link to="cast" state={{ from }}>
          cast
        </Link>
        <Link to="reviews" state={{ from }}>
          reviews
        </Link>
        <Outlet />
      </div>
    </>
  );
};
