import { useEffect, useState } from 'react';
import { ListOfFilms } from 'components/CommonComponents/ListOfFilms/ListOfFilms';
import { fetchMoviesById, fetchTrendingMovies } from 'API/api';
export const TrendingFilms = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(films => {
      setTrendingFilms(films.results);
    });
  }, []);

  return <ListOfFilms films={trendingFilms}></ListOfFilms>;
};
