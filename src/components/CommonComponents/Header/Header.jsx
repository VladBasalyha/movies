import { Navbar, Nav, Button, Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';

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
      <Suspense
        fallback={
          <ClockLoader size={100} color="rgba(74, 98, 208, 1)"></ClockLoader>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
