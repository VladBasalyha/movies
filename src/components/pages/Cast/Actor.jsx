import img from 'forDefaultValues/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png';
export const Actor = ({ photo = img, name, character, id }) => {
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
