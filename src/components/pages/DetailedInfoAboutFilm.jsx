import { AboutMovie } from 'components/CommonComponents/Film/AboutMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from '../pages/forDefaultValues/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png';

export const DetailedInfoAboutFilm = () => {
  const [filmTitle, setFilmTitle] = useState('');
  const [filmOverview, setFilmOverview] = useState('');
  const [filmVotes, setFilmVotes] = useState('no votes');
  const [filmGenres, setFilmGenres] = useState([]);
  const [filmReleasedYear, setFilmReleasedYear] = useState('no info');
  const [filmImage, setFilmImage] = useState('');
  const { id } = useParams();
  const toGetOnlyYearOfFilm = date => new Date(date).getFullYear();
  const pathToImage = 'https://image.tmdb.org/t/p/w300';
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=93580a7f0ca5f935ad0b81c9ee349049&language=en-US`
    )
      .then(r => r.json())
      .then(
        ({
          title,
          vote_average,
          genres,
          overview,
          release_date,
          poster_path,
        }) => {
          if (poster_path === '') {
            setFilmImage(defaultImg);
          }

          setFilmTitle(title);
          setFilmVotes(vote_average);
          setFilmGenres(genres);
          setFilmOverview(overview);
          setFilmReleasedYear(release_date);

          setFilmImage(`${pathToImage}${poster_path}`);
        }
      );
  }, []);

  return (
    <AboutMovie
      genres={filmGenres}
      overview={filmOverview}
      movieVotes={filmVotes}
      movieYearRelease={toGetOnlyYearOfFilm(filmReleasedYear)}
      movieImage={filmImage}
      movieTitle={filmTitle}
    ></AboutMovie>
  );
};
