import React from 'react';
import css from '../Film/AboutMovie.module.css';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const AboutMovie = ({
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
        <Button variant="secondary">
          <Link to={from}>back</Link>
        </Button>
        <div>
          <div className={css.movieInfo}>
            <div>
              <img src={movieImage} alt={movieTitle} />
            </div>
            <div>
              <p>{movieTitle}</p>
              <p>Year of release: {movieYearRelease}</p>
              <p>Overview: {overview}</p>
              <p>Rating: {getVotes(movieVotes)}%</p>
              <p>{genres.map(genre => genre.name).join(',')}</p>
            </div>
          </div>
          <ButtonGroup>
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

          <Outlet />
        </div>
      </Container>
    </>
  );
};
