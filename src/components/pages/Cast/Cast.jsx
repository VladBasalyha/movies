import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActorList from './ActorsList';

const Cast = () => {
  const { id } = useParams();

  const [actorsCast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=93580a7f0ca5f935ad0b81c9ee349049&language=en-US`
    )
      .then(r => r.json())
      .then(({ cast }) => setCast(cast));
  }, [id]);

  return <ActorList actors={actorsCast}></ActorList>;
};
export default Cast;
