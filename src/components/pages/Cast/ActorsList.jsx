import { Actor } from './Actor';

export const ActorList = ({ actors }) => {
  return (
    <>
      {actors.length === 0 ? (
        <p>no info about actors</p>
      ) : (
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
      )}
    </>
  );
};
