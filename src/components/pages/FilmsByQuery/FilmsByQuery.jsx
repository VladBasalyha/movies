import ListOfFilms from 'components/CommonComponents/ListOfFilms/ListOfFilms';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Alert, Button, Container } from 'react-bootstrap';

const FilmsByQuery = () => {
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
      alert('you`ve already searched this');
      return;
    }
    if (form.elements.film.value === '') {
      alert('type something');
      return;
    } else {
      setSearchParams({ movieName: form.elements.film.value });
    }
  };

  return (
    <Container>
      <div>
        <form className="m-2" onSubmit={onSearchSubmit}>
          <label htmlFor="film">Search Films</label>
          <input type="text" id="film" name="film"></input>
          <Button type="submit" variant="info">
            Search
          </Button>
        </form>
      </div>

      <div>
        {films.length === 0 ? (
          <Alert variant="info">No films weren`t found yet</Alert>
        ) : (
          <ListOfFilms films={films}></ListOfFilms>
        )}
      </div>
    </Container>
  );
};
export default FilmsByQuery;
