import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film } from '../Film/Film';
import defaultImage from 'forDefaultValues/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png';
export const ListOfFilms = ({ films }) => {
  const location = useLocation();
  console.log(location);
  const imageWay = 'https://image.tmdb.org/t/p/w300';
  return (
    <ul>
      {films.map(({ id, poster_path, title }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <Film
            key={id}
            image={!poster_path ? defaultImage : imageWay + poster_path}
            title={title}
            id={undefined}
          ></Film>
        </Link>
      ))}
    </ul>
  );
};
