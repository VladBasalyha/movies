import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'API/api';
export const DetailedInfoAboutFilm = () => {
  // const [filmInfo, setFilmInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {}, []);
  return <h1>{`film id - ${id}`}</h1>;
};
