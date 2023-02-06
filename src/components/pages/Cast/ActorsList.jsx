import { Actor } from './Actor';

export const ActorList = ({ actors }) => {
  return (
    <ul>
      {actors.map(actor => (
        <Actor
          key={actor.id}
          photo={actor.profile_path}
          character={actor.character}
          name={actor.name}
        ></Actor>
      ))}
    </ul>
  );
};
