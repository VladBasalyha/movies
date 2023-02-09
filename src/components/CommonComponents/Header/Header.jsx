import { Navbar, Nav, Button, Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Container>
        <header>
          <Navbar className="justify-content-center" variant="dark" bg="dark">
            <Nav variant="pills">
              <Stack direction="horizontal" gap={3}>
                <Button variant="info">
                  <Link to="/">Home</Link>
                </Button>
                <Button variant="info">
                  <Link to="/movies">Movies</Link>
                </Button>
              </Stack>
            </Nav>
          </Navbar>
        </header>
      </Container>
      <Outlet />
    </>
  );
};
