// import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DetailedInfoAboutFilm } from './CommonComponents/Film/DetailedInfoAboutFilm';
// import { fetchMovies } from '../API/api';
import { TrendingFilms } from './pages/TrendingFilms/TrendingFilms';
export const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<TrendingFilms></TrendingFilms>}></Route>
        <Route
          path="/:id"
          element={<DetailedInfoAboutFilm></DetailedInfoAboutFilm>}
        ></Route>

        <Route path="/movies" element={<h2>fdsafdsa</h2>}></Route>
      </Routes>
    </>
  );
};
