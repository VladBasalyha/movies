import { ListOfFilms } from 'components/CommonComponents/ListOfFilms/ListOfFilms';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FilmsByQuery = () => {
  // const [searchInputValue, setInputValue] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=93580a7f0ca5f935ad0b81c9ee349049&language=en-US&query=${movieName}&page=1&include_adult=true`
    )
      .then(r => r.json())
      .then(res => setFilms(res.results));
  }, [movieName]);

  const onSearchSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.film.value === movieName) {
      alert('fdsafsda');
      return;
    }
    if (form.elements.film.value === '') {
      alert('type smth');
      return {};
    } else {
      setSearchParams({ movieName: form.elements.film.value });
    }
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <label htmlFor="film">Search Films</label>
        <input type="text" id="film" name="film"></input>
        <button>Search</button>
      </form>

      <div>
        <ListOfFilms films={films}></ListOfFilms>
      </div>
    </>
  );
};
