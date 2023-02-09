import img from 'forDefaultValues/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png';
import PropTypes from 'prop-types'; // ES6

const Actor = ({ photo = img, name = 'name', character = 'character', id }) => {
  const pathToImage = 'https://image.tmdb.org/t/p/w300';
  return (
    <li key={id}>
      <div>
        <img src={!photo ? img : `${pathToImage}${photo}`} alt={name} />
        <p>Actor - {name}</p>
        <p>Character - {character}</p>
      </div>
    </li>
  );
};
Actor.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
export default Actor;
