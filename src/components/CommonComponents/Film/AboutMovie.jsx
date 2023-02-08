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
  console.log(location);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLinkHref}>back</Link>
      <div>
        <img src={movieImage} alt={movieTitle} />
        <p>{movieTitle}</p>
        <p>{movieYearRelease}</p>
        <p>{overview}</p>
        <p>{Math.round(movieVotes) * 10}%</p>
        <p>{genres.map(genre => genre.name).join(',')}</p>
        <Link to="cast">cast</Link>
        <Link to="reviews">reviews</Link>
      </div>
      <Outlet />
    </>
  );
};
