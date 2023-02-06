import { Link, Outlet } from 'react-router-dom';

export const AboutMovie = ({
  movieImage,
  movieTitle,
  movieYearRelease,
  movieVotes,
  genres,
  overview,
}) => {
  return (
    <>
      <div>
        <img src={movieImage} alt={movieTitle} />
        <p>{movieTitle}</p>
        <p>{movieYearRelease}</p>
        <p>{overview}</p>
        <p>{Math.round(movieVotes) * 10}%</p>
        <p>{genres.map(genre => genre.name).join(',')}</p>
      </div>
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
      <Outlet />
    </>
  );
};
