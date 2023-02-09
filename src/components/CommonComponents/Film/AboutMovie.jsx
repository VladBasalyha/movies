import React, { Suspense } from 'react';
import css from '../Film/AboutMovie.module.css';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

const AboutMovie = ({
  movieImage,
  movieTitle,
  movieYearRelease = 0,
  movieVotes = 0,
  genres,
  overview,
}) => {
  const location = useLocation();
  const from = location.state?.from ?? '/';
  const getVotes = votes => Math.round(Number(votes)) * 10;
  // const test = location.state;

  return (
    <>
      <Container>
        <Button className="m-2" variant="secondary">
          <Link to={from}>back</Link>
        </Button>
        <div>
          <div className={css.movieInfo}>
            <div>
              <img width="200" height="100" src={movieImage} alt={movieTitle} />
            </div>
            <div>
              <p>{movieTitle}</p>
              <p>Year of release: {movieYearRelease}</p>
              <p>Overview: {overview}</p>
              <p>Rating: {getVotes(movieVotes)}%</p>
              <p>{genres.map(genre => genre.name).join(',')}</p>
            </div>
          </div>
          <ButtonGroup className="p-2">
            <Button variant="secondary">
              <Link to="cast" state={{ from }}>
                cast
              </Link>
            </Button>
            <Button variant="secondary">
              <Link to="reviews" state={{ from }}>
                reviews
              </Link>
            </Button>
          </ButtonGroup>
          <Suspense fallback={<ClockLoader></ClockLoader>}>
            <Outlet />
          </Suspense>
        </div>
      </Container>
    </>
  );
};
export default AboutMovie;
