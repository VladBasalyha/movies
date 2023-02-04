import { Link, useParams } from 'react-router-dom';
import { Film } from '../Film/Film';

export const ListOfFilms = ({ films }) => {
  const imageWay = 'https://image.tmdb.org/t/p/w300';
  return (
    <ul>
      {films.map(({ id, poster_path, title, overview }) => (
        <Link key={id} to={`${id}`}>
          <Film key={id} image={imageWay + poster_path} title={title}></Film>
        </Link>
      ))}
    </ul>
  );
};
