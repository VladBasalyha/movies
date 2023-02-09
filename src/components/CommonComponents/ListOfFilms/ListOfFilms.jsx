import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film } from '../Film/Film';
import defaultImage from 'forDefaultValues/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png';
import { Container, Row } from 'react-bootstrap';
export const ListOfFilms = ({ films }) => {
  const location = useLocation();

  const imageWay = 'https://image.tmdb.org/t/p/w300';
  return (
    <Container>
      <Row className="justify-content-center p-3" xs="auto">
        {films.map(({ id, poster_path, title }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <Film
              key={id}
              image={!poster_path ? defaultImage : imageWay + poster_path}
              title={title}
            ></Film>
          </Link>
        ))}
      </Row>
    </Container>
  );
};
