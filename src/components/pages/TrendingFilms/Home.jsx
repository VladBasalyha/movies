import { useEffect, useState } from 'react';
import ListOfFilms from 'components/CommonComponents/ListOfFilms/ListOfFilms';
import { fetchTrendingMovies } from 'API/api';
import React from 'react';
const TrendingFilms = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(films => {
      setTrendingFilms(films.results);
    });
  }, []);

  return <ListOfFilms films={trendingFilms}></ListOfFilms>;
};
export default TrendingFilms;
