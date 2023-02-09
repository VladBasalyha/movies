import { Alert, Container, Row } from 'react-bootstrap';
import Actor from './Actor';
import React from 'react';

const ActorsList = ({ actors }) => {
  return (
    <Container>
      {actors.length === 0 ? (
        <Alert variant="info"> no info about actors</Alert>
      ) : (
        <Row className="justify-content-center" xs="auto">
          {actors.map(actor => (
            <Actor
              id={actor.id}
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
export default ActorsList;
