import { Container, Row } from 'react-bootstrap';
import { Actor } from './Actor';

export const ActorList = ({ actors }) => {
  return (
    <Container>
      {actors.length === 0 ? (
        <p>no info about actors</p>
      ) : (
        <Row className="justify-content-center" xs="auto">
          {actors.map(actor => (
            <Actor
              key={actor.id}
              photo={actor.profile_path}
              character={actor.character}
              name={actor.name}
            ></Actor>
          ))}
        </Row>
      )}
    </Container>
  );
};
